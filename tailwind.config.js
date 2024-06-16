/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      primary: {
        50: "#f7f7f7",
        100: "#f2f2f2",
        200: "#e8e8e8",
        300: "#cfcfcf",
        400: "#8f8f8f",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000",
      },
    },
    extend: {},
  },
  plugins: [],
};
