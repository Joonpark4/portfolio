import { create } from 'zustand'

const usePageStore = create((set) => ({
  pageIndex: 0,
  pageTo: () => set((state:number) => ({ pageIndex: state })),
}))