"use client";
import { useModalStore } from "@/store/modal";
import DiaryCard from "../card/DiaryCard";
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
        <DiaryCard
          title="Hi"
          content="Hello"
          date="24.01.13"
          className="w-4/5 h-2/3 z-30 sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
      </div>
    )
  );
}
