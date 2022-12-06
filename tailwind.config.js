/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': "#0d1117",
        'surface-light': '#ffffff',
        'surface-secondary-dark': "#161b22",
        'surface-secondary-light': "#F0EAF5",
        'border-dark': "#30363d",
        'border-light': "#d0d7de",
        'text-secondary-dark': "#6e7681",
        "text-secondary-light": "#6e7781",
        'accent-dark': "#1f6feb",
        'accent-light': "#0969da",
        'accent-fg-dark': "#58a6ff",
      }
    },
  },
  plugins: [],
}
