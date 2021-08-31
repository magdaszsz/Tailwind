module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bk-red": "hsl(0, 94%, 66%)",
        "bk-blue": "hsl(231, 69%, 60%)",
        "bk-dark-blue": "hsl(229, 31%, 21%)",
        "bk-grayish-blue": "hsl(229, 8%, 60%)",
      },
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
