/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      cursive: ["Lexend", "cursive"],
      body: ["Sigmar"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
      black: "rgb(var(--color-black) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      gray: colors.gray,
      neutral: colors.neutral,
    },
    minWidth: {
      2: "2rem",
      13: "2.5rem",
      14: "3.5rem",
      28: "7rem",
      30: "8rem",
      56: "14rem",
      64: "16rem",
    },
    minHeight: {
      28: "7rem",
      36: "9rem",
    },
    extend: {
      height: {
        128: "32rem",
        132: "36rem",
      },
      transitionProperty: {
        transform: "transform",
        "max-height": "max-height",
        width: "width",
        spacing: "width, padding",
        height: "height",
      },
      maxWidth: {
        10: "10rem",
        150: "150px",
        "1/4": "25%",
      },
      borderWidth: {
        "1/2": "0.5px",
      },
      keyframes: {
        reveal: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        reveal: "reveal 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
