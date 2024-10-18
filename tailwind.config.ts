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
       primaryColor: "#0ca092",
       secondaryColor: "#57e1d4",
       tertiaryColor: "#F3F4F6",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
