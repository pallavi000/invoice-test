/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: "#0b0b14",
        form_background: "rgba(20 20 37)",
        input: "#1f2139",
        btn_primary: "rgba(124 93 248)",
        btn_secondary: "#30314f",
        pending: "rgb(255 142 1)",
        paid: "rgb(51 214 195)",
        delete: "rgb(237 87 88)",
        sidebar: "rgb(31 33 58)",
        drawer: "rgb(20 22 37)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
