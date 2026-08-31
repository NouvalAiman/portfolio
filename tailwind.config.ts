import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "rgba(255, 255, 255, 0.03)",
        border: "#1F2937",
        "border-subtle": "#1A1A1A",
        primary: {
          DEFAULT: "#00E5FF",
          glow: "rgba(0, 229, 255, 0.4)",
        },
        secondary: {
          DEFAULT: "#B026FF",
          glow: "rgba(176, 38, 255, 0.4)",
        },
        foreground: "#ededed",
        muted: "#71717a",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "monospace"],
        heading: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(ellipse at center, rgba(26, 26, 26, 0.3) 0%, transparent 70%)",
        "scanline": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 229, 255, 0.03) 2px, rgba(0, 229, 255, 0.03) 4px)",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "circuit-pulse": "circuit-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.3), 0 0 40px rgba(0, 229, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.5), 0 0 80px rgba(0, 229, 255, 0.2)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "circuit-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scaleX(1)" },
          "50%": { opacity: "1", transform: "scaleX(1.02)" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(0, 229, 255, 0.3), 0 0 40px rgba(0, 229, 255, 0.1)",
        "glow-secondary": "0 0 20px rgba(176, 38, 255, 0.3), 0 0 40px rgba(176, 38, 255, 0.1)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        "glass": "12px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;