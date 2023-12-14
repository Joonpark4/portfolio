import { create } from 'zustand'
import { Swiper } from 'swiper';

type State = {
  swiper: Swiper | null;
  pageIndex: number;
  setSwiper: (swiper: Swiper) => void;
  pageTo: (index: number) => void;
};

export const usePageStore = create<State>((set) => ({
  swiper: null,
  pageIndex: 0,
  setSwiper: (swiper) => set({ swiper }),
  pageTo: (index) => set((state) => {
    state.swiper?.slideTo(index);
    return { pageIndex: index };
  }),
}));