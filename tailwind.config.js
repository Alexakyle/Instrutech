/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
      },
      colors: {
        // Rich, visible green - inspired by Instrutech's actual site
        primary: "#166534", // Deep forest green - visible but professional
        secondary: "#15803D", // Medium green for accents
        secondaryOrange: "#22C55E", // Lighter green for hover states
        
        // Backgrounds - clean and neutral
        "main-bg": "#FFFFFF",
        "card-dark": "#F8FAFC",
        "main-dark": "#0F172A",
        "dark-light": "#1E293B",
        "hover-color-dark": "#2D3A4F",
        dark: "#0F172A",
        "light-green": "#F0FDF4", // Very light green for subtle highlights
        "cta-green": "#166534",
        
        // Rich grays
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          color: "#64748B", // gray-500
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".card-shadow": {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        },
        ".shadow-light": {
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        },
        ".border-light": {
          border: "1px solid #E2E8F0", // gray-200
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #F8FAFC inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #1E293B inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#0F172A",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};