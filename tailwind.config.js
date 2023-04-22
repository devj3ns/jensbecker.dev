/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        "neutral-150": "#EDEDED",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
