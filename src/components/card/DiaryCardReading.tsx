"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useModalKindStore, useModalStore } from "@/store/modal";
import { useEffect, useState } from "react";

export const DiaryCardReadingComponent = ({ ...props }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));

  const { id } = useModalKindStore((state) => ({
    id: state.id,
  }));

  // 매번 id가 바뀔때마다 새로 데이터를 요청하고 받는 매우 비효율적인 방법
  // diary 페이지에서 데이터를 받아오고, 그 데이터를 modal에 넘겨주는 방법을 사용하는 것이 더 효율적
  useEffect(() => {
    fetch(`/api/diary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>
      <form
        className={cn("flex h-full flex-col justify-between p-2 text-black")}
      >
        <div className="flex -translate-y-4 justify-end">
          <Button type="reset" onClick={closeModal} variant="destructive">
            Delete
          </Button>
        </div>
        <div className="flex h-full flex-col gap-3">
          <h1 className=" text-3xl font-bold">{title}</h1>
          <div className="h-full whitespace-pre">{content}</div>
        </div>
        <div>
          <div className="mt-2 flex w-full justify-between gap-4">
            <Button type="reset" onClick={closeModal} variant="secondary">
              Close
            </Button>
            <Button type="submit">Delete</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
