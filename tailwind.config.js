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
        dark: 'black',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
}
