import type { Config } from "tailwindcss";
// import { robotoBold } from "./public/fonts/fonts";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoBold: "var(--font-roboto-bold)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tomato: { DEFAULT: "hsl(var(--tomato))" },
        Neutral: {
          tomato: "hsl(var(--tomato))",
          dark_slate_gray: "hsl(var(--dark-slate-gray))",
          charcoal_gray: "hsl(var(--charcoal-gray))",
          grey: "hsl(var(--grey))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
