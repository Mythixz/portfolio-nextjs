'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // เพิ่ม State สำหรับ Dark Mode

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]); // เปลี่ยน class ของ html เมื่อ darkMode เปลี่ยน

  return (
    <html lang="en">
      <body>
        <button
          className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded z-50"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>

        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
