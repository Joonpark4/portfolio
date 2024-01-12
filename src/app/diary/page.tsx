import DiaryCard from "@/components/card/DiaryCard";
import DiaryCard2 from "@/components/card/DiaryCard2";
import DiaryCard3 from "@/components/card/DiaryCard3";
import DiaryCard4 from "@/components/card/DiaryCard4";

export default function Diary() {
  return (
    <section className="flex flex-col">
      다이어리 페이지
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <DiaryCard />
          <DiaryCard2 />
          <DiaryCard />
        </div>
        <div className="grid gap-4">
          <DiaryCard3 />
          <DiaryCard4 />
          <DiaryCard />
        </div>
        <div className="grid gap-4">
          <DiaryCard2 />
          <DiaryCard4 />
          <DiaryCard3 />
        </div>
        <div className="grid gap-4">
          <DiaryCard />
          <DiaryCard3 />
          <DiaryCard2 />
        </div>
      </div>
    </section>
  );
}
