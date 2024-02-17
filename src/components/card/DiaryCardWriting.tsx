"use client";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useModalStore } from "@/store/modal";

export default function DiaryCardWriting({ ...props }) {
  const [loading, setLoading] = useState(false);

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
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/diary`,
        data,
      );
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={cn("bg-memo p-6 relative shadow-diary memo", props.className)}>
      <div className="diagonal-split-bg absolute top-0 left-0 w-6 h-6"></div>
      <form
        className={cn("h-full flex flex-col justify-between text-black p-2")}
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col h-full">
          <input
            type="text"
            className="w-full text-xl mb-4"
            {...register("title", { required: true })}
          />
          <textarea
            className="h-full"
            {...register("content", { required: true })}></textarea>
        </div>
        <div>
          <div className="w-full flex justify-end gap-4 mt-2">
            <Button type="submit">Posting</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
