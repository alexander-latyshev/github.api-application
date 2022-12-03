/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "github-grey": "#161b22",
        "github-dg": "#0d1117",
        "github-col": "#161b22",
        "github-border": "#30363d",
        "github-search": "#0d1117",
      },
    },
  },
  plugins: [],
};
