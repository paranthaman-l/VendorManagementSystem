/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2998FF",
        bgGray: "#f6f6f6",
        hoverBlue: "#007ef3",
        gray: "#d9d9d9",
        darkGray: "#35393a",
        inputErrorRed: "#d0021b",
      },
      fontFamily: {
        poppins: "Poppins",
        alata: "Alata",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
