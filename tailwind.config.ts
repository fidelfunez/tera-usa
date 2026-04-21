import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"]
      },
      colors: {
        navy: "#1A2E4A",
        "electric-blue": "#2563A8",
        "tera-green": "#16A34A"
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "2rem" }
      }
    }
  },
  plugins: []
};

export default config;
