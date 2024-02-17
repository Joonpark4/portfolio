'use client'
import axios from "axios";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/modal";

export default function DiaryTop() {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  return (
    <div className="flex justify-end border-border border-y-4 px-4 py-2">
      <Button className="w-20 h-12" onClick={openModal}>
        New
      </Button>
    </div>
  );
}
