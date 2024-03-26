// src/app/lib/mongodb.ts
import { MongoClient, ServerApiVersion } from "mongodb";

// 환경 변수에서 MongoDB 연결 문자열을 가져옵니다.
const uri = process.env.MONGODB_URI;

// 연결 문자열이 없으면 에러를 던집니다.
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수를 정의해주세요.");
}

let isConnected = false;

// MongoDB 클라이언트를 생성합니다. 이 클라이언트는 MongoDB 서버와의 연결을 관리합니다.
const client = new MongoClient(uri, {
  // serverApi 옵션을 통해 MongoDB 서버 API 버전, 엄격 모드, 폐기 예정 에러 옵션을 설정합니다.
  serverApi: {
    // version: MongoDB 서버 API의 버전을 설정합니다. 이 예제에서는 v1을 사용합니다.
    version: ServerApiVersion.v1,
    // strict: 엄격 모드를 설정합니다. 이 모드가 활성화되면, 사용 중인 API 버전에서 지원하지 않는 명령을 사용하려고 하면 에러가 발생합니다.
    strict: true,
    // deprecationErrors: 폐기 예정 에러 옵션을 설정합니다. 이 옵션이 활성화되면, 사용 중인 API 버전에서 폐기된 명령을 사용하려고 하면 에러가 발생합니다.
    deprecationErrors: true,
  },
});

// MongoDB 클라이언트 연결 함수
async function setMongoConnect() {
  try {
    // 이미 연결되어 있으면 추가 연결 시도를 방지합니다.
    if (isConnected) {
      return;
    }
    // 클라이언트를 통해 MongoDB에 연결합니다.
    await client.connect();
    // 연결이 성공적인지 확인하기 위해 ping 명령을 보냅니다.
    await client.db("myweb").command({ ping: 1 });
    // 연결 성공 메시지를 콘솔에 출력합니다.
    console.log("몽고디비 연결 성공!");
    isConnected = true; // 연결 상태를 true로 설정합니다.
  } catch (error) {
    // 에러가 발생하면 콘솔에 에러를 출력합니다.
    throw new Error();
  }
}

// MongoDB 클라이언트 연결 끊기 함수
async function setMongoDisconnect() {
  try {
    // 클라이언트를 통해 MongoDB에 연결을 끊습니다.
    await client.close();
    // 연결 끊기 성공 메시지를 콘솔에 출력합니다.
    console.log("몽고디비 연결 끊기 성공!");
    isConnected = false; // 연결 상태를 true로 설정합니다.
  } catch (error) {
    // 에러가 발생하면 콘솔에 에러를 출력합니다.
    throw new Error();
  }
}

// MongoDB 클라이언트를 내보냅니다.
export { client, setMongoConnect, setMongoDisconnect };
