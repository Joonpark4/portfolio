import { DiaryProps } from "@/types/Diary";
export default function DiaryCard() {
  // {id, title, content, date, ...props}: DiaryProps
  // 1에서 5까지의 랜덤 인덱스 길이를 가지는 배열 만들기
  const randomArray = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 5) + 1,
  );

  return (
    <div className="bg-yellow-200 max-w-full h-auto p-6 relative">
      <div className="absolute top-0 left-0 bg-background w-6 h-6">
        {/* <div className="absolute inset-0 bg-white transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div> */}
        {/* <div className="absolute inset-0 bg-blue-500 transform -rotate-45 translate-x-1/2"></div> */}
      </div>
      <h2 className=" text-xl font-bold">안녕하세요</h2>
      {randomArray.map((item, index) => (
        <p key={index}>하이요</p>
      ))}
      <p>24. 01. 12</p>
    </div>
  );
}
