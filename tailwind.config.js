/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        knockout47: ["KNOCKOUT-47", "san-serif"],
        knockout481: ["KNOCKOUT-481", "san-serif"],
        minion: ["MINION-REGULAR", "san-serif"],
        minionIT: ["MINION-IT", "san-serif"]
      }

    },
  },
  plugins: [],
}
