import { DiaryProps } from "@/types/Diary";
export default function DiaryCard3() {
  // {id, title, content, date, ...props}: DiaryProps
  // 1에서 5까지의 랜덤 인덱스 길이를 가지는 배열 만들기
  const randomArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 15) + 1);

  return (
    <div className="bg-yellow-200 max-w-full h-auto">
      <h2 className=" text-xl font-bold">안녕하세요</h2>
      {randomArray.map((item,index) => (
        <p key={index}>하이요</p>
      ))}
      <p>24. 01. 12</p>
    </div>
  );
}
