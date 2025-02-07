"use client"; // ระบุว่าเป็น Client Component

import React from "react";
import Hyperspeed from "@/src/blocks/Backgrounds/Hyperspeed/Hyperspeed"; // เปลี่ยน path ให้ถูกต้อง
import ASCIIText from "@/src/blocks/TextAnimations/ASCIIText/ASCIIText";

const Hero: React.FC = () => {
  // เพิ่มฟังก์ชัน handleAnimationComplete
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative h-screen w-full">
      {/* Hyperspeed Background */}
      <Hyperspeed preset="cyberpunk" />

      {/* Content Over Hyperspeed */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-8xl">
      <ASCIIText
  text='Mythixz'
  enableWaves={true}
  asciiFontSize={2}
/>
      </div>
    </div>
  );
};

export default Hero;
