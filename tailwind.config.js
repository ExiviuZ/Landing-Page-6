/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      "Play-Fair": ["Playfair Display"],
      sen: ["Sen"],
    },
    extend: {
      colors: {
        "brownish-340": "hsl(340, 6%, 20%)",
        "brownish-350": "hsl(350, 6%, 20%)",
        white: "hsl(0, 0%, 100%)",
        "white-35": "hsla(0, 0%, 100%, 0.35)",
        "gray-85": "hsl(0, 0%, 85%)",
        almond: "hsl(19, 35%, 47%)",
        "blanched-almond": "hsl(33, 51%, 85%)",
      },
    },
  },
  plugins: [],
};
