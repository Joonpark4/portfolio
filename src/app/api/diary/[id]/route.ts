// Next.js 서버 컴포넌트에서 사용하는 요청과 응답 타입을 가져옵니다.
import { NextResponse } from "next/server";
import { client, setMongoConnect, setMongoDisconnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// diary 리스트 불러오기
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const queryId = new ObjectId(params.id);
  try {
    // connect to MongoDB and fetch diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const diary = await diaryCollection.findOne({ _id: queryId });
    if (!diary) {
      return new NextResponse("Diary not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(diary), { status: 200 });
  } catch (error) {
    await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}
