/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: 'rgba(9, 94, 78, 1)',
      secondary: 'rgba(255, 148, 172, 0.1)',
      myWhite: 'rgba(248, 248, 248, 1)',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
