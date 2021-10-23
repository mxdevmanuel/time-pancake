module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          light: "#737bb7",
          DEFAULT: "#1E213A",
          dark: "#100E1D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
