// Next.js 서버 컴포넌트에서 사용하는 요청과 응답 타입을 가져옵니다.
import { NextRequest, NextResponse } from "next/server";
import { client, setMongoConnect } from "@/lib/mongodb";
import { DiaryForm } from "@/types/Diary";
import { ObjectId } from "bson";

// diary 리스트 불러오기
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log("query", query);
  try {
    // connect to MongoDB and fetch diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const diary = await diaryCollection.find().toArray();
    return new NextResponse(JSON.stringify(diary), { status: 200 });
  } catch (error) {
    // await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}

// diary 작성하기
export async function POST(request: NextRequest) {
  try {
    const body: DiaryForm = await request.json();
    // connect to MongoDB and insert diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const diary = await diaryCollection.insertOne(body);
    return new NextResponse(JSON.stringify(diary), { status: 200 });
  } catch (error) {
    // disconnect from MongoDB and return the result
    // await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}

// diary 수정하기
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body; // _id를 추출하고 나머지 데이터만 업데이트
    const objectId = new ObjectId(_id);
    console.log(updateData);
    // connect to MongoDB and insert diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const result = await diaryCollection.updateOne(
      { _id: objectId },
      { $set: updateData },
    );
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    // disconnect from MongoDB and return the result
    // await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}

// diary 삭제하기
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    console.log("id : ", typeof id);
    const objectId = new ObjectId(id);
    // connect to MongoDB and insert diary
    await setMongoConnect();
    const diaryCollection = client.db("myweb").collection("diary");
    const result = await diaryCollection.deleteOne({ _id: objectId });
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    // disconnect from MongoDB and return the result
    // await setMongoDisconnect();
    return new NextResponse("Error in fetching diary" + error, { status: 500 });
  }
}
