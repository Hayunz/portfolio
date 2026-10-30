// 사이트 전체에서 쓰는 개인 정보. 여기만 고치면 홈·About·푸터에 모두 반영됩니다.
window.PROFILE = {
  nameKo: "김하윤",
  nameEn: "Hayun Kim",
  role: "XR Content Creator",
  statement: "VR 콘텐츠를 설계하고 직접 만듭니다.", // 홈 이름 바로 아래 큰 문장
  headline: "확장된 세계에서 ==현존감==을 느낄 수 있는 실감 콘텐츠를 만듭니다.",
  // About 맨 위 자기소개. 비우면 표시 안 함. 문단은 빈 줄(\n\n)로 구분
  intro: "",
  // 홈 첫 화면 15초 하이라이트 영상 (mp4). 비우면 대표 작품 이미지가 차례로 바뀌어요. 예: "assets/video/highlight.mp4"
  highlightVideo: "",
  // 홈 한 줄 소개(headline) 아래 줄글. 문단은 빈 줄(\n\n)로 구분, ==이렇게== 감싸면 형광펜. TODO: 초안이에요, 본인 말로 다듬기
  bio:
    "체험하는 사람이 그 세계 안에 ==정말 들어와 있다고 느끼는 순간==을 만들고 싶습니다. 그래서 이야기를 짜는 기획부터 Unity 구현, 영상 연출, 전시 현장 운영까지 ==한 작품을 처음부터 끝까지 직접== 다뤄 왔습니다.\n\n" +
    "컨트롤러 대신 손으로 만지고, 앉은 자리에서 고개를 돌려 이야기를 따라가는 것처럼 ==기기보다 사람의 몸이 먼저 오는 인터랙션==을 고민합니다. 역사 · 과학 · 환경 같은 주제를 직접 해 보는 체험으로 바꾸는 ==교육 콘텐츠==와, 감정을 따라가는 ==인터랙티브 시네마==를 주로 만들어 왔습니다.",
  // 홈 '기획 · 개발할 수 있는 콘텐츠'. projects: projects.js의 id (상세가 열린 작품만 링크)
  formats: [
    { title: "VR 인터랙티브 시네마", detail: "이야기를 따라가다 손으로 장면에 개입하는 VR 영상 체험", projects: ["daydream", "nostalgia"] },
    { title: "교육용 VR · MR 체험", detail: "역사 · 과학 · 해양 주제를 직접 해 보며 배우는 콘텐츠", projects: ["bulssi", "crumbi", "tryde"] },
    { title: "VR 퍼즐 · 어드벤처 게임", detail: "공간을 탐색하고 퍼즐을 풀며 이야기를 여는 게임", projects: ["sailors"] },
    { title: "전시 · 상영 콘텐츠", detail: "박물관 상영 영상, 미디어아트 전시, AR 포스터, 체험 부스 운영", projects: ["yeonginsan", "kculture-expo", "roasting-dreams"] },
  ],
  // 홈 첫 화면 '주요 성과' 3칸 (영상 아래). icon: trophy · stage · people, line: 한 줄 설명
  highlights: [
    { icon: "trophy", label: "수상", title: "장관상 대상 2회", line: "두 수상작에서 시스템 기획과 개발 총괄을 맡았습니다." },
    // 6회: 킨텍스 부스, DayDream 쇼케이스, 영인산산림박물관, 강릉아트센터, K컬쳐 박람회, 졸업전시
    { icon: "stage", label: "현장", title: "관객 앞에 선 전시 6회", line: "부스 설치부터 시연 운영까지 현장을 직접 맡았습니다." },
    // TODO: 500여 명 집계 근거(어느 전시 합산인지) 메모해 두기
    { icon: "people", label: "검증", title: "관람객 500여 명 플레이", line: "관람객 반응과 사용자 테스트로 체험을 다듬어 왔습니다." },
  ],
  email: "khy4450@naver.com",
  github: "", // 예: "https://github.com/아이디"
  resumePdf: "", // 예: "assets/files/resume.pdf"

  // 할 수 있는 것. About 'What I do'에 쓰입니다. detail: 한 줄 설명
  capabilities: [
    {
      title: "경험 기획",
      detail: "관객이 처음부터 끝까지 무엇을 보고 하게 될지 설계하고 기획서로 정리합니다.", // TODO: 문장 다듬기
    },
    {
      title: "XR 구현",
      detail: "Unity와 Unreal로 VR · AR 인터랙션과 콘텐츠를 직접 만들어 완성합니다.",
    },
    {
      title: "영상 · 연출",
      detail: "Premiere Pro와 After Effects로 콘텐츠 영상과 연출을 만듭니다.",
    },
    {
      title: "전시 · 현장",
      detail: "박물관, 아트센터, 박람회 현장에 콘텐츠를 걸고 운영해 봤습니다.",
    },
  ],

  awards: [
    {
      year: 2026,
      title: "VIVEN 메타버스 레벨디자인 해커톤 최우수상",
      detail: "개발 담당으로 참여",
    },
    {
      year: 2025,
      title: "가상융합서비스 개발자 경진대회 대상",
      detail: "부총리 겸 과학기술정보통신부 장관상 · Crumbi 개발",
      projectId: "crumbi",
    },
    {
      year: 2023,
      title: "제3회 메타버스 콘테스트 VR 부문 대상",
      detail: "부총리 겸 교육부장관상 · Tryde 개발",
      projectId: "tryde",
    },
    {
      year: 2022,
      title: "제2회 메타버스 콘테스트 우수상",
      detail: "디지털 혁신공유대학사업단 협의회장상 · 신체보조장치 개발을 위한 렌디스월크 캠퍼스 개발",
    },
  ],

  experience: [
    { period: "2025.01 – 2025.04", title: "(주)요요인터렉티브 인턴", detail: "영인산산림박물관 상영용 힐링 테마 영상 제작, 미니게임 로직 개발" },
    { period: "2024.10 – 2024.11", title: "로스팅 드림즈 AR 포스터 제작", detail: "강릉아트센터 AR 포스터 제작 및 홍보대사 활동" },
    { period: "2023.06 – 2023.09", title: "기술 입은 문화예술교육 보조 강사", detail: "메타버스 교육 및 공연 제작 보조" },
    { period: "2023.06 – 2023.08", title: "(재)의약바이오컨버젼스연구단 프로젝트", detail: "MSC 구조 구명을 위한 VR 프로젝트 개발" },
    { period: "2023.04 – 2023.07", title: "충남원 대학생 서포터즈", detail: "제1회 K컬쳐 박람회 미디어아트 전시 진행 및 영상 제작" },
  ],

  education: [
    { period: "2021.03 – 2025.02", title: "상명대학교", detail: "AR·VR미디어디자인전공 졸업 · 3학년 과대표" }, // TODO: 과대표로 한 일 한 줄 추가
    { period: "2018.03 – 2021.02", title: "천안여자고등학교", detail: "졸업" },
  ],

  // 스킬 = 툴 이름이 아니라 "이걸로 할 수 있는 것"과 근거 작품.
  // projects: projects.js의 id (상세 페이지로 연결). note: 사이트에 없는 근거는 글로.
  skills: [
    {
      group: "엔진 · 코드",
      items: [
        { name: "Unity", can: "XR 인터랙션, Timeline 연출, 커스텀 셰이더 · VFX Graph, 물리 · NavMesh까지 콘텐츠 한 편을 끝까지 구현", projects: ["daydream", "crumbi", "sailors", "bulssi", "tryde", "nostalgia"] },
        { name: "C#", can: "게임 로직 · 상태 기계 · ScriptableObject 데이터 설계, 커스텀 Timeline 트랙과 에디터 툴", projects: ["crumbi", "daydream", "sailors"] },
        { name: "Unreal Engine", can: "VR 콘텐츠 프로토타입 제작", note: "VR 노래방 (미공개)" },
        { name: "AI 코딩 에이전트", can: "Claude Code · Codex와 협업 규칙 · 검토 파이프라인을 세워 개발 속도를 높임", projects: ["daydream"] },
      ],
    },
    {
      group: "XR",
      items: [
        { name: "XR Interaction Toolkit", can: "잡기 · 소켓 · 레이 · 텔레포트 상호작용 설계", projects: ["sailors", "tryde", "bulssi", "crumbi"] },
        { name: "OpenXR 핸드 트래킹", can: "컨트롤러 없이 핀치 · 손동작으로 진행되는 체험 설계와 판정", projects: ["bulssi", "daydream"] },
        { name: "Meta XR SDK", can: "MR 패스스루에서 캐릭터가 방 안을 돌아다니는 모드", projects: ["crumbi"] },
        { name: "Meta Quest 2 · 3, Pico", can: "기기별 빌드 · 전시 운영 · 시야 정렬, 좌식 체험 설계", projects: ["daydream", "bulssi", "sailors"] },
      ],
    },
    {
      group: "디자인 · 영상",
      items: [
        { name: "Premiere Pro · After Effects", can: "상영 영상, 전시 영상, 모션그래픽 제작", projects: ["yeonginsan", "kculture-expo", "nostalgia"] },
        { name: "Photoshop · Illustrator", can: "UI 시안 · 일러스트 · 텍스처", projects: ["kculture-expo", "sailors"] },
        { name: "Blender · Figma", can: "스캔 메시 정리와 간단한 모델링, UI 화면 설계", projects: ["nostalgia", "sailors"] },
      ],
    },
    {
      group: "협업 · 문서",
      items: [
        { name: "Git", can: "팀 저장소에서 브랜치 · 커밋으로 협업", projects: ["daydream", "crumbi"] },
        { name: "Notion · PowerPoint · 한글", can: "기획서 · 시나리오 · 발표 자료 · 운영 문서 작성", projects: ["sailors", "tryde", "bulssi"] },
      ],
    },
  ],

  certificates: ["컴퓨터활용능력 2급"],
};
