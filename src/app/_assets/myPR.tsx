export const MyPR = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <div className="w-full border-l-8 border-muted-foreground">
        <div className="flex flex-col gap-3 py-2 pl-4">
          <div className="flex flex-wrap items-end gap-1">
            <h2 className="text-2xl font-bold">커뮤니케이션</h2>
            <h3 className="text-lg font-semibold">Communication comes first</h3>
          </div>
          <div className="flex flex-col gap-1">
            <p>팀 매뉴얼, 브랜치 전략, PR 규칙 등 프로세스 개선 및 문서화</p>
            <p>{`칸반 보드, 캘린더로 애자일한 협업 환경 구축(with 노션)`}</p>
            <p>서비스 기획자 출신으로 원만한 대인관계, 대외 소통 담당</p>
          </div>
        </div>
      </div>
      <div className="w-full border-l-8 border-muted-foreground">
        <div className="flex flex-col gap-3 py-2 pl-4">
          <div className="flex flex-wrap items-end gap-1">
            <h2 className="text-2xl font-bold">조직 친화적</h2>
            <h3 className="text-lg font-semibold">Leadership & Followership</h3>
          </div>
          <div className="flex flex-col gap-1">
            <p>개인 프로젝트가 회사 메인 프로젝트로 승격, 구글 마켓 배포</p>
            <p>서비스 기획 다수, 사내 세미나 발표 2회, Next.js 도입</p>
            <p>할당된 업무만이 아닌 회사 목표, 비전에 따라 능동적으로 업무</p>
          </div>
        </div>
      </div>
      <div className="w-full border-l-8 border-muted-foreground">
        <div className="flex flex-col gap-3 py-2 pl-4">
          <div className="flex flex-wrap items-end gap-1">
            <h2 className="text-2xl font-bold">책임감</h2>
            <h3 className="text-lg font-semibold">
              Responsibility breeds Solutions
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <p>자사 웹을 웹빌더에서 Next.js로 리뉴얼 후 로딩 속도 760% 증가</p>
            <p>{`칸반 보드, 캘린더로 애자일한 협업 환경 구축(with 노션)`}</p>
            <p>6개월간 20개 이상 기획서 작성 후 직접 자사 서비스 개선</p>
          </div>
        </div>
      </div>
    </div>
  );
};
