/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'palette1': '#22577a',
        'palette2': '#38a3a5',
        'palette3': '#57cc99',
        'palette4': '#80ed99',
        'palette5': '#c7f9cc',
      },
    },
  },
  plugins: [],
}

