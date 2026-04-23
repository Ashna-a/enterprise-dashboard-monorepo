/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3b82f6",
          secondary: "#10b981",
          accent: "#f59e0b",
        },
        surface: {
          default: "#ffffff",
          subtle: "#f9fafb",
          elevated: "#f3f4f6",
        },
        text: {
          primary: "#111827",
          secondary: "#4b5563",
          subtle: "#9ca3af",
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
