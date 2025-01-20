/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        Background: '#FCF4E7',
        PrimaryOrange: '#593B20',
        SecondaryOrange: '#593B20',
        PrimaryOrange2: '#593B20',
        PrimaryOrange3: '#593B20',
        SecondaryDark: '#F5EFE1',
        PrimaryDark: '#5C5E5D'
      },
    },
  },
  plugins: [],
}