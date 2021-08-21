const plugin = require('tailwindcss/plugin')
const { banner } = require('./src/settings/banner.json') 
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography"),
  plugin(({ addUtilities }) => {
    const newUtilities = {
      '.banner': {
        'background-image': `url(${ "../../" + banner})`,
        'background-size': `cover`,
        'background-position': `center`,
      }
    }

    addUtilities(newUtilities)
  }),
],
}
