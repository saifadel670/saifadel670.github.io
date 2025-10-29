/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This line ensures Tailwind scans all your React component files (.ts, .tsx, .js, .jsx)
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class on <html>
  theme: {
    extend: {
      fontFamily: {
        // You specified the Inter font in your design rules
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
