/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,md,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          150: '#EDEDED',
          750: '#333333',
          850: '#1F1F1F',
        },
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      zIndex: {
        '100': '100',
        '150': '150',
        '200': '200',
        '250': '250',
        '300': '300',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',
}
