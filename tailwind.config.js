/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      //Light Colors
      'surface-light': '#ffffff',
      'borderColor': "#e4e2e0",
      'inputBorder': "#949494",
      'iconColor': "#949494",
      'textColor': "#2d2d2d",
      'textColorMuted': "#6d6d6d",
      'textColorSecondary': "#767676",
      'placeholder': "#6f6f6f",
      'accent': "#2557a7",
      'accentMuted': "rgba(84,174,255,0.4)",
      'buttonSecondary': "#e4e2e0",
      'buttonSecondaryDark': "#21262d",
      'successBackground': "##e4f7e5",
      // Dark colors
      'borderColorDark': "#30363d",

        'surface-dark': "#0d1117",
        
        'surface-secondary-dark': "#161b22",
        'surface-secondary-light': "#f6f8fa",
        'border-dark': "#30363d",
        'border-light': "#d0d7de",
        'text-secondary-dark': "#6e7681",
        "text-secondary-light": "#6e7781",
        'accent-dark': "#1f6feb",
        'accent-light': "#0969da",
        'accent-fg-dark': "#58a6ff",
        'success-secondary-light': "#dafbe1",
        'success-fg-light': "#1a7f37",
        'success-secondary-dark': "rgba(46,160,67,0.15)",
        'success-fg-dark': "#3fb950",

        //Button Dark Mode
        'button-dark': "#21262d",
        'button-text-dark': "#c9d1d9",
        'button-border-dark': "#f0f6fc1a",

        //Button Light Mode
        'button': "#f6f8fa",
        'button-text': "#24292f",
        'button-border': "#1b1f2426",

        

      }
    },
  },
  plugins: [],
}
