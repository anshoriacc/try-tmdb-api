/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#007cab",
        darkblue: "#003c5e",
        lightred: "#f43525",
        darkred: "#a72419",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
