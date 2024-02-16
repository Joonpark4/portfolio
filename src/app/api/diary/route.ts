// Next.js 서버 컴포넌트에서 사용하는 요청과 응답 타입을 가져옵니다.
import { NextRequest, NextResponse } from "next/server";
import { client, setMongoConnect, setMongoDisconnect } from "@/lib/mongodb";
import { DiaryForm } from "@/types/Diary";

export async function GET() {
  try {
    // connect to MongoDB and fetch diary
    if (!client.connect) {
      await setMongoConnect().then(() => {
        const diaryCollection = client.db("myweb").collection("diary");
        const diary = diaryCollection.find().toArray();
        return new NextResponse(JSON.stringify(diary), { status: 200 });
      });
    }
  } catch (error) {
    await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body: DiaryForm = await request.json();

  try {
    // connect to MongoDB and insert diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const diary = await diaryCollection.insertOne(body);

    // disconnect from MongoDB and return the result
    await setMongoDisconnect();
    return new NextResponse(JSON.stringify(diary), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}
