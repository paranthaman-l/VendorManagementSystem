/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2998FF",
        bgGray: "#f6f6f6",
        hoverBlue: "#007ef3",
        gray: "#d9d9d9",
        gray1: "#f5f6f9",
        darkGray: "#35393a",
        inputErrorRed: "#d0021b",
        indigo: "#0b134f",
        indigo1: "#0b3858",
        indigo2: "#01164d",
        yellow: "#fedf82",
        lightGray: "#f9fafb",
        lightGray1: "#f8f8f8",
        lightGray2: "#f6f6f6",
        lightSkyBlue: "#f4faff",
        lightSkyBlue1: "#96cdff",
        lightSkyBlue2: "#ebf5ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nutnitoSans: ["Nunito Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:false,
    darkTheme:false,
  }
});
