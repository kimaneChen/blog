/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'white',
        'on-background': '#666666',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
}
