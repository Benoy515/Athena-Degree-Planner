/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: { 
          100: "#FF5733"
        }
      },
      fontFamily: {
        "major": ['"Major Mono Display"'],
        "poppins": ["Poppins"]
      }
    },
  },
  plugins: [],
}

