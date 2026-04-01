import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
const contactEmailTo =
  process.env.CONTACT_EMAIL_TO ?? "lpchathurabuddhika@gmail.com";
const contactEmailFrom =
  process.env.CONTACT_EMAIL_FROM ?? "Portfolio Contact <onboarding@resend.dev>";
const RECAPTCHA_EXPECTED_ACTION = "contact_form";
const RECAPTCHA_MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 254;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 2000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimitStore = globalThis as typeof globalThis & {
  contactFormRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalRateLimitStore.contactFormRateLimit ??
  (globalRateLimitStore.contactFormRateLimit = new Map<string, RateLimitEntry>());

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getClientIp = (req: NextRequest) => {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return req.headers.get("x-real-ip") ?? "unknown";
};

const applyRateLimit = (ip: string) => {
  const now = Date.now();

  Array.from(rateLimitStore.entries()).forEach(([key, entry]) => {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  });

  const existingEntry = rateLimitStore.get(ip);

  if (!existingEntry || existingEntry.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { allowed: true, retryAfterMs: 0 };
  }

  if (existingEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterMs: existingEntry.resetAt - now,
    };
  }

  existingEntry.count += 1;
  rateLimitStore.set(ip, existingEntry);

  return { allowed: true, retryAfterMs: 0 };
};

const validateContactForm = (
  name: string,
  email: string,
  message: string
) => {
  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    return `Name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters`;
  }

  if (email.length > EMAIL_MAX_LENGTH || !emailPattern.test(email)) {
    return "Please enter a valid email address";
  }

  if (
    message.length < MESSAGE_MIN_LENGTH ||
    message.length > MESSAGE_MAX_LENGTH
  ) {
    return `Message must be between ${MESSAGE_MIN_LENGTH} and ${MESSAGE_MAX_LENGTH} characters`;
  }

  return null;
};

const verifyRecaptchaToken = async (token: string, ip: string) => {
  if (!recaptchaSecretKey) {
    return { success: false, message: "reCAPTCHA is not configured" };
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: recaptchaSecretKey,
      response: token,
      remoteip: ip,
    }),
  });

  const data = (await response.json()) as {
    success?: boolean;
    action?: string;
    score?: number;
  };

  if (!data.success) {
    return { success: false, message: "reCAPTCHA verification failed" };
  }

  if (data.action !== RECAPTCHA_EXPECTED_ACTION) {
    return { success: false, message: "Invalid reCAPTCHA action" };
  }

  if (typeof data.score !== "number" || data.score < RECAPTCHA_MIN_SCORE) {
    return { success: false, message: "reCAPTCHA score too low" };
  }

  return { success: true, message: null };
};

export const POST = async (req: NextRequest) => {
  if (!resendApiKey || !recaptchaSecretKey) {
    return NextResponse.json(
      { success: false, message: "Server email protection is not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();
  const captchaToken = body?.captchaToken?.trim();

  if (!name || !email || !message || !captchaToken) {
    return NextResponse.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );
  }

  const validationError = validateContactForm(name, email, message);

  if (validationError) {
    return NextResponse.json(
      { success: false, message: validationError },
      { status: 400 }
    );
  }

  const clientIp = getClientIp(req);
  const rateLimitResult = applyRateLimit(clientIp);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many submissions. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(rateLimitResult.retryAfterMs / 1000).toString(),
        },
      }
    );
  }

  try {
    const recaptchaResult = await verifyRecaptchaToken(captchaToken, clientIp);

    if (!recaptchaResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed captcha verification. Please try again.",
        },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Captcha verification failed. Please try again.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: "Portfolio Contact",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Portfolio Contact</h2>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Error sending email",
      },
      { status: 500 }
    );
  }
};
