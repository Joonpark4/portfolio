"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useRef } from "react";
export const SwiperUtil = (props: {
  index: number;
  slides: { src: string }[];
}) => {
  const instance = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (!instance.current) return;
    instance.current.slideTo(props.index);
  }, [props.index]);
  useEffect(() => {}, []);

  return (
    <Swiper
      onSwiper={(swiper) => (instance.current = swiper)}
      spaceBetween={20}
      slidesPerView={1}
      loop
    >
      {props.slides.map((item) => {
        return (
          <SwiperSlide key={item.src}>
            <Image src={item.src} alt="dog" width={300} height={300} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
