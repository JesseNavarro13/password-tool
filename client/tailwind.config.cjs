/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f3',
          100: '#b3d4dd',
          200: '#80b8c7',
          300: '#4d9cb1',
          400: '#1a809b',
          500: '#25526b', // Base color
          600: '#1e4256',
          700: '#173241',
          800: '#10222c',
          900: '#091217',
        },
        accent: {
          light: '#4fa3b8',
          DEFAULT: '#3a7a8f',
          dark: '#2d6b7f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(37, 82, 107, 0.15)',
        'glow': '0 0 20px rgba(37, 82, 107, 0.3)',
      },
    },
  },
  plugins: [],
}