/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1B12",
        espressoDark: "#1E140D",
        cream: "#F7F1E6",
        creamDark: "#EFE4CC",
        sand: "#DCCBA0",
        brass: "#C9932E",
        // Тёмный оттенок brass для текста на светлом фоне (контраст ≥ 4.5:1)
        brassDark: "#7A5309",
        clay: "#C9563A",
        // Оттенки clay для текста ошибок / кнопки удаления
        clayDark: "#A63F26",
        clayLight: "#F0937B",
        ink: "#4A3823",
      },
      fontFamily: {
        display: ["Georgia", "'Times New Roman'", "serif"],
        body: ["'Helvetica Neue'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
