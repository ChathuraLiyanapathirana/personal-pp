import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chathura Buddhika Portfolio",
    short_name: "LPCB Portfolio",
    description:
      "Portfolio of Chathura Buddhika, a React Native engineer and mobile software engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#22dd55",
    lang: "en",
  };
}
