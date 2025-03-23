/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0a7ea4',
        secondary: '#7B31FC',
        accent: '#540bdf',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // mono: ['SpaceMono-Regular', 'monospace'],
      }
    },
  },
  plugins: [],
}