/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": 'url("/public/images/hero-bg.png")',
      },
      backgroundColor: {
        "theme-black": "#1E1B1B",
        "theme-gray": "#F5F5F5",
      },
      colors: {
        "theme-black": "#1E1B1B",
        "theme-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
