import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        facebook: "#4267B2",
        discord: {
          100: "#7983f5",
          200: "#5865F2",
        },
        youtube: "#c4302b",
        twitch: "#6441a5",
        dark: {
          100: "#080808",
          150: "#0c0c0c",
          200: "#121212",
          300: "#1f1f1f",
          400: "#404040",
          500: "#5f5f5f",
          600: "#727272",
          700: "#9b9b9b",
          800: "#bbbbbb",
          900: "#dedede",
        },
        elevation: {
          100: "#121212",
          200: "#1e1e1e",
          250: "#262629",
          300: "#2e2f33",
          400: "#333438",
          500: "#3f4046",
          600: "#46474c",
        },
        light: {
          100: "#4d5156",
          200: "#7c848d",
          300: "#868f98",
          400: "#c4c9cf",
          500: "#eaf0f6",
        },
        primary: {
          100: "#ffcbcf",
          200: "#f89694",
          300: "#f16c6a",
          400: "#fb4742",
          500: "#ff3121",
          600: "#f22323",
          700: "#e0121d",
          800: "#d30015",
        },
        success: {
          100: "#bbedcb",
          200: "#8ce1a9",
          300: "#50d585",
          400: "#00cb69",
          500: "#00bf51",
          600: "#00b047",
        },
      },
    },
  },
  plugins: [],
};
export default config;
