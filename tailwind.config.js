/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': "#1C1B1F",
        'surface-light': '#FFFBFE',
        'surface-secondary-dark': "#232129",
        'surface-secondary-light': "#F0EAF5",
      }
    },
  },
  plugins: [],
}
