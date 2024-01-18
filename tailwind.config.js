/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0b2545",
        blue: "#13315c",
        lightblue: "#134074",
        grey: "#8da9c4",
        cream: "#eef4ed",
      },
    },
  },
  plugins: [],
};
