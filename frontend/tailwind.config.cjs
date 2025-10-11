/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#A51C30',
          dark: '#820B22',
          light: '#D03B4B',
        },
        accent: { DEFAULT: '#DCA54C' },
        neutral: { 50: '#FAFAFA', 100: '#F5F5F5', 600: '#555555', 900: '#1C1C1C' },
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 20px -10px rgba(2,6,23,0.15), 0 2px 6px -2px rgba(2,6,23,0.08)',
      },
      borderRadius: { xl: '0.875rem', '2xl': '1.25rem' },
    },
  },
  plugins: [],
}
