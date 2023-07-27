/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm' : '425px' ,
            // => @media (min-width: 425px) { ... }
        }
    },
    plugins: [],
  }