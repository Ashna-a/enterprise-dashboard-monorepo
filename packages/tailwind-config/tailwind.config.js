/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3b82f6", // Modern Blue
          secondary: "#10b981", // Success Green
          accent: "#f59e0b", // Warning Orange
        },
        surface: {
          default: "#ffffff", // Base background
          subtle: "#f9fafb", // Light gray for cards
          elevated: "#f3f4f6", // Slightly darker for sidebars
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
