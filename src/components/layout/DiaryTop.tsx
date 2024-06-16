"use client";
import { Button } from "../ui/button";
import { useModalKindStore, useModalStore } from "@/store/modal";

export default function DiaryTop() {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  const { setModalKind } = useModalKindStore((state) => ({
    setModalKind: state.setModalKind,
  }));

  const handleNewDiary = () => {
    setModalKind("writing");
    openModal();
  };

  return (
    <div className="flex justify-end border-y-4 border-border px-4 py-2">
      <Button className="h-12 w-20" onClick={handleNewDiary}>
        New Diary
      </Button>
    </div>
  );
}
