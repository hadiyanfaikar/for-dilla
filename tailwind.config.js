/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#ffe4e1', // Misty Rose
        'romantic-cream': '#fffdd0',
        'romantic-rose': '#b76e79', // Rose Gold
        'romantic-red': '#8b0000', // Deep Red
        'romantic-soft': '#fff0f5', // Lavender Blush
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
