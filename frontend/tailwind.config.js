/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}" // ensures Tailwind scans your Angular files
    ],
    theme: {
      extend: {
        fontFamily: {
          jersey: ['"Jersey 25"', 'cursive']
        }
      }
    },  
    plugins: []
  }
  