import { DiaryProps } from "@/types/Diary";

export default function DiaryCard({
  title,
  content,
  date,
  ...props
}: DiaryProps) {

  return (
    <div className="bg-yellow-200 max-w-full h-auto p-6 relative shadow-diary">
      <div className="diagonal-split-bg absolute top-0 left-0 bg-background w-6 h-6"></div>
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className=" text-xl font-bold">{title}</h2>
          <p>{content}</p>
        </div>
        <p className="w-full text-end">{date}</p>
      </div>
    </div>
  );
}
