import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LPCB Portfolio",
  description: "Liyana Pathiranage Chanthura Buddhika Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`portfolio-body ${inter.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
