/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      background: 'white',
      'on-background': '#666666',
      'background-variant': '#fafafa',
      primary: '#F36F37',
      'on-primary': 'white',
      outline: '#EAEAEA',
      placeholder: '#8993A4',
      dark: '#131313',
      highlight: '#79FFE1',
      error: 'red',
      'on-error': 'white',
      warn: '#fff4e5',
      'on-warn': '#663c00',
      link: '#0070F3',
    },
    borderColor: {
      DEFAULT: '#EAEAEA',
      dark: '#131313',
      error: 'red',
      warn: '#fff4e5',
      primary: '#F36F37',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark'),
            '--tw-prose-headings': theme('colors.dark'),
          },
        },
      }),
      maxWidth: {
        container: '1440px',
        narrow: '1040px',
      },
      width: {
        container: '1440px',
        narrow: '950px',
      },
      height: {
        header: '70px',
      },
      boxShadow: {
        dropdown: '0 2px 5px 2px #EAEAEA',
      },
      fontSize: {
        sx: ['12px', '18px'],
        sm: ['14px', '20px'],
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
