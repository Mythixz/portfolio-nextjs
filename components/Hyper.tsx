"use client"; // ระบุว่าเป็น Client Component

import React from "react";
import InfiniteMenu from "@/src/blocks/Components/InfiniteMenu/InfiniteMenu";

const items = [
  {
    image: 'main.png', // ใช้รูปภาพในเครื่อง
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'main.png', // ใช้รูปภาพในเครื่อง
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'main.png', // ใช้รูปภาพในเครื่อง
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'main.png', // ใช้รูปภาพในเครื่อง
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* InfiniteMenu */}
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};

export default Hero;

