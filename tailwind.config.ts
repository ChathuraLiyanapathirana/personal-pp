import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '320px',
      'xxs': '270px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-fira)", ...defaultTheme.fontFamily.mono],
        display: ["var(--font-fira)", ...defaultTheme.fontFamily.mono],
        mono: ["var(--font-fira)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: {
          DEFAULT: "#22dd55",
          dim: "#16a34a",
          glow: "rgba(34, 221, 85, 0.35)",
          surface: "rgba(34, 221, 85, 0.08)",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          muted: "#1a1a1a",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-mesh-light":
          "radial-gradient(ellipse 120% 80% at 100% 0%, rgba(34,221,85,0.18) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 0% 100%, rgba(10,10,10,0.06) 0%, transparent 50%)",
        "hero-mesh-dark":
          "radial-gradient(ellipse 120% 80% at 100% 0%, rgba(34,221,85,0.22) 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 0% 100%, rgba(34,221,85,0.08) 0%, transparent 45%)",
      },
      boxShadow: {
        brand: "0 0 0 1px rgba(34, 221, 85, 0.25), 0 24px 48px -12px rgba(0, 0, 0, 0.35)",
        "brand-sm": "4px 4px 0 0 #22dd55",
        "brand-lg": "8px 8px 0 0 #0a0a0a",
        "experience-glow":
          "0 0 0 1px rgba(34, 221, 85, 0.2), 0 4px 24px -4px rgba(34, 221, 85, 0.15), 0 32px 64px -24px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "experience-shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "experience-pulse-ring": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        "experience-shimmer": "experience-shimmer 4s linear infinite",
        "experience-pulse-ring": "experience-pulse-ring 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config
