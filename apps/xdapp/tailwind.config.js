/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@labxd/gustxd/tailwind-preset")],
  content: [
    "./src/**/*.tsx",
    "node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}",
  ],
}
