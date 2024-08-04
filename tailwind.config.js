/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "serif",
        sans: "sans-serif",
      },
      fontSize: {
        base: ["14px", "16.8px"],
        logo: ["37.5px", "34px"],
      },
      spacing: {
        "rem-1/4": ".25rem",
        "rem-1/2": ".5rem",
        "rem-1": "1rem",
        "rem-2": "2rem",
        "rem-3": "3rem",
        "rem-4": "4rem",
      },
      colors: {
        "brand-gray": "#23201F",
      },
    },
  },
  plugins: [],
};
