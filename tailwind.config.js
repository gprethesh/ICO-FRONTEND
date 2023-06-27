/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        lg: "992px",
        sm: "530px",
        // => @media (min-width: 992px) { ... }
      },
    },
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
