/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./src/assets/shop1.webp')",
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(auto, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [],
}
