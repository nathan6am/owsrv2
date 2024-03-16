import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
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
      textShadow: {
        sm: "0 1px 2px rgba(12,12,12, 0.3)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        header: ["Kallisto", "sans-serif"],
        kallisto: ["Kallisto", "sans-serif"],
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
          0: "#121212",
          1: "#1e1e1e",
          2: "#262629",
          3: "#2e2f33",
          4: "#333438",
          5: "#3f4046",
          6: "#46474c",
          7: "#595b67",
          8: "#6c6e7b",
        },
        light: {
          500: "#4d5156",
          400: "#7c848d",
          300: "#868f98",
          200: "#c4c9cf",
          100: "#eaf0f6",
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
    gridTemplateColumns: {
      eventGridSm: "repeat( auto-fit, minmax(20rem, 1fr) )",
      eventGrid: "repeat( auto-fit, minmax(25rem, 1fr) )",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
