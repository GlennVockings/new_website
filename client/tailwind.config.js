/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      cursive: ["Lilita One", "cursive"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
      black: "rgb(var(--color-black) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
    },
    minWidth: {
      14: "3.5rem",
    },
    minHeight: {
      36: "9rem",
    },
    extend: {
      transitionProperty: {
        transform: "transform",
        "max-height": "max-height",
        width: "width",
        spacing: "width, padding",
      },
      maxWidth: {
        150: "150px",
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
