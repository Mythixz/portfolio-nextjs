"use client";

import React from "react";
import Aurora from "@/src/blocks/Backgrounds/Aurora/Aurora";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#ff82f3", "#7b13ff", "#400d64"]}
          speed={3}
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* เนื้อหา */}
        <div className="flex items-center justify-between mt-12 w-full max-w-5xl px-8">
          {/* ซ้าย: Biography และ Skills */}
          <div className="flex-1 max-w-md space-y-6">
            <div>
              <h2 className="text-xl font-bold uppercase">Biography</h2>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Experienced Full Stack Developer passionate about building
                scalable, user-centric web applications and optimizing system
                performance to meet business objectives.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase">Skills</h2>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Full Stack Development • Cloud & Security • UX/UI Design •
                Business & Management • Databases • Software Tools • Soft
                Skills
              </p>
            </div>
          </div>

          {/* กลาง: รูปภาพ */}
          <div className="flex justify-center items-center mx-8">
            <img
              src="main.png"
              alt="Profile"
              className="h-48 w-48 rounded-full border-4 border-gray-700 object-cover"
            />
          </div>

          {/* ขวา: สถิติ */}
          <div className="flex-1 max-w-md space-y-6 text-right">
            <div>
              <h3 className="text-4xl font-bold">22</h3>
              <p className="text-gray-300">Projects Done</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">2+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">8</h3>
              <p className="text-gray-300">Worldwide Clients</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-16">
          <a
            href="https://github.com/Mythixz"
            className="text-2xl hover:text-gray-400"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/Mythixz"
            className="text-2xl hover:text-gray-400"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/Mythixz"
            className="text-2xl hover:text-gray-400"
            aria-label="Instagram Profile"
          >
            <i className="fab fa-instagram"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://discordapp.com/users/Mythixz"
            className="text-2xl hover:text-gray-400"
            aria-label="Discord Profile"
          >
            <i className="fab fa-discord"></i>
            <span className="sr-only">Discord</span>
          </a>
        </div>
      </div>
    </section>
  );
}
