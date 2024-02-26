const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,css}"],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}