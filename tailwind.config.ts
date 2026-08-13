import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08080c",
        surface: "#101018",
        panel: "#15151f",
        accent: "#7c5cff",
        accent2: "#22d3ee",
        muted: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at center, rgba(124,92,255,0.15) 0%, rgba(8,8,12,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
