module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "3/4": "75%",
      "4/5": "81%",
    },
    extend: {
      colors: {
        default: "#24a9c9",
        "default-50": "#EFF6FB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
