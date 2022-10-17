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
      mono: ['Source Code Pro', 'monospace'],
      heading: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          100: '#D5ECC0',
          200: '#C1E3A1',
          300: '#ACD981',
          400: '#ACD981',
          500: '#82C743',
          600: '#6EAD34',
          700: '#3C5E1C',
          800: '#283F13',
          900: '#283F13'
        },
        secondary: {
          100: '#F9F6F1',
          200: '#EDE4D4',
          300: '#E0D1B8',
          400: '#D3BE9C',
          500: '#C6AB80',
          600: '#B99964'
        },
        accent: {
          100: '#E1ABA9',
          200: '#D78F8D',
          300: '#CD7370',
          400: '#C35754',
          500: '#B0413E',
          600: '#983935',
          700: '#7F2F2D',
          800: '#652624',
          900: '#4C1C1B'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
