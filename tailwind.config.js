/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // เปิดใช้ Dark Mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-text-stroke"), // ปลั๊กอินสำหรับ stroke
  ],
};
