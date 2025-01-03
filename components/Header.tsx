import { useState, useEffect } from "react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  
    return (
      <header className="bg-gray-900 text-white py-4 fixed top-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
          <button
            className="ml-4 bg-gray-800 text-white p-2 rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </nav>
      </header>
    );
  }
  