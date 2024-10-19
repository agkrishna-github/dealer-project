/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "2023px" },

      md: { max: "720px" },
    },
    /*  sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      xxl: { min: "1536px" }, */
  },
  plugins: [],
  corePlugins: {
    // preflight: true,
    preflight: false,
  },
};
