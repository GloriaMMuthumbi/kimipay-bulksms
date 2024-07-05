/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kimiBlue: {
          DEFAULT: '#3490dc',
          dark: '#2779bd',
        },
        customGray: '#6b7280',
      },
    },
  },
  plugins: [],
}

