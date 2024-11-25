import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
       primary: "#0ca092",
       secondary: "#57e1d4",
       tertiary: "#F3F4F6",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
