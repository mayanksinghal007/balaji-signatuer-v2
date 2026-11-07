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
          warm: "#F5F1E9",
        },
        gold: {
          light: "#E3D3B5",
          muted: "#C8AD78",
          antique: "#B89758",
          deep: "#8C6D36",
        },
        heritage: {
          brown: "#2A1B14",
          deep: "#1A110D",
          border: "#E8E2D8",
          secondary: "#5C4E46",
          tertiary: "#8C7D73",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        regal: "0.2em",
        editorial: "0.08em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(42, 27, 20, 0.08)",
        "luxury-hover": "0 25px 50px -12px rgba(42, 27, 20, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;

