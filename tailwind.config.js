const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          display: ["Lobster", ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [],
  }