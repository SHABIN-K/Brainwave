/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        bgColor: {
          main: "#ffffff",
          primary:"#000000",
          gray:"#6c6867",
        },
        textColor: {
          main: "#000000",
          primary: "#ffffff",
          secondary: "#6c6867",
        },
      },
    },
  },
  plugins: [],
};
