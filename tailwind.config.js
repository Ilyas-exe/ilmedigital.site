/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#0A2647',
        'jet': '#2D2D2D',
        'orange': '#FFA500',
        'orange-dark': '#E59400',
      },
      fontFamily: {
        // This makes 'Poppins' the default font for your project
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

