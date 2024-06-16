"use client";
import DiaryCard from "@/components/card/DiaryCard";
import DiaryTop from "@/components/layout/DiaryTop";
import { useEffect, useState } from "react";
import { useModalStore } from "@/store/modal";

export default function Diary() {
  const { isModalOpen } = useModalStore((state) => ({
    isModalOpen: state.isModalOpen,
  }));
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/diary")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [isModalOpen]);

  return (
    <section className="flex flex-col gap-4">
      <DiaryTop />
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3 xl:columns-4">
        {!isLoading &&
          data.map((item: any) => (
            <div key={item._id} className="mb-2 break-inside-avoid">
              <DiaryCard
                title={item.title}
                content={item.content}
                date={item.date}
                className={`hover-scale `}
                id={item._id}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
