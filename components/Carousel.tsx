"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ใช้โมดูลจาก "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const logos = [
  { id: 1, src: "/next.svg", alt: "Next.js" },
  { id: 2, src: "/next.svg", alt: "Next.js" },
  { id: 3, src: "/next.svg", alt: "Next.js" },
  { id: 4, src: "/next.svg", alt: "Next.js" },
  { id: 5, src: "/next.svg", alt: "Next.js" },
  { id: 6, src: "/next.svg", alt: "Next.js" },
];

export default function Carousel() {
  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={4} 
        spaceBetween={0}  
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="flex justify-center items-center h-32 w-32 bg-gray-100 rounded-lg shadow-md">
              <img src={logo.src} alt={logo.alt} className="h-24 w-24 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
