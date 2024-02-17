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
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2">
        {!isLoading &&
          data.map((item: any, index: any) => (
            <div key={index} className="break-inside-avoid mb-2">
              <DiaryCard
                title={item.title}
                content={item.content}
                date={item.date}
                className={`hover-scale `}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
