import { cn } from "@/lib/utils";
import { DiaryProps } from "@/types/Diary";

export default function DiaryCard({
  title,
  content,
  date,
  ...props
}: DiaryProps) {
  return (
    <div
      className={cn("memo relative bg-memo p-6 shadow-diary", props.className)}
    >
      <div className="diagonal-split-bg absolute left-0 top-0 h-6 w-6"></div>
      <div className={cn("flex h-full flex-col justify-between text-black")}>
        <div className="flex h-full flex-col">
          <h2 className="mb-4 text-xl font-bold">{title}</h2>
          <p className="h-full">{content}</p>
          <p className="mt-2 w-full text-end">{date}</p>
        </div>
      </div>
    </div>
  );
}
