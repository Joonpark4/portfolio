"use client";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination, Mousewheel, A11y } from "swiper/modules";
import { usePageStore } from "@/store/pagenation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const setSwiper = usePageStore((state) => state.setSwiper);
  SwiperCore.use([Pagination, Mousewheel, A11y]);
  const swiperRef = useRef<SwiperRef>(null);
  const sections = ["first", "second", "third", "fourth", "fifth"];

  return (
    <main className="w-full h-full max-w-[1200px] border overflow-hidden">
      <Swiper
        onSwiper={setSwiper}
        ref={swiperRef}
        style={{ height: "100%" }}
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        className="mySwiper">
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <section className="w-full min-h-full p-10">
              it's {section} section.
            </section>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </main>
  );
}
