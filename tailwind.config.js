/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        macblue: '#01426A'
      },
      fontFamily: {
        bebas_neue: ['var(--font-bebas_neue)'],
        roboto_slab: ['var(--font-roboto_slab)'],
        montserrat: ['var(--font-montserrat)']
      }
    },
  },
  plugins: [],
}
