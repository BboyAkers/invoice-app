/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#9277FF',
          default: '#7C5DFA',
          dark: '#7E88C3',
          extradark: '#373B53'
        },
        blue: {
          default: '#252945',
          dark: '#1E2139'
        },
        grey: {
          light: '#DFE3FA',
          default: '#888EB0',
        },
        black: {
          light: '#141625',
          default: '#0C0E16'
        },
        red: {
          light: '#9277FF',
          default: '#EC5757',
        },
        white: {
          light: '#F8F8FB'
        }
      },
    },
  },
  plugins: [],
}
