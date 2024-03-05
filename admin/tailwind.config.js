/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6439ff",
        borderColor: "#E6E3E3",
        textColor: "#E6E3E3",
        titleColor: "#999",
        bgColor: "#ece8ff",
        iconColor: "#7451f8",
      },
      boxShadow: {
        boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
      },
    },
  },
  plugins: [],
};
