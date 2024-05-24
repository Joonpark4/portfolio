import Link from "next/link";
export const History = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="flex items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">StarShell Studio</span>
          <span className="text-sm">FE Developer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2024. 01. 24 ~ 2024. 03. 27</div>
          <div>Framer를 사용한 영문 랜딩 페이지 구축</div>
          <div>GA4, Tag Manager로 방문자 이벤트 구축</div>
          <div>Google Ads로 키워드 설정 및 광고 집행</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">NI Marketing</span>
          <span className="text-sm">FE Developer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2023. 07. 24 ~ 2024. 01. 23</div>
          <div>자사 페이지 리뉴얼 Mailer 및 퍼블리싱</div>
          <div>STO 웹 SNS로그인, 사진 첨부 글쓰기 구현</div>
          <div>Hivu 서비스 모바일 앱 프로덕트 오너</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">NCES corp</span>
          <span className="text-sm">Game Designer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2020. 11. 04 ~ 2021. 12. 1</div>
          <div>플로우차트 기반 게임 시스템/컨텐츠 기획</div>
          <div>Shooting Korea 모바일 앱 UI/UX 기획 </div>
          <div>10종 이상의 컨텐츠 기획 및 런칭 성공</div>
        </div>
      </div>
    </div>
  );
};
