import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_KEY,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // Include the name in the "from" field
      to: process.env.SMTP_USER, // Send the email to yourself
      subject: "Portfolio Contact",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Portfolio Contact</h2>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });


    return NextResponse.json({ success: true, message: info.accepted });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error sending email",
    });
  }
};
