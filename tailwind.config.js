/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Ensure karo ye 'class' hi hai
  theme: {
    extend: {},
  },
  plugins: [],
}