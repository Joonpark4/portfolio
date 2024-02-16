"use client";
import axios from "axios";
import { cn } from "@/lib/utils";
import { DiaryProps } from "@/types/Diary";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useModalStore } from "@/store/modal";

export default function DiaryCard({
  title,
  content,
  date,
  ...props
}: DiaryProps) {
  const [loding, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 작성이 끝나면 모달 닫기
  const { closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/diary", data);
      if (res.status === 200) {
        console.log("Success");
      } else {
        console.log("Fail");
      }
    } catch (error) {
      console.log("Error writing data: ", error);
    } finally {
      closeModal();
      setLoading(false);
    }
  };

  if (loding) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>
      <form
        className={cn(
          "flex h-full flex-col justify-between text-black",
          props.isWriting && " p-2",
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex h-full flex-col">
          {props.isWriting ? (
            <input
              type="text"
              className="mb-4 w-full text-xl"
              {...register("title", { required: true })}
            />
          ) : (
            <h2 className="mb-4 text-xl font-bold">{title}</h2>
          )}
          {props.isWriting ? (
            <textarea
              className="h-full"
              {...register("content", { required: true })}
            ></textarea>
          ) : (
            <p className="h-full">{content}</p>
          )}
        </div>
        <div>
          {props.isWriting ? (
            <div className="mt-2 flex w-full justify-end gap-4">
              <Button type="submit">Posting</Button>
            </div>
          ) : (
            <p className="w-full text-end">{date}</p>
          )}
        </div>
      </form>
    </div>
  );
}
