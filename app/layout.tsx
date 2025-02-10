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
  const [loading, setLoading] = useState<boolean>(true); // เริ่มต้นที่ true เพื่อรอการตรวจสอบ
  const [isInitialized, setIsInitialized] = useState<boolean>(false); // ตรวจสอบว่าโหลดข้อมูลเสร็จแล้วหรือยัง
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false); // ไม่แสดง Loader หากเคยเข้ามาแล้ว
    } else {
      setLoading(true);
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setLoading(false); // แสดง Loader แค่ครั้งแรก
      }, 2000);
    }

    // ตั้งค่าให้บอกว่าข้อมูลพร้อมแล้ว
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (!isInitialized) {
    // ระหว่างรอตรวจสอบ `localStorage` ไม่แสดงอะไรเลย
    return null;
  }

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
