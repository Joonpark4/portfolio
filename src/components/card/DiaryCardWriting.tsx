"use client";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useModalStore } from "@/store/modal";
import { formatToKoreanDate } from "@/lib/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function DiaryCardWriting({ ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation<any>({
    mutationFn: async (newMemo: any) => {
      return axios.post("/api/diary", newMemo);
    },
    onMutate: (variables) => {
    },
    onError: (error, variables, context) => {
    },
    onSuccess: (data, variables, context) => {
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["/api/diary"] });
      closeModal();
    },
  });

  // 작성이 끝나면 모달 닫기
  const { closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));

  const onSubmit = async (data: any) => {
    const date = new Date();
    const formattedDate = formatToKoreanDate(date);
    mutation.mutate({ ...data, date: formattedDate });
  };

  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>

      <form
        className={cn("flex h-full flex-col justify-between p-2 text-black")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex h-full flex-col">
          <input
            type="text"
            className="mb-4 w-full text-xl"
            {...register("title", { required: true })}
          />
          <textarea
            className="h-full resize-none"
            {...register("content", { required: true })}
          ></textarea>
        </div>
        <div>
          <div className="mt-2 flex w-full justify-between gap-4">
            <Button type="reset" onClick={closeModal} variant="secondary">
              Close
            </Button>
            <Button type="submit">Posting</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
