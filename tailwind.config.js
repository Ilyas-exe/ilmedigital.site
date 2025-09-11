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
        sans: ['Poppins', 'sans-serif'],
      },
      // Adding larger font sizes for impact
      fontSize: {
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem',  // 72px
        '8xl': '6rem',    // 96px
      },
      // Adding a subtle blueprint grid background image
      backgroundImage: {
        'blueprint': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23E5E7EB'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }
    },
  },
  plugins: [],
}