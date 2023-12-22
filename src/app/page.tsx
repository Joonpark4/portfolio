"use client";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination, Mousewheel, A11y } from "swiper/modules";
import { usePageStore } from "@/store/pagenation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  SwiperCore.use([Pagination, Mousewheel, A11y]);
  const swiperRef = useRef<SwiperRef>(null);
  const pages = usePageStore((state) => state.pages);
  const setSwiper = usePageStore((state) => state.setSwiper);
  const setPageIndex = usePageStore((state) => state.setPageIndex);

  return (
    <main className="w-full h-full flex-1 max-w-[1200px] sm:border overflow-hidden">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {setPageIndex(swiper.activeIndex)}}
        ref={swiperRef}
        style={{ height: "100%" }}
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        className="mySwiper">
        {pages.map((section, index) => (
          <SwiperSlide key={index}>
            <section className="w-full min-h-full p-10">
              it is {section} section.
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
