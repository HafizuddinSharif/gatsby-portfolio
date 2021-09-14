module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#30ACFF'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
