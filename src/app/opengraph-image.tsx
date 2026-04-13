import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "28px",
            padding: "48px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#22dd55",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            React Native Engineer
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 700,
                maxWidth: 900,
              }}
            >
              Chathura Buddhika
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                color: "#d4d4d8",
                maxWidth: 920,
              }}
            >
              Mobile Software Engineer building performant iOS, Android, and web
              products.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 28,
              color: "#a1a1aa",
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</div>
            <div style={{ display: "flex" }}>React Native • Next.js • TypeScript</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
