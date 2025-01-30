/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins-Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        verdekaki: '#D6D58E',
        lima: '#DBF227',
        verde: '#9FC131',
        verdeoscuro: '#005c53',
        verdeazulado: '#042940',
      },
      screens: {
        sm: "400px",
      },
    },
  },
  plugins: [],
}
