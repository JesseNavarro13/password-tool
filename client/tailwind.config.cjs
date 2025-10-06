/** @type {import('tailwindcss').Config} */
module.export = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brandBlue: '#2badd1',
        darkBg: '#373f47',
        darkCard: '#2f4858',
        lightCard: '#f9f9f9',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        strong: '4px 4px 6px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}