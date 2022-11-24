/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': "#202124",
        'surface-light': '#FFFBFE',
        'surface-secondary-dark': "#232129",
        'surface-secondary-light': "#F0EAF5",
      }
    },
  },
  plugins: [],
}
