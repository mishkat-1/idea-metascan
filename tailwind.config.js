/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        adventPro: ["Advent Pro"],
        exo: ["Exo"],
      },
      colors: {
        globalgrey: "#6A6A6A",
        globalwhite: "#DFDFDF",
        globalpink: "#EA00D9",
        globalcyan: "#0ABDC6",
        globalyellow: "#F99F3A",
        globalblack: "#000000",
        "gray-500": "#AEAEB8",
        "gray-700": "#71718B",
        "gray-800": "#1D1D37",

        "blue-700": "#141437",
        "blue-800": "#101028",
        "blue-900": "#070721",

        "orange-500": "#FF6D2C",
        "orange-700": "#FF3B45",
        "salad-green": "#1d9e6f",
        "salad-green-button": "#788f2b",
        dark: "rgb(24, 26, 27)",
        lighten: "rgba(255,255,255,0.02)",
        blurple: "#7289DA",
        darkBlurple: "#4E5D94",
        cardDarkBG: "#101028",
      },
      screens: {
        sm: "350px",
        "2xl": "1468px",
      },
      animation: {
        slideB: "slideB 500ms linear",
        slideT: "slideT 500ms linear",
        vote: "vote 1s ease-in-out ",
      },
      keyframes: {
        slideB: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideT: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
