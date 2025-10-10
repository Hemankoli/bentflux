// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        mainBg: "linear-gradient(to bottom right, #0a192f, #112240, #1b263b)",
        secondaryBg: "linear-gradient(to bottom right, #0e2548ff, #09306fff, #112f67ff)",
      },
      textColor: {
        primary: "#e2e8f0",    // light gray (for main text)
        secondary: "#94a3b8",  // soft gray-blue (for subtext)
        accent: "#00b3ffff",     // cyan-blue accent
        heading: "#f8fafc",    // near white for headings
      },
      borderColor: {
        primary: "#1e293b",
        secondary: "#00b3ffff",  // dark blue-gray
        soft: "rgba(255,255,255,0.1)", // subtle white border
      },
    },

  },
  plugins: [],
}