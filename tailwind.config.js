module.exports = {
  purge: {
    content: ["./src/**/*.tsx", "./public/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { left: "-34%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        loading: "loading 2s linear infinite",
      },
      minHeight: {
        52: "13rem",
      },
    },
    fontFamily: {
      noto: ["Noto Sans"],
      pop: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
