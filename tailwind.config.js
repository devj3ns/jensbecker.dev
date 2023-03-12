/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config
  // https://daisyui.com/docs/config/
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e3a8a",
          secondary: "#f6d860",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
