import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#121212",
          surface: "#181818",
          card: "#1e1e1e",
          elevated: "#252525",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#38bdf8",
          blue: "#38bdf8",
          cyan: "#22d3ee",
          emerald: "#34d399",
          violet: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(56, 189, 248, 0.12)",
        "glow-card": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
