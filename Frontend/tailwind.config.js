/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        noyhgeometricBold: ["noyhgeometric-bold", "sans-serif"],
        noyhgeometricRegular: ["noyhgeometric-regular", "sans-serif"],
        brandonGrotesqueRegular: ["Brandon_Grotesque_regular", "sans-serif"],
        brandonGrotesqueMedium: ["Brandon_Grotesque_medium", "sans-serif"],
        brandonGrotesqueBold: ["Brandon_Grotesque_bold", "sans-serif"],
        brandonGrotesqueBlack: ["Brandon_Grotesque_black", "sans-serif"],
        josefinSansBold: ["JosefinSans-Bold", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
        "60/40": "60% 38%",
      },
    },
  },
  plugins: [],
};
