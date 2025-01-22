"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ใช้โมดูลจาก "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const logos = [
  { id: 1, src: "/vuedotjs.svg", alt: "Vue.js" },
  { id: 2, src: "/react.svg", alt: "Next.js" },
  { id: 3, src: "/php-plain.svg", alt: "Next.js" },
  { id: 4, src: "/ts.svg", alt: "Next.js" },
  { id: 5, src: "/nextjs.svg", alt: "Next.js" },
  { id: 6, src: "/js.svg", alt: "Next.js" },
  { id: 7, src: "/python.svg", alt: "Next.js" },
  { id: 8, src: "/c-sharp.png", alt: "Next.js" },
  { id: 9, src: "/net-framework.svg", alt: "Next.js" },
];

export default function Carousel() {
  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        slidesPerView={6}
        spaceBetween={2} // ลดระยะห่างระหว่างสไลด์
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="flex justify-center items-center h-18 w-18">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-24 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
