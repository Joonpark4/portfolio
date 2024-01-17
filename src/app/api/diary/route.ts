// Next.js 서버 컴포넌트에서 사용하는 요청과 응답 타입을 가져옵니다.
import { NextRequest, NextResponse } from "next/server";
import { client, setMogoConnect, setMogoDisconnect } from "@/lib/mongodb";
import { DiaryForm } from "@/types/Diary";

export async function GET() {
  try{

    // MongoDB 클라이언트를 연결합니다.
    await setMogoConnect();
  
    // MongoDB 클라이언트를 통해 MongoDB의 diary 컬렉션을 가져옵니다.
    const diaryCollection = client.db("myweb").collection("diary");
  
    // MongoDB 클라이언트를 통해 MongoDB의 diary 컬렉션에서 모든 문서를 가져옵니다.
    const diary = await diaryCollection.find().toArray();
  
    // MongoDB 클라이언트를 연결을 끊습니다.
    await setMogoDisconnect();
  
    // diaryJSON을 응답합니다.
    return new NextResponse(JSON.stringify(diary), {status: 200});

  } catch(error) {

    // 에러 발생 시 에러를 응답합니다.
    return new NextResponse("Error in fetching diary" + error, {status: 500});
  }
}

export async function POST(request: NextRequest) {
  const body: DiaryForm = await request.json();

  try{

    // MongoDB 클라이언트를 연결합니다.
    await setMogoConnect();
  
    // MongoDB 클라이언트를 통해 MongoDB의 diary 컬렉션을 가져옵니다.
    const diaryCollection = client.db("myweb").collection("diary");
  
    // MongoDB 클라이언트를 통해 MongoDB의 diary 컬렉션에 새로운 문서를 추가합니다.
    const diary = await diaryCollection.insertOne(body);
  
    // MongoDB 클라이언트를 연결을 끊습니다.
    await setMogoDisconnect();
  
    // diaryJSON을 응답합니다.
    return new NextResponse(JSON.stringify(diary), {status: 200});

  } catch(error) {

    // 에러 발생 시 에러를 응답합니다.
    return new NextResponse("Error in fetching diary" + error, {status: 500});
  }
}