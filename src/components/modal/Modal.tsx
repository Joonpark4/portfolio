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
      <div className="centered absolute left-0 top-0 z-20 h-full w-full">
        <div
          className="bg-background-opacity-60 absolute h-full w-full"
          onClick={closeModal}
        ></div>
        <DiaryCardWriting className="z-30 h-2/3 w-4/5 max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2" />
      </div>
    )
  );
}
