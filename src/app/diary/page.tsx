import DiaryCard from "@/components/card/DiaryCard";

export default function Diary() {

  const data = [
    { title: "제목 안녕하세요", content: "하이하이", date: "24.01.13" },
    {
      title: "Sunny Day",
      content: "It's a beautiful sunny day outside.",
      date: "24.01.14",
    },
    {
      title: "Learning Journey",
      content: "Today I learned something new about React.",
      date: "24.01.15",
    },
    {
      title: "Weekend Plans",
      content: "Planning to visit the mountains this weekend.",
      date: "24.01.16",
    },
    {
      title: "Movie Night",
      content: "Watched an interesting movie last night.",
      date: "24.01.17",
    },
    {
      title: "Book Review",
      content: "Just finished reading a fascinating book.",
      date: "24.01.18",
    },
    {
      title: "Workout Routine",
      content: "Started a new gym routine, feeling great!",
      date: "24.01.19",
    },
    {
      title: "New Recipe",
      content: "Tried cooking a new recipe today.",
      date: "24.01.20",
    },
    {
      title: "Gaming Fun",
      content: "Had a fun gaming session with friends.",
      date: "24.01.21",
    },
    {
      title: "Music Discovery",
      content: "Discovered a new music band, absolutely love their songs.",
      date: "24.01.22",
    },
    {
      title: "Tech Meetup",
      content:
        "Attended a tech meetup, networked with some interesting people.",
      date: "24.01.23",
    },
    {
      title: "Quiet Evening",
      content: "Spent a quiet and relaxing evening at home.",
      date: "24.01.24",
    },
  ];

  return (
    <section className="flex flex-col">
      다이어리 페이지
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <DiaryCard
              key={index}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          ))}
        {/* <div className="grid gap-4">
          <DiaryCard title={`제목 안녕하세요`} content={`하이하이`} date={`24.01.13`} />
        </div>
        <div className="grid gap-4">
          <DiaryCard title={`제목 안녕하세요`} content={`하이하이`} date={`24.01.13`} />
        </div>
        <div className="grid gap-4">
          <DiaryCard title={`제목 안녕하세요`} content={`하이하이`} date={`24.01.13`} />
        </div> */}
      </div>
    </section>
  );
}
