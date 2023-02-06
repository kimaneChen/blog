/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'white',
        'background-variant': '#F2F2F2',
        'on-background': '#666666',
        primary: '#0070F3',
        outline: '#EAEAEA',
        placeholder: '#8993A4',
        surface: '#F2F2F2',
        dark: 'black',
      },
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
