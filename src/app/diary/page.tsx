"use client";
import DiaryCard from "@/components/card/DiaryCard";
import DiaryTop from "@/components/layout/DiaryTop";
import { useEffect, useState } from "react";
import { useDiaryData } from "@/services/queries";

export default function Diary() {
  const [cols, setCols] = useState(1);
  const { data, isPending, isError } = useDiaryData();

  useEffect(() => {
    const updateGridCols = () => {
      const width = window.innerWidth;
      if (width < 768) setCols(1);
      else if (width >= 768 && width < 1024) setCols(2);
      else if (width >= 1024 && width < 1280) setCols(3);
      else if (width >= 1280) setCols(4);
    };

    window.addEventListener("resize", updateGridCols);
    updateGridCols();

    return () => window.removeEventListener("resize", updateGridCols);
  }, []);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const splitData = data.reduce(
    (result: any, value: any, index: any) => {
      const splitIndex = index % cols;
      result[splitIndex].push(value);
      return result;
    },
    [[], [], [], []],
  );

  return (
    <section className="flex flex-col gap-4">
      <DiaryTop />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {splitData.map((item: any, index: any) => (
          <div className="grid gap-4" key={index}>
            {item.map((item: any, index: any) => (
              <DiaryCard
                key={index}
                title={item.title}
                content={item.content}
                date={item.date}
                className={`hover-scale `}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// const data = [
//   { title: "Hi1", content: "Hello", date: "24.01.13" },
//   {
//     title: "Sunny Day2",
//     content: "It's a beautiful sunny day outside.It's a beautiful sunny day outside.It's a beautiful sunny day outside.",
//     date: "24.01.14",
//   },
//   {
//     title: "Learning Journey3",
//     content: "Today I learned something new about React.",
//     date: "24.01.15",
//   },
//   {
//     title: "Weekend Plans4",
//     content: "Planning to visit the mountains this weekend.",
//     date: "24.01.16",
//   },
//   {
//     title: "Movie Night5",
//     content: "Watched an interesting movie last night.",
//     date: "24.01.17",
//   },
//   {
//     title: "Book Review6",
//     content: "Just finished reading a fascinating book.",
//     date: "24.01.18",
//   },
//   {
//     title: "Workout Routine7",
//     content: "Started a new gym routine, feeling great!",
//     date: "24.01.19",
//   },
//   {
//     title: "New Recipe8",
//     content: "Tried cooking a new recipe today.",
//     date: "24.01.20",
//   },
//   {
//     title: "Gaming Fun9",
//     content: "Had a fun gaming session with friends.",
//     date: "24.01.21",
//   },
//   {
//     title: "Music Discovery10",
//     content: "Discovered a new music band, absolutely love their songs.",
//     date: "24.01.22",
//   },
//   {
//     title: "Tech Meetup11",
//     content:
//       "Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.Attended a tech meetup, networked with some interesting people.",
//     date: "24.01.23",
//   },
//   {
//     title: "Quiet Evening12",
//     content: "Spent a quiet and relaxing evening at home.",
//     date: "24.01.24",
//   },
// ];
