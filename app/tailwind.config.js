/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['"League Spartan", sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          light: '#9277FF',
          DEFAULT: '#7C5DFA',
          dark: '#7E88C3',

        },
        blue: {
          default: '#252945',
          dark: '#1E2139'
        },
        green: {
          light: '#F3FCF9',
          DEFAULT: '#33D69F',
        },
        grey: {
          light: '#DFE3FA',
          DEFAULT: '#888EB0',
          dark: '#373B53'
        },
        black: {
          light: '#141625',
          DEFAULT: '#0C0E16',
        },
        red: {
          light: '#9277FF',
          DEFAULT: '#EC5757',
        },
        orange: {
          light: '#FFF8F0',
          DEFAULT: '#FF8F00'
        },
        white: {
          light: '#F8F8FB',
          DEFAULT: '#FFFFFF'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

