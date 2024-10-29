// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealblue: '#008080', // Teal Blue
        azure: '#007FFF', // Azure
      },
    },
  },
  plugins: [],
}
