/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.modal': {
          'position': 'fixed',
          'width': '100%',
          'left': '0',
          'top': '0',
          'height': '100vh',
          'background': 'rgba(0, 0, 0, .43)',
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'end',
        },
        '.modal-content': {
          'max-width': '640px',
          'background': 'white',
          'padding': '20px',
          'border-radius': '10px',
          'width': '100%',
        },
        '.img': {
          'color': 'transparent',
          'width': '64px',
          'border-radius': '5px',
        }
      })
    }),
  ],
}
