import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bw: {
          primary: "#4B4EFC",
          dark: "#3B3EC7",
          accent: "#FF5A5F",
          navy: "#1A1A2E",
          light: "#F5F5FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
