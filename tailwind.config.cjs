/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        inherit: ['inherit']
      },
      colors: {
        /* primary #5FD9FB */
        primary: {
          50: '#F2FCFF',
          100: '#E6FAFF',
          200: '#CFF6FF',
          300: '#B8F2FF',
          400: '#8FE9FF',
          500: '#5FD9FB',
          600: '#4DB9D9',
          700: '#3A8FAF',
          800: '#2A6F8F',
          900: '#1D4F6F'
        }
      }
    }
  },
  plugins: []
}
