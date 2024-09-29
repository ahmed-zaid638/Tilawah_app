/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009048',
        yellow: '#FFD900',
        black: "#0F160F"
      }
    },
  },

  plugins: [],
}

