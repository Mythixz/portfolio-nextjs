/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ใช้ 'class' เพื่อควบคุมด้วย CSS Class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ใช้สำหรับโฟลเดอร์ app
    "./components/**/*.{js,ts,jsx,tsx}", // ใช้สำหรับ components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
