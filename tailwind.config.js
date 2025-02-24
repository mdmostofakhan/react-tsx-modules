/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
       'primary-gradient': 'liner-gradient(30deg, #121063, #78dcca )',
     }
    },
  },
  plugins: [],
}
