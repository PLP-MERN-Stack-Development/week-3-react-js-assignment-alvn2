/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-toastify/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',
        'secondary': '#9333EA',
        'background': '#F3F4F6',
        'dark-bg': '#1E293B',
        'card': '#FFFFFF',
        'dark-card': '#2D3748',
        'text': '#1F2937',
        'dark-text': '#E5E7EB',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}