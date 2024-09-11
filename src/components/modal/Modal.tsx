"use client";
import { useModalStore, useModalKindStore } from "@/store/modal";
import DiaryCardWriting from "../card/DiaryCardWriting";
import { DiaryCardReadingComponent } from "../card/DiaryCardReading";
import DiaryCardUpdating from "../card/DiaryCardUpdating";

export default function Modal() {
  const { isModalOpen, closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));
  const { modalKind } = useModalKindStore((state) => ({
    modalKind: state.modalKind,
  }));

  return (
    isModalOpen && ( // 표시 여부 결정
      <div className="centered absolute left-0 top-0 z-20 h-full w-full">
        <div
          className="bg-background-opacity-60 absolute h-full w-full"
          onClick={closeModal}
        ></div>
        {modalKind === "writing" ? (
          <DiaryCardWriting className="z-30 h-2/3 w-4/5 max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2" />
        ) : modalKind === "editing" ? (
          <DiaryCardUpdating className="z-30 h-2/3 w-4/5 max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2" />
        ) : modalKind === "reading" ? (
          <DiaryCardReadingComponent className="z-30 h-2/3 w-4/5 max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2" />
        ) : null}
      </div>
    )
  );
}
