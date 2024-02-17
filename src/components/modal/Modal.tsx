"use client";
import { useModalStore } from "@/store/modal";
import DiaryCardWriting from "../card/DiaryCardWriting";

export default function Modal() {
  const { isModalOpen, closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));

  return (
    isModalOpen && ( // 표시 여부 결정
      <div className="absolute top-0 left-0 w-full h-full centered z-20">
        <div
          className="absolute w-full h-full bg-background-opacity-60"
          onClick={closeModal}></div>
        <DiaryCardWriting
          className="w-4/5 h-2/3 z-30 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[600px]"
        />
      </div>
    )
  );
}
