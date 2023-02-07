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
      surface: '#F2F2F2',
      dark: 'black',
    },
    borderColor: {
      DEFAULT: '#EAEAEA',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
