import axios from "axios";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/modal";
export default function DiaryTop() {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  return (
    <div className="flex justify-end border-y-4 border-border px-4 py-2">
      <Button className="h-12 w-20" onClick={openModal}>
        New
      </Button>
    </div>
  );
}
