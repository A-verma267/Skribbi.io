/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#3B6FD4",
          panel: "#3D6FE0",
          panelDark: "#3567D6",
          footer: "#2F5EC4",
          play: "#7FD13B",
          playHover: "#8FDB4F",
          private: "#4A90E2",
          privateHover: "#5B9EF0",
          ad: "#1E2126",
          input: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["'Comic Sans MS'", "'Comic Neue'", "cursive"],
        body: ["'Segoe UI'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        button: "0 4px 0 rgba(0,0,0,0.2)",
        card: "0 2px 6px rgba(0,0,0,0.25)",
      },
      keyframes: {
        fadeSwap: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeSwap: "fadeSwap 200ms ease-out",
      },
    },
  },
  plugins: [],
};
