import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FFFFFF",
          subtle: "#FBF9F5",
          warm: "#F6F1E8",
        },
        gold: {
          light: "#D8C29D",
          muted: "#C4A674",
          antique: "#B08D57",
          deep: "#8C6D36",
        },
        heritage: {
          brown: "#2B1B14",
          deep: "#1A110D",
          border: "#E8E2D8",
          secondary: "#5C4E46",
          tertiary: "#8C7D73",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "'Playfair Display'", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        regal: "0.2em",
        editorial: "0.08em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(43, 27, 20, 0.08)",
        "luxury-hover": "0 25px 50px -12px rgba(43, 27, 20, 0.16)",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
