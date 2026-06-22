import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-code-pro)", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#0a0a0a",
        charcoal: "#1a1a1a",
        stone: "#6b6b6b",
        mist: "#e8e8e8",
        paper: "#fafafa",
        border: "#e5e5e5"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          md: "2rem",
          lg: "2.5rem"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
