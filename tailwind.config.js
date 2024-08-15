/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      md: ["22px", { lineHeight: "1.2", letterSpacing: "-0.011em" }],
      lg: ["32px", { lineHeight: "1", letterSpacing: "-0.0145em" }],
      xl: ["46px", { lineHeight: "1", letterSpacing: "-0.0145em" }],
    },
    extend: {
      fontFamily: {
        serif: "serif",
        sans: "sans-serif",
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
        "brand-primary": "#231D19",
        "brand-beige": "#ffffff",
      },
    },
  },
  plugins: [],
};
