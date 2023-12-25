import { create } from "zustand";
import { Swiper } from "swiper";

type State = {
  swiper: Swiper | null;
  pages: string[];
  pageIndex: number;
  setSwiper: (swiper: Swiper) => void;
  setPageIndex: (index: number) => void;
};

export const usePageStore = create<State>((set, get) => ({
  swiper: null,
  pages: ["About Me", "Portfolio", "Tech Stack", "Contact", "Diary"],
  pageIndex: 0,
  setSwiper: (swiper) => set({ swiper }),
  setPageIndex: (index) => {
    const { swiper } = get(); // 현재 Swiper 인스턴스 가져오기
    set({ pageIndex: index }); // 페이지 인덱스 상태 업데이트
    if (swiper) {
      swiper.slideTo(index); // Swiper의 페이지 이동
      console.log(swiper.activeIndex);
    }
  }
}));