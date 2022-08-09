/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          200: '#63BDFF',
          500: '#2872E1',
          700: '#235AAC',
          800: '#244A83'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
