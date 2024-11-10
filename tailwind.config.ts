import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         skyBlue: "#007cc3",
      },
    },
  },
  plugins: [],
};
export default config;
