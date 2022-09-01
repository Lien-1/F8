const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.jsx',
    './src/components/**/**.jsx',
    './src/layouts/**.jsx',
  ],
  // keyframes: {
  //   fadeIn: {
  //     'from': { transform: 'translateX(-100%)' },
  //     'to': { transform: 'translateX(0)' },
  //   }
  // },
  theme: {
    fontFamily: {
      // sans: ['Montserrat','sans-serif'],
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        '.scrollbar': {
          overflowY: 'auto',
          scrollbarColor: `${theme('colors.neutral.300')} ${theme('colors.white')}`,
          scrollbarWidth: 'thin',
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '7px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: theme('colors.neutral.300'),
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          borderRadius: '10px',
          backgroundColor: theme('colors.white'),
        },
      });
    }),
  ],
}
