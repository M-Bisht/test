module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        deep_orange: { 300: "#ff7262", 600: "#f24e1e" },
        gray: { 900: "#181e25", "900_0a": "#1714390a", "900_01": "#19222b" },
        deep_purple: { A200: "#a259ff" },
        light_blue: { 400: "#1abcfe" },
        white: { A700: "#ffffff" },
        green: { A400: "#0acf83" },
      },
      fontFamily: { kohsantepheap: "Koh Santepheap", raleway: "Raleway" },
      boxShadow: { bs: "0px 20px  35px 0px #1714390a" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
