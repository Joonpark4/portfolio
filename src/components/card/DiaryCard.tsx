"use client";
import { cn } from "@/lib/utils";
import { useModalKindStore, useModalStore } from "@/store/modal";
import { DiaryProps } from "@/types/Diary";
import axios from "axios";
import { ObjectId } from "mongodb";
import { useState } from "react";

export default function DiaryCard({
  title,
  content,
  date,
  id,
  ...props
}: DiaryProps) {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));
  const [loading, setLoading] = useState(false);

  const { setModalKind, setModalId } = useModalKindStore((state) => ({
    setModalKind: state.setModalKind,
    setModalId: state.setModalId,
  }));

  const handleReadDiary = () => {
    setModalKind("reading");
    setModalId(id.toString());
    // openModal(); // 일단 모달을 열지 않고 리스트 페이지를 읽기 페이지로 간주
  };

  const handleEditDiary = () => {
    setModalKind("editing");
    setModalId(id.toString());
    openModal();
  };

  const onSubmit = async (data: ObjectId) => {
    setLoading(true);
    try {
      const res = await axios.delete("/api/diary", {
        data: { id: data },
      });
      if (res.status === 200) {
        console.log("Success");
        console.log("res", res);
      } else {
        console.log("Fail");
      }
    } catch (error) {
      console.log("Error writing data: ", error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("id", id);

  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>
      <div className={cn("flex h-full flex-col justify-between text-black")}>
        <div className="flex h-full flex-col">
          <h2 className="mb-4 text-xl font-bold">{title}</h2>
          <div className="h-full whitespace-pre">{content}</div>
          <div className="mt-4 flex justify-between">
            <p className=" w-full text-start">{date}</p>
            <div className="flex gap-2">
              <span
                className="centered h-7 w-7 cursor-pointer rounded-md border border-green-300 bg-green-300 shadow-sm"
                title="수정"
                onClick={() => handleEditDiary()}
              >
                🛠️
              </span>
              <span
                className="centered h-7 w-7 cursor-pointer rounded-md border border-red-300 bg-red-300 shadow-sm"
                title="삭제"
                onClick={() => onSubmit(id)}
              >
                🗑️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
