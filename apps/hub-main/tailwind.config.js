/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f7df1e',
          dark: '#0d1117',
        }
      }
    },
  },
  plugins: [],
}