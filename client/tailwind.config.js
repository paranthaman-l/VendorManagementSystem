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
        gray1:'#f5f6f9',
        darkGray: "#35393a",
        inputErrorRed: "#d0021b",
        indigo:'#0b134f',
        indigo1:'#0b3858',
        yellow:'#fedf82',
      },
      fontFamily: {
        poppins: "Poppins",
        alata: "Alata",
        montserrat: "Montserrat",
        nutnitoSans: "Nunito Sans",
        inter:'Inter'
      },
    },
  },
  plugins: [],
};
