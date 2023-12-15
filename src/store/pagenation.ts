import { create } from "zustand";
import { Swiper } from "swiper";

type State = {
  swiper: Swiper | null;
  pageIndex: number;
  maxPage: number;
  setSwiper: (swiper: Swiper) => void;
  setPageIndex: (index: number) => void;
  pageTo: (index: number) => void;
};

export const usePageStore = create<State>((set) => ({
  swiper: null,
  pageIndex: 0,
  maxPage: 4,
  setSwiper: (swiper) => set({ swiper }),
  setPageIndex: (index) => {
    set({ pageIndex: index });
  },
  pageTo: (index) =>
    set((state) => {
      state.swiper?.slideTo(index);
      return { pageIndex: index };
    }),
}));
