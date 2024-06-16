import { create } from "zustand";

type ModalState = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

type ModalKindStore = {
  modalKind: string;
  id: string;
  setModalKind: (kind: string) => void;
  setModalId: (id: string) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export const useModalKindStore = create<ModalKindStore>((set) => ({
  modalKind: "",
  id: "",
  setModalKind: (kind: string) => set({ modalKind: kind }),
  setModalId: (id: string) => set({ id: id }),
}));
