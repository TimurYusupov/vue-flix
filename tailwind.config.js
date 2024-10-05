/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#282828',
        'custom-light-gray': '#666',
        'custom-dark-gray': '#2c2c2c',
        'cold-steel': '#4F4F4F',
        'sidebar-title': '#ffd200',
        'sidebar-border': '#454545'
      },
    },
  },
  plugins: [],
}

