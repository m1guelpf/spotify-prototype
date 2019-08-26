/* eslint-disable global-require */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#E8F8EE',
          200: '#C7EED5',
          300: '#A5E3BB',
          400: '#61CE88',
          500: '#1DB955',
          600: '#1AA74D',
          700: '#116F33',
          800: '#0D5326',
          900: '#09381A',
        },
        black: {
          100: '#E8E8E8',
          200: '#C6C4C4',
          300: '#A3A1A1',
          400: '#5E5B5B',
          500: '#191414',
          600: '#171212',
          700: '#0F0C0C',
          800: '#0B0909',
          900: '#080606',
        },
      },
      fontFamily: {
        sans: ['"Proxima Nova"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {
        16: '4rem',
        24: '6rem',
        '300px': '300px',
      },
      variants: ['responsive'],
    }),
  ],
};
