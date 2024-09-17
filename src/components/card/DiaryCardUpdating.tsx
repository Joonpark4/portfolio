"use client";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useModalStore, useModalKindStore } from "@/store/modal";
import { formatToKoreanDate } from "@/lib/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function DiaryCardUpdating({ ...props }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // 작성이 끝나면 모달 닫기
  const { closeModal } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
    closeModal: state.closeModal,
  }));
  const { id } = useModalKindStore((state) => ({
    id: state.id,
  }));
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return axios.put("/api/diary", data);
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

  useEffect(() => {
    fetch(`/api/diary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const onUpdate = async () => {
    const date = new Date();
    const formattedDate = formatToKoreanDate(date);
    const data = {
      _id: id,
      title: title,
      content: content,
      date: formattedDate,
    };
    mutation.mutate(data);
    // try {
    //   const res = await axios.put("/api/diary", {
    //     _id: id,
    //     title: title,
    //     content: content,
    //     date: formattedDate,
    //   });
    //   if (res.status === 200) {
    //     console.log("Success");
    //   } else {
    //     console.log("Fail");
    //   }
    // } catch (error) {
    //   console.log("Error writing data: ", error);
    // } finally {
    //   closeModal();
    //   setLoading(false);
    // }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>

      <form
        className={cn("flex h-full flex-col justify-between p-2 text-black")}
      >
        <div className="flex h-full flex-col">
          <input
            type="text"
            className="mb-4 w-full text-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="h-full resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <div className="mt-2 flex w-full justify-between gap-4">
            <Button type="reset" onClick={closeModal} variant="secondary">
              Close
            </Button>
            <Button onClick={onUpdate}>Updating</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
