/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      background: 'white',
      'on-background': '#666666',
      'background-variant': '#F2F2F2',
      primary: '#0070F3',
      'on-primary': 'white',
      outline: '#EAEAEA',
      placeholder: '#8993A4',
      dark: 'black',
      highlight:'#79FFE1',
      error: 'red',
    },
    borderColor: {
      DEFAULT: '#EAEAEA',
      dark: 'black',
    },
    extend: {
      maxWidth: {
        container: '1440px',
        narrow: '950px',
      },
      width: {
        container: '1440px',
        narrow: '950px',
      },
      height: {
        header: '64px',
      },
      boxShadow: {
        dropdown: '0 2px 5px 2px #EAEAEA',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
