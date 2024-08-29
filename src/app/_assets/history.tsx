import Link from "next/link";
export const History = () => {
  return (
    <div className="flex flex-wrap gap-5">
    <div className="flex flex-col w-full md:w-fit">
      <div className="flex flex-wrap items-end gap-2 border-b-8 border-muted-foreground p-1">
        <span className="text-xl font-bold">애드캡슐 소프트</span>
        <span className="text-sm">Java Developer</span>
      </div>
      <div className="flex flex-col gap-1 p-2 text-sm">
        <div className="text-base">2024. 06. 24 ~ 2024. 09. 19</div>
        <div>공기업 한국 남동발전 유저 웹 페이지 기능 보완 개발</div>
        <div>전자정부 프레임워크에서 Spring MVC 패턴으로 JSP 개발</div>
        <div>Jsp, Controller, VO, XML에서 Service를 더해 구조 개선</div>
        <div>스크립트, 웹 표준으로 까다로운 공기업 접근성 심사 통과</div>
      </div>
    </div>
      <div className="flex flex-col w-full md:w-fit">
        <div className="flex flex-wrap items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">StarShell Studio</span>
          <span className="text-sm">FE Developer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2024. 01. 24 ~ 2024. 03. 27</div>
          <div>빠른 배포를 위해 Framer로 인터랙티브 웹 구축</div>
          <div>방문자 활동 수집을 위한 GA 및 TagManager 구축</div>
          <div>Google Ads로 키워드 설정 및 광고 최적화</div>
          <div>Framer 서버 이슈로 Next.js 포팅, 속도 개선</div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-fit">
        <div className="flex flex-wrap items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">NI Marketing</span>
          <span className="text-sm">FE Developer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2023. 07. 24 ~ 2024. 01. 23</div>
          <div>OAuth2.0 기술을 활용하여 sns로그인 구현</div>
          <div>SMS서비스를 활용, 번호 본인인증 서비스 구현</div>
          <div>ContextAPI 리렌더링 이슈로 Zustand 도입</div>
          <div>문의 메일기능 Next.js api로 풀스택 구현</div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-fit">
        <div className="flex flex-wrap items-end gap-2 border-b-8 border-muted-foreground p-1">
          <span className="text-xl font-bold">NCES corp</span>
          <span className="text-sm">Game Designer</span>
        </div>
        <div className="flex flex-col gap-1 p-2 text-sm">
          <div className="text-base">2020. 11. 04 ~ 2021. 12. 1</div>
          <div>플로우차트 기반 게임 시스템/컨텐츠 기획</div>
          <div>Shooting Korea 모바일 앱 UI/UX 기획 </div>
          <div>자사 웹, 서버 컨트롤 패널 UI/UX 기획</div>
          <div>10종 이상의 컨텐츠 기획 및 런칭 성공</div>
        </div>
      </div>
    </div>
  );
};
