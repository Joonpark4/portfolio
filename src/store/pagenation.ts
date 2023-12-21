import { create } from "zustand";
import { Swiper } from "swiper";

type State = {
  swiper: Swiper | null;
  pages: string[];
  pageIndex: number;
  setSwiper: (swiper: Swiper) => void;
  setPageIndex: (index: number) => void;
  pageTo: (index: number) => void;
};

export const usePageStore = create<State>((set, get) => ({
  swiper: null,
  pages: ["About Me", "Portfolio", "Tech Stack", "Contact", "Diary"],
  pageIndex: 0,
  setSwiper: (swiper) => set({ swiper }),
  setPageIndex: (index) => {
    set({ pageIndex: index });
    console.log(index);
  },
  pageTo: (index) => {
    const { swiper } = get();
    if (swiper) {
      swiper.slideTo(index);
      console.log(index);
    }
  },
}));