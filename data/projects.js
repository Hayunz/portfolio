// 프로젝트 데이터. 배열 순서 = 화면에 보이는 순서.
// 새 프로젝트를 추가하려면 아래 TEMPLATE 블록을 복사해서 배열에 붙여 넣고 채우면 됩니다.
// 빈 문자열("")이나 빈 배열([])인 항목은 실제 사이트에서 자동으로 숨겨집니다.
// (로컬에서 열 때만 "여기에 무엇을 넣을지" 안내 박스가 보여요.)
//
// 이미지/영상 경로는 index.html 기준 상대 경로: "assets/images/sailors/cover.jpg"
// .mp4 / .webm 은 자동재생 루프 영상으로, 나머지는 이미지로 표시됩니다.
//
// ── TEMPLATE ────────────────────────────────────────────────
// {
//   id: "project-id",            // 주소에 쓰임: project.html?id=project-id (영문 소문자, 하이픈)
//   title: "프로젝트 이름",
//   year: 2025,
//   category: "xr",              // "xr" = XR 콘텐츠, "client" = 전시 · 클라이언트 작업
//   featured: true,              // true면 메인 카드(6개 안팎 권장), false면 아래 '기타 프로젝트' 목록
//                                // featured: false 라도 detail: true면 목록에서 상세 페이지로 연결돼요
//   detail: true,                // false면 상세 페이지 없이 목록에만 표시
//   hidden: true,                // featured: false 와 함께 쓰면 상세 페이지는 유지하되 홈에서는 하단 Archive에만 표시
//   theme: {                     // 상세 페이지 분위기. 프로젝트마다 다르게
//     hero: "",                  // 키 아트 이미지/영상 (가로 1920px 권장). 비우면 아래 art가 대신 나옴
//     art: "deep-sea",           // 임시 배경: deep-sea / space / ember / dream / dusk / aurora
//     accent: "#6fe3ff",         // 제목·강조 색
//     bg: "#020c16", text: "#e4f6ff",
//     font: "tech",              // 제목 서체: cinematic / elegant / tech / round
//     tagline: "",               // 히어로 오른쪽 큰 인용 문구 (비우면 summary)
//   },
//   award: "",                   // 수상 내역 한 줄
//   summary: "",                 // 카드와 상세 상단에 쓰이는 한 줄 소개
//   roles: ["기획", "개발"],      // 내가 맡은 분야: 기획 / 개발 / 영상 / 디자인 / 운영 등
//   tags: ["Unity", "VR"],       // 기술 · 형식
//   cover: "",                   // 카드 썸네일 (16:9 권장, GIF/mp4 가능)
//   youtube: "",                 // 유튜브 영상 ID 또는 주소. 있으면 상세 상단에 표시
//   meta: { client: "", venue: "", period: "", team: "", tools: "", platform: "" },
//
//   // ↓ 상세 페이지는 이 순서로 보입니다
//   overview: "",                // 소개: 어떤 콘텐츠인지. 문단은 빈 줄(\n\n)로 구분
//   intent: "",                  // 기획 의도: 누구에게 어떤 경험을 주려 했나
//   flow: [],                    // 체험 흐름: 관객이 처음부터 끝까지 하는 일, 단계별로
//   contributions: [],           // 내가 맡은 것: 구체적으로 (팀 프로젝트일수록 중요)
//   features: [                  // 구현 하이라이트 1–2개면 충분. '문제 → 해결 → 결과'로.
//     {
//       title: "",
//       problem: "", solution: "", result: "",   // 셋 다 선택 사항
//       points: [],                              // 또는 그냥 불릿으로
//       media: "",                               // 동작 모습 GIF/mp4
//       code: { lang: "csharp", content: `` },   // 선택. 짧은 핵심 부분만
//       codeLink: "",
//     },
//   ],
//   gallery: [                   // 현장 · 과정: 체험 사진, 기획서, 스케치, 스토리보드
//     { src: "", caption: "" },
//   ],
//   results: [],                 // 결과: 수상, 전시 장소 · 기간, 관람객 수, 반응
//   links: [{ label: "기획서", url: "" }],
// },
// ────────────────────────────────────────────────────────────

window.PROJECTS = [
  // ── XR 콘텐츠 ─────────────────────────────────
  {
    id: "daydream",
    title: "DayDream",
    year: 2026,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "dusk", accent: "#e8c47a", bg: "#140d08", text: "#f6ecd9", font: "elegant", tagline: "꿈에서 얻은 용기로, 아이는 마지막 절벽을 직접 오릅니다", hero: "assets/images/daydream/key-art.jpg" },
    award: "",
    summary: "아버지의 약초를 찾아 산을 오르는 아이의 꿈을, 신령의 손이 되어 손끝으로 함께 걸어가는 VR 인터랙티브 시네마",
    roles: ["개발"],
    tags: ["Unity 6", "VR", "Interactive Cinema", "Hand Tracking", "Exhibition"],
    cover: "assets/images/daydream/key-art.jpg",
    youtube: "",
    meta: {
      period: "2026.03 – 2026.08 (이후 추가 시연 준비)",
      team: "3인 (팀 DearBrave) · 개발 1 · 기획 1 · 아트 1",
      tools: "Unity 6 URP · OpenXR Hand Tracking · XR Hands · XRI 3.4 · Timeline · Meta XR Audio (HRTF) · VFX Graph",
      platform: "Meta Quest 3 (PC Link) · 좌식 체험 · 1인 10~13분",
    },
    overview:
      "DayDream은 '모두가 편히 즐길 수 있는 VR 콘텐츠'를 목표로 만든 VR 인터랙티브 시네마입니다. 한지로 접은 듯한 디오라마 세계를 앉아서 내려다보며, 컨트롤러 없이 손가락을 모으는 동작(핀치)만으로 이야기에 개입합니다.\n\n" +
      "아픈 아버지를 위해 약초를 찾아 산길을 걷던 아이가 꿈속 신령의 공간에 들어갑니다. 관객은 아이가 기도한 신령의 손이 되어 연등을 띄우고, 꽃잎과 나무를 옮기고, 모닥불을 지피며 아이의 길을 밝힙니다. 아이는 꿈에서 얻은 용기로 마지막 절벽을 스스로 오릅니다.",
    intent:
      "VR이 낯선 사람도 전시장에서 편하게 볼 수 있어야 했습니다. 그래서 앉아서 보고, 걷지 않고, 컨트롤러를 쥐지 않고, 읽어야 할 글을 거의 없앴습니다. 손이 필요한 순간에는 손끝이 스스로 빛나고, 놓을 자리에는 구슬이 떠서 '무엇을 잡고 어디에 놓을지'를 빛만으로 알려 줍니다.\n\n" +
      "관객을 구경꾼이 아니라 '아이가 기도한 신령'으로 두어, 손을 내미는 행동이 곧 이야기의 다음 장면이 되도록 설계했습니다.",
    flow: [
      "튜토리얼 — 로고를 3초 핀치해 시작하고, 자막 언어(한/영)를 고른 뒤 연등의 네 면을 뜯어 열면 마을에 불이 켜집니다. 아이가 연등을 하늘로 올립니다.",
      "강가까지 — 낮의 산길. 약초를 찾아 걷는 아이를 바라봅니다.",
      "신령의 공간 — 꽃잎, 나무, 연등을 차례로 옮겨 놓고, 아이를 들어 꿈의 길 위에 내려놓습니다.",
      "꿈 — 모닥불을 핀치해 지피면 반딧불이 길을 안내하고, 연꽃이 피어나며 디딤돌이 연잎으로 바뀝니다.",
      "엔딩 — 돌 위에 앉은 아이를 핀치하면 돌이 연등으로 변합니다. 절벽 중턱에 놓으면 빛이 되어 사라지고, 아이가 절벽 위에 서 있습니다.",
      "에필로그 — 로고와 함께 체험이 끝나고, 다음 관객을 위해 정렬 상태로 돌아갑니다.",
    ],
    contributions: [
      "개발 1인 — 커밋 700여 개, 단일 StoryScene에 6개 스테이지와 손 인터랙션 10곳 구현",
      "Timeline 기반 내러티브 시퀀서와 인터랙션 게이트, 아이 Idle 크로스페이드, BGM 이어 틀기",
      "OpenXR 핸드 트래킹 핀치 입력, 손끝 발광 셰이더와 목적지 구슬 안내",
      "쇼케이스 운영 시스템 — 좌식 시야 정렬 · 운영자 복구 키 · 플레이타임 CSV 로거, 운영 문서",
      "한지 룩 커스텀 셰이더 15종, VFX Graph 20여 종, 시선 · 표정 · 스플라인 · 환경 무드 커스텀 Timeline 트랙",
      "Meta XR Audio HRTF와 3D 오디오 앵커, 한/영 자막, 타임라인 검색 · 배선 검증 · 자막 생성 에디터 툴",
      "AI 코딩 에이전트(Claude Code · Codex) 협업 규칙과 검토 파이프라인을 세워 개발 속도를 높임",
    ],
    features: [
      {
        title: "관객이 머뭇거려도 세계가 멈추지 않는 시퀀서",
        problem: "이야기는 Timeline으로 흐르지만 손 인터랙션 지점에서는 관객을 기다려야 합니다. 타임라인을 멈추면 아이가 박제되고 음악이 끊겼고, 속도를 0으로 두면 내부 시계가 흘러 재개할 때 장면이 점프했습니다.",
        solution: "6개 스테이지를 StageData로 묶어 순서대로 재생하는 NarrativeSequencer를 만들고, Signal 지점에서 Pause한 뒤 시간을 복원해 재개하게 했습니다. 대기 중에는 Idle 전용 PlayableGraph를 따로 돌려 Timeline과 크로스페이드하고, BGM과 환경음은 같은 AudioSource로 이어 틀어 끊김을 없앴습니다. 종료 신호는 세 갈래(director.stopped · 컨덕터 onComplete · TimelineEndRelay)로 받아 멈춤 사고를 막았습니다.",
        result: "관객이 손을 내밀 때까지 아이는 숨 쉬고 음악은 흐릅니다. 운영자는 1~5 키로 장면을 건너뛰고 F12로 즉시 암전할 수 있습니다.",
        media: "assets/images/daydream/story-04-spirit.jpg",
      },
      {
        title: "손끝이 말하는 안내",
        problem: "VR이 처음인 관객에게 글로 조작법을 설명하면 읽는 동안 몰입이 끊기고, 전시장에서는 읽지 않습니다.",
        solution: "XR Hands로 엄지와 검지 끝 거리를 읽어 핀치 강도를 구하고(히스테리시스 0.7 / 0.3), 손끝에는 Rest · Armed · Hover · Pinch 4단계로 빛나는 한지 발광 셰이더를 입혔습니다. 게이트가 열리면 손끝이 맥동하고, 놓을 자리에는 민트빛 구슬이 뜹니다. 잡은 물건을 놓치면 원위치로 돌아와 다시 잡을 수 있습니다.",
        result: "안내 문구는 시작 화면 한 줄뿐입니다. 손이 필요한 10곳을 빛의 변화만으로 통과합니다.",
        media: "assets/images/daydream/story-01-opening.jpg",
      },
      {
        title: "앉아서 보는 전시를 위한 시야 정렬",
        problem: "쇼케이스에서는 관객이 바뀔 때마다 헤드셋을 벗고 쓰는데, 그때마다 시야가 틀어지거나 검은 화면에서 멈추면 운영이 무너집니다.",
        solution: "빌드 시작이 아니라 '착용 감지 → 위치 · 회전 트래킹 유효 → 머리 안정(4mm/frame)'이 확인된 뒤 암전 뒤에서 한 번만 시야를 정렬하고 잠그는 StartupRecenter를 만들었습니다. 정렬에 실패하면 화면을 열지 않고 운영자 복구 키(Ctrl+숫자)를 기다립니다. 헤드셋을 벗으면 0.5초 뒤 자동 암전합니다.",
        result: "3일 쇼케이스를 Quest 3 부스 3대로 독립 운영했고, 스테이지별 플레이타임이 CSV로 쌓여 어디서 관객이 오래 머무는지 실측할 수 있었습니다.",
        media: "assets/images/daydream/booth-action.jpg",
      },
      {
        title: "소리로 이끄는 시선",
        problem: "실측 로그에서 강가 장면 80~130초 구간에 아이를 놓치는 관객이 많았습니다. 디오라마는 넓고 아이는 작습니다.",
        solution: "Meta XR Audio의 HRTF로 입체음향을 넣고, 움직이는 아이 · 연등 · 손 인터랙션 소리는 3D 앵커가 따라다니게, 나레이션과 음악은 2D로 두는 하이브리드 규약을 정했습니다. 아이의 소리에 HRTF를 걸어 시선을 끌고, 나레이션이 나올 때는 음악을 더킹합니다. 음량은 실측해 정규화했습니다.",
        result: "관객이 소리가 나는 쪽으로 고개를 돌려 아이를 다시 찾습니다. 성우 나레이션 54테이크는 코드로 배선해 교체가 쉽습니다.",
        media: "assets/images/daydream/story-02-day.jpg",
      },
      {
        title: "돌이 연등이 되는 엔딩",
        points: [
          "돌 위에 앉은 아이를 핀치하면 돌이 연등으로 물들고(머티리얼 프로퍼티 블록으로 _StoneReveal 진행), 절벽 중턱에 놓으면 빛으로 흩어지며 절벽 위 아이로 바뀝니다.",
          "디오라마 위에서 라이트를 쓰면 거리 제곱으로 빛이 튀어, 라이트 대신 이미시브로 '어둠 속 꽃만 빛나는' 룩을 만들었습니다. 연꽃 개화와 디딤돌 → 연잎 모핑도 progress 0→1 순수 함수로 구현해 Timeline에서 되감을 수 있습니다.",
        ],
        media: "assets/images/daydream/story-06-ending.jpg",
      },
      {
        title: "손으로 만드는 대신 코드로 배선하는 저작 도구",
        points: [
          "인스펙터에서 트랙을 수작업으로 연결하다 한 칸씩 밀리는 실수가 반복돼, 배선을 코드로 하는 에디터 메뉴 40여 개와 배선 검증기를 만들었습니다.",
          "타임라인 검색 창(트랙 · 클립 · 마커 · 바인딩 검색), 오디오 트랙에서 자막을 자동 생성하는 창, 전시 부스 4×5m 목업과 플레이 가능 영역 판정 기즈모를 추가했습니다.",
        ],
        media: "",
      },
    ],
    gallery: [
      { src: "assets/images/daydream/story-01-opening.jpg", caption: "Opening — 연등이 도착합니다" },
      { src: "assets/images/daydream/story-02-day.jpg", caption: "Day — 약초를 열심히 찾는 아이" },
      { src: "assets/images/daydream/story-03-shadow.jpg", caption: "Day — 그림자" },
      { src: "assets/images/daydream/story-04-spirit.jpg", caption: "Spirit Space — 신령의 손이 아이를 옮깁니다" },
      { src: "assets/images/daydream/story-05-cliff.jpg", caption: "Herb Cliff — 절벽 위의 약초" },
      { src: "assets/images/daydream/story-06-ending.jpg", caption: "Ending — 절벽을 오르는 아이" },
      { src: "assets/images/daydream/booth-wide.jpg", caption: "2026 New Content Academy Showcase — DayDream 부스" },
      { src: "assets/images/daydream/booth-action.jpg", caption: "쇼케이스 현장 체험" },
      { src: "assets/images/daydream/booth-installation.jpg", caption: "부스 설치" },
    ],
    results: [
      "2026 New Content Academy Showcase 출품 (2026.08.19 – 08.21) — 한국콘텐츠진흥원 뉴콘텐츠아카데미",
      "Quest 3 부스 3대 독립 운영, 1인 체험 10~13분, 스테이지별 플레이타임 실측",
      "쇼케이스 이후 영어 자막 · 오디오 · 시선 유도를 보완해 추가 시연 준비 중",
    ],
    links: [
      { label: "팀 사이트", url: "https://dear-brave-site.vercel.app/" },
      { label: "플레이 영상", url: "" },
    ],
  },

  {
    id: "crumbi",
    title: "Crumbi",
    year: 2025,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "ember", accent: "#ff7a1f", bg: "#1a0b06", text: "#fff1e6", font: "cinematic", tagline: "실험으로 성질을 알아내고, 문장으로 마음을 읽어 크럼비를 해방하라", hero: "assets/images/crumbi/key-art.jpg" },
    award: "2025 가상융합서비스 개발자 경진대회 대상 · 부총리 겸 과학기술정보통신부 장관상",
    summary: "바위에 봉인된 광물 생명체 '크럼비'를 손으로 조사해 깨우고, 현실의 내 방으로 데려오는 VR · MR 작품",
    standalone: true, // 지원서에 링크한 페이지: 다른 페이지로 가는 링크 없음
    roles: ["시스템 기획", "개발"],
    tags: ["Unity", "VR", "MR", "Meta Quest", "Education"],
    cover: "assets/images/crumbi/cover.jpg",
    videos: [
      { title: "세계관 소개 영상 (50초)", src: "assets/video/crumbi-world-story.mp4", poster: "assets/images/crumbi/world-story-poster.jpg" },
      { title: "트레일러 (2분)", youtube: "https://youtu.be/rhs31e7edMo" },
    ],
    labels: { features: "Notes · 작업 노트" },
    meta: {
      period: "2025.03 – 2025.08 제작 · 2025.11 킨텍스 전시 3일",
      team: "5인 (팀 Dolpamin) · 개발 1 · 아트 4",
      tools: "Unity · Meta XR SDK · XR Interaction Toolkit · Timeline",
      platform: "Meta Quest (VR + MR 패스스루) · 1인 체험",
    },
    overview:
      "플레이어는 지하탐험단이 되어, 바위 속에 봉인된 광물 생명체 '크럼비'를 구하러 땅속으로 내려갑니다. 석탄 · 석회암에서 방해석 · 석영, 자철석 · 장석, 다이아몬드까지 네 개의 지층을 내려가며 크럼비를 한 마리씩 깨웁니다.\n\n" +
      "크럼비를 깨우려면 실험대에서 염산 · 망치 · 조흔판 · 드릴 · 자석으로 성질을 조사해 '키워드'를 모으고, 그 광물의 마음을 담은 문장의 빈칸을 키워드로 채워야 합니다. 깨어난 크럼비는 헤드셋을 벗지 않고 돌아온 현실의 내 방을 돌아다닙니다.",
    intent:
      "광물의 성질은 외워야 할 목록이 되기 쉽습니다. 염산에 거품이 나고, 망치로 두드리면 굳기가 다르고, 조흔판에 긁으면 색이 남는다는 사실을 손으로 직접 겪게 하고 싶었습니다.\n\n" +
      "팀은 광물을 '구해야 할 친구'의 이야기로 바꾸자는 방향을 잡았고, 저는 그 이야기를 손으로 겪는 방식을 설계했습니다. 실험 결과가 키워드가 되고, 키워드로 문장을 완성하면 친구가 깨어납니다. 배운 것이 곧 이야기의 진행이 되도록 했습니다.",
    flow: [
      "오프닝 — 지하 연구실에서 크럼비를 만나고, 실험 도구 사용법을 하나씩 배웁니다.",
      "탐험 — 지층마다 퍼즐을 풀며 봉인된 크럼비가 있는 곳까지 내려갑니다. 돌아가는 블록, 떨어지는 바위, 빛의 순서 퍼즐을 지납니다.",
      "스캔 — 스캐너를 2초간 비추면 봉인이 풀리고, 크럼비를 실험대로 데려옵니다.",
      "실험 — 버블러 · 망치 · 조흔판 · 드릴 · 자석으로 조사합니다. 반응마다 키워드가 쌓이고, 망치는 굳기만큼 손에 진동이 옵니다.",
      "해방 — 그 광물의 마음을 담은 문장의 빈칸에 키워드를 넣습니다. 맞으면 크럼비가 깨어납니다.",
      "엔딩 — 다이아몬드 층에서 불안정한 코어를 가라앉히고, 대왕 크럼비가 깨어납니다.",
      "MR — 헤드셋을 벗지 않고 내 방으로 돌아오면, 깨어난 크럼비들이 방 안을 돌아다닙니다. 불러서 감정을 나눌 수 있습니다.",
    ],
    contributions: [
      "상호작용 설계와 프로그래밍 전체 — 아트 팀 4명과 함께 개발 1인",
      "실험 도구 다섯 종의 반응과 진동, 키워드로 문장을 완성해 크럼비를 깨우는 구조, 네 지층의 퍼즐",
      "MR 모드, 말 대신 행동으로 배우는 튜토리얼, 전시용 빌드",
    ],
    features: [
      {
        title: "손으로 알아내는 광물의 성질",
        points: [
          "염산을 부으면 거품이 일고, 망치로 두드리면 단단한 만큼 손이 울리고, 조흔판에 긁으면 그 광물의 색이 남습니다. 글로 읽는 대신 손에 돌아오는 반응으로 성질을 알게 됩니다.",
          "반응이 일어날 때마다 키워드가 쌓여, 실험이 곧 배움이 됩니다.",
        ],
        media: "assets/images/crumbi/props.jpg",
      },
      {
        title: "키워드가 문장이 되고, 문장이 친구를 깨웁니다",
        points: [
          "문장은 그 광물의 성질을 광물의 '마음'으로 풀어 쓴 글입니다. 빈칸에 모은 키워드를 넣어 문장이 완성되면 봉인이 풀리고 크럼비가 깨어납니다.",
          "틀리면 빈칸이 비워지고 다시 시도합니다. 정답을 맞히는 과정이 곧 성질을 읽는 과정이 되게 했습니다.",
        ],
        media: "assets/images/crumbi/sentence.jpg",
      },
      {
        title: "내 방으로 따라 나온 크럼비",
        points: [
          "헤드셋을 벗지 않고 현실의 방으로 돌아오면, 깨어난 크럼비들이 방 안을 돌아다닙니다. 가리켜 부르면 다가오고, 기쁨 · 슬픔 · 화남 감정에 반응합니다.",
          "가상에서 구한 친구가 현실 공간으로 따라 나오는 경험이 이 작품의 마지막 장면입니다.",
        ],
        media: "assets/images/crumbi/mr.jpg",
      },
    ],
    gallery: [
      { src: "assets/images/crumbi/key-art.jpg", caption: "키 아트" },
      { src: "assets/images/crumbi/characters.jpg", caption: "크럼비들 — 광물의 성질을 성격으로 옮긴 캐릭터 (아트 팀)" },
      { src: "assets/images/crumbi/cave.jpg", caption: "지층 사이의 길" },
      { src: "assets/images/crumbi/stage2.jpg", caption: "결정 동굴" },
      { src: "assets/images/crumbi/stages.jpg", caption: "네 개의 지층 — 석회암 지대, 결정 동굴, 용암 지대, 다이아몬드 코어" },
      { src: "assets/images/crumbi/story-1.jpg", caption: "세계관 소개 영상의 한 장면 — 크럼비는 지하 세계의 균형을 지키는 친구들" },
      { src: "assets/images/crumbi/mr.jpg", caption: "MR 모드 — 내 방에 온 크럼비" },
      { src: "assets/images/crumbi/sns.jpg", caption: "SNS 운영 — 크럼비 도감" },
    ],
    results: [
      "2025 가상융합서비스 개발자 경진대회 개발자 부문 성인 분야 대상 — 부총리 겸 과학기술정보통신부 장관상 (주최 과학기술정보통신부)",
      "2025.11 경기 고양 킨텍스, 경진대회 전시 부스에서 3일간 관람객 시연 (출품작)",
      "메타(Meta Korea)가 페이스북으로 대상작 크럼비를 소개",
    ],
    press: [
      {
        label: "Meta Korea 페이스북 소개",
        url: "https://www.facebook.com/MetaKorea/posts/pfbid02Bzmi3Mk7Suh6tyRdhgYJb8hxU3zkeiRMdVKULBeHiwsfHP4ce3tA7Wk3coQeqEJYl",
        facebook: "https://www.facebook.com/MetaKorea/posts/pfbid02Bzmi3Mk7Suh6tyRdhgYJb8hxU3zkeiRMdVKULBeHiwsfHP4ce3tA7Wk3coQeqEJYl",
        height: 665,
      },
    ],
    links: [],
  },

  {
    id: "tryde",
    title: "Tryde: 2050년, 침몰된 지구 구출 작전",
    year: 2023,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "deep-sea", accent: "#ffd23f", bg: "#071a33", text: "#eef6ff", font: "round", tagline: "", hero: "assets/images/tryde/hero.jpg" },
    award: "2023 제3회 메타버스 콘테스트 VR 부문 대상 · 부총리 겸 교육부장관상",
    summary: "해수면 상승으로 바다에 잠긴 2050년, 수중 로봇을 배우는 메타버스 해양 캠퍼스",
    roles: ["개발"],
    tags: ["Unity", "VR", "Metaverse", "Education"],
    cover: "assets/images/tryde/hero.jpg",
    youtube: "",
    meta: { period: "2023.04 – 2023.10", team: "4인 (팀 바다진주) · 개발 1", tools: "Unity URP · XR Interaction Toolkit 2.4 · OpenXR · Timeline · NavMesh", platform: "Meta Quest · PC VR" },
    overview:
      "지구온난화로 침수 위기에 놓인 2050년, 해양 · 해저 도시를 지키기 위한 수중 로봇을 개발하는 인재 육성 캠퍼스입니다.\n\n" +
      "1캠퍼스는 미래관 · 전시실 · 도감실이 있는 홍보 공간이고, 2캠퍼스는 지능형 로봇의 교육과정을 담은 6개 강의실입니다. 짝꿍 로봇과 함께 강의실을 돌며 로봇을 설계하고, 코딩하고, 인공지능을 학습시킵니다.",
    intent:
      "콘테스트 주제인 '가상캠퍼스와 VR 교육장에서 배우는 신기술 분야 교육'에 맞춰 기획했습니다.\n\n" +
      "'지구온난화 → 미래 해양 도시 → 수중 로봇 → 인재 육성'으로 이어지는 세계관을 세우고, 로봇과 인공지능이라는 어려운 분야를 귀여운 캐릭터와 직접 해 보는 체험으로 쉽게 배우도록 했습니다.",
    flow: [
      "시작 · 튜토리얼 — 초대장을 집어 우편함에 꽂으면 환영 인사와 함께 캠퍼스가 열립니다. 조작법을 여기서 익힙니다.",
      "1캠퍼스 — 화살표를 따라 미래관(스토리 영상), 전시실(해양생물 도감), 전시관(로봇을 양손으로 잡고 살펴보기)을 둘러봅니다.",
      "이동 — 엘리베이터 버튼을 누르면 바닷속 2캠퍼스로 내려갑니다.",
      "2캠퍼스 — 세 가지 질문에 답해 나와 맞는 짝꿍 로봇을 만나고, 6개 강의실을 돕니다: 설계실(PLC 회로), 모델링(로봇 꾸미기), 프로그래밍(코딩 블록), 인공지능(지형 판별), 시뮬레이션(레버 · 의자), 데이터 분석(소나 · 탐사 영상).",
      "엔딩 — 강의실 6곳의 완료 토큰을 모두 꽂으면 엔딩 화살표와 출구가 열리고, 카페에서 마무리합니다.",
    ],
    contributions: [
      "게임플레이 프로그래밍 전체 (개발 1인)",
      "6개 씬 흐름(시작 → 튜토리얼 → 1캠퍼스 → 전환 → 2캠퍼스 → 카페)의 씬 전환 · 페이드 · 진행 상태 관리",
      "강의실 6곳의 미니 인터랙션과 짝꿍 로봇 동행, 튜토리얼, 유저 테스트 피드백 반영",
    ],
    features: [
      {
        title: "'꽂기' 하나로 통일한 강의실 인터랙션",
        problem: "강의실 6곳마다 성격이 다른 체험이 필요했지만, 개발은 1명이었고 VR 조작은 단순해야 했습니다.",
        solution: "XR Socket Interactor에 물건을 꽂는 동작을 공통 규칙으로 삼았습니다. 설계실은 빨강 · 파랑 소켓을 채우면 회로에 불이 들어오고, 프로그래밍실은 코딩 블록을 4 · 5칸에 꽂은 순서를 태그로 검사해 로봇이 움직이거나 실패 동작을 합니다. 모델링실은 머리 색 9종과 몸체 텍스처를 고르고 PlayerPrefs에 저장합니다.",
        result: "한 번 배운 조작으로 모든 강의실을 할 수 있어, 체험자들이 '상호작용이 다양해서 재밌었다'고 답했습니다.",
        media: "assets/images/tryde/coding-scenario.jpg",
      },
      {
        title: "토큰 6개를 모으면 열리는 출구",
        points: [
          "강의실을 마칠 때마다 완료 토큰을 받고, 6개를 모두 소켓에 꽂으면 짝꿍 로봇 · 엔딩 화살표 · 출구가 동시에 열립니다.",
          "자유롭게 돌아다니면서도 '무엇을 모아야 끝나는지'가 분명해, 안내 없이도 완주할 수 있게 했습니다.",
        ],
        media: "",
      },
      {
        title: "강의실마다 걸어오는 짝꿍 로봇",
        points: [
          "짝꿍 로봇은 강의실마다 NavMeshAgent로 플레이어에게 걸어와 Timeline 대사를 재생합니다.",
          "플레이어를 계속 따라다니는 추적 AI도 만들었지만, VR에서 시선을 분산시켜 강의실별 고정 동선으로 바꿨습니다.",
        ],
        media: "assets/images/tryde/campus2-partner.jpg",
      },
      {
        title: "유저 테스트로 바꾼 것",
        problem: "VR 체험 후 받은 피드백에서, 지금 어디에 있는지 알기 어렵고 상호작용을 어떻게 하는지 · 언제 시작하고 끝나는지 잘 드러나지 않는다는 점이 나왔습니다.",
        solution: "구역에 들어서면 다음 화살표로 바뀌는 단계별 안내, 텔레포트 도착점을 겸하는 발판, '맞았어 / 틀렸어' 음성과 애니메이션 피드백을 추가했습니다.",
        result: "체험자들에게서 '프로그래밍을 체험할 수 있는 교육 공간이 기억에 남는다'는 반응을 얻었습니다.",
        media: "",
      },
    ],
    gallery: [
      { src: "assets/images/tryde/start.jpg", caption: "시작 화면" },
      { src: "assets/images/tryde/campus1-hub.jpg", caption: "1캠퍼스 — 미래관 · 전시실 · 도감실" },
      { src: "assets/images/tryde/descending.jpg", caption: "2캠퍼스로 내려가는 이동 장면" },
      { src: "assets/images/tryde/campus2-partner.jpg", caption: "2캠퍼스 — 짝꿍 로봇과 함께" },
      { src: "assets/images/tryde/campus2-hall.jpg", caption: "캠퍼스 내부" },
      { src: "assets/images/tryde/construction.jpg", caption: "해저 건설 현장" },
      { src: "assets/images/tryde/undersea.jpg", caption: "해저 탐사" },
      { src: "assets/images/tryde/coding-scenario.jpg", caption: "코딩 블록 시나리오 — 손글씨 기획" },
      { src: "assets/images/tryde/award.jpg", caption: "상장 — 부총리 겸 교육부장관상" },
    ],
    results: [
      "상금 300만 원과 표창 (팀 바다진주)",
      "체험자 유저 테스트 후 피드백 반영",
    ],
    links: [
      { label: "발표 자료 (PDF)", url: "https://drive.google.com/file/d/1zdqaEsKKG2FSbWgP71Gwm3wS7SYt3tbd/view" },
      { label: "소개 영상", url: "" },
    ],
  },

  {
    id: "sailors",
    title: "Sailors",
    year: 2024,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "dusk", accent: "#ffad5c", bg: "#06141c", text: "#eaf6fa", font: "tech", tagline: "2070년, 침몰한 고향을 떠나 해상도시에 거주하는 주인공의 이야기", hero: "assets/images/sailors/hero.jpg" },
    award: "",
    summary: "침몰한 고향을 떠나 해상도시에 사는 주인공이 되어 잠수함을 수리하며 이야기를 따라가는 VR 퍼즐 게임",
    roles: ["기획", "개발", "애니메이션"],
    tags: ["Unity", "VR", "Puzzle", "Adventure"],
    cover: "assets/images/sailors/hero.jpg",
    youtube: "ndaVkLro6GU",
    meta: {
      period: "2024.01 – 2024.09",
      team: "2인 · 개발 · 애니메이션 / 모델링 · 텍스쳐",
      tools: "Unity URP · XR Interaction Toolkit 2.4 · OpenXR · Timeline · VFX Graph · Shader Graph",
      platform: "Meta Quest 2 · PC VR",
    },
    overview:
      "2070년, 지구온난화로 대부분의 육지가 바다에 잠기고 사람들은 해상도시에서 살아갑니다. 주인공은 파트너 강소희, AI 로봇 꿀비와 함께 정착할 곳을 찾아 잠수함으로 항해하던 중 해상강도단의 공격을 받습니다.\n\n" +
      "플레이어는 실력 좋은 잠수함 수리공이 되어, 초소형 로봇의 시점으로 회로를 고치며 망가진 잠수함을 되살립니다. 이야기가 펼쳐지는 스토리 파트와 퍼즐을 푸는 수리 파트가 번갈아 진행되는 1인칭 VR 퍼즐 어드벤처입니다.",
    intent:
      "팀원 모두 스토리 중심 게임을 좋아해서, VR에 알맞은 약 30분의 짧은 플레이 안에 탄탄한 세계관을 담은 단편 스토리 게임을 목표로 했습니다.\n\n" +
      "여러 아이디어 중 '물건을 고치며 이야기를 알아가는 수리 게임'과 '해수면 상승으로 고향을 잃은 사람들'을 합쳐, 고장 난 잠수함을 수리하며 항해를 이어 가는 이야기를 만들었습니다.",
    flow: [
      "스토리 1 — 항해 중 해상강도단의 공격을 받아 잠수함이 고장 납니다. 대화와 선택지로 세계관을 이해하고 조작법을 익힙니다.",
      "수리 파트 1 — 초소형 로봇이 되어 회로 퍼즐을 연결해 메인 엔진을 살립니다.",
      "스토리 2 — 새 부품을 구하러 보조 잠수함으로 떠났다가, 공격받아 침수 중인 해상도시 물보라의 정찰대를 만납니다.",
      "수리 파트 2 — 65초 안에 회로를 모두 연결하고, 차오르는 물을 피해 최상층에 도달합니다.",
      "스토리 3 — 정찰대를 도운 대가로 부품을 받고 메인 잠수함으로 돌아옵니다.",
      "수리 파트 3 — 더 어려워진 회로 퍼즐을 풀고, 밟으면 무너지는 유리 다리를 건너 메인 코어에 도착합니다.",
      "엔딩 — 수리를 마친 잠수함이 다시 항해를 시작합니다.",
    ],
    contributions: [
      "게임 기획 (세계관 · 시나리오 · 레벨 구성, 안지윤과 함께)",
      "프로그래밍 전체: 자막 시스템, 회로 퍼즐, 제한시간 · 물 차오름, 무너지는 다리, 사운드 · 옵션",
      "Timeline 컷신 24개 연출, 캐릭터 애니메이션(Mixamo 동작 30여 개 적용), VFX · 셰이더 그래프 50여 개",
    ],
    features: [
      {
        title: "음성 길이에 맞춰 흐르는 VR 자막",
        problem: "대사가 127문장이고 문장마다 음성 길이가 달라, 자막 타이밍을 하나하나 손으로 맞출 수 없었습니다. VR에서 자막이 머리를 휙휙 따라오면 멀미도 났습니다.",
        solution: "문장 · 음성 · 폰트 · 캐릭터 애니 트리거를 한 구조체로 묶어 인스펙터에서 편집하게 했습니다. 자막은 한 글자씩 타이핑되고, 음성이 끝날 때까지 기다렸다가 다음 문장으로 넘어갑니다. 자막 패널은 SmoothDamp로 시선을 천천히 따라옵니다.",
        result: "대사를 코드 수정 없이 고칠 수 있었고, 화자(강소희 · 꿀비 · 시스템 · 정찰대)마다 서체를 달리해 누가 말하는지 바로 알 수 있습니다.",
        media: "assets/images/sailors/subtitle.jpg",
      },
      {
        title: "회로 블록 88개의 회전 퍼즐",
        points: [
          "컨트롤러 트리거로 블록을 90° 돌립니다. 회전 중에는 콜라이더를 꺼서 연타로 어긋나는 걸 막고, 살짝 줄었다 커지는 연출과 효과음을 넣었습니다.",
          "매 프레임 블록 각도를 검사해 모두 맞으면 회로에 불이 들어옵니다. 직선 블록은 180° 돌려도 같은 모양이라 0°와 180° 모두 정답으로 처리했습니다.",
          "1 → 2 → 3단계로 갈수록 바닥과 벽면 퍼즐이 섞이고 기믹이 늘어납니다.",
        ],
        media: "assets/images/sailors/puzzle1.jpg",
      },
      {
        title: "65초, 차오르는 물",
        problem: "제한시간의 압박감을 주고 싶었지만, VR에서 물이 시야를 덮으면 불쾌감이 컸습니다.",
        solution: "타이머는 60초 · 30초에 경고음을 울리고, 물은 플레이어와 1m 이내로 가까워지면 거리에 비례해 느려집니다. 퍼즐을 풀 때마다 발판이 올라가 위로 도망칠 수 있습니다.",
        result: "시야를 덮지 않으면서도 긴장감은 유지됐고, 실패하면 7초 뒤 페이드와 함께 다시 시작합니다.",
        media: "assets/images/sailors/puzzle2-top.jpg",
      },
      {
        title: "밟는 순간에만 물리가 켜지는 유리 다리",
        points: [
          "다리 셀 15개는 통짜 콜라이더와 자식 파편으로 돼 있습니다. 밟는 순간에만 파편마다 Rigidbody를 붙여 흩어지게 하고, 5초 뒤 제거하고 원래 자리로 되돌립니다. 파편에 물리를 상시 두면 비용이 크고 떨려서 택한 방식입니다.",
          "떨어지면 체크포인트 발판으로 돌아옵니다. 순간이동 멀미를 줄이려 페이드 아웃 → 이동 → 페이드 인으로 처리했습니다.",
        ],
        media: "assets/images/sailors/final-core.jpg",
      },
      {
        title: "Timeline Signal로 엮은 24개 컷신",
        points: [
          "대사, 캐릭터 동작, 오브젝트 켜고 끄기, 순간이동, 스카이박스 교체, 진동이 얽힌 장면을 코드로 쓰면 수정할 때마다 깨졌습니다.",
          "Timeline의 Signal Emitter가 BGM 페이드 · 텔레포트 · 스카이박스 교체 · 햅틱 함수를 호출하게 해, 연출을 데이터로 관리했습니다. 튜토리얼은 타임라인 하나를 구간별로 점프해 재생합니다.",
        ],
        media: "assets/images/sailors/dialogue.jpg",
      },
      {
        title: "사운드 · 옵션",
        points: [
          "싱글톤 SoundManager가 Audio Mixer의 Master · BGM · SFX · Voice를 따로 조절하고, 슬라이더 값(0–1)을 Log10 × 20으로 데시벨로 바꿔 넘깁니다.",
          "옵션 창은 버튼을 누르면 시선 앞 2m에 한 번만 배치되고, 컨트롤러가 다시 연결되면 입력을 다시 묶습니다. 경보등은 사이렌 소리의 진폭을 읽어 깜빡입니다.",
        ],
        media: "assets/images/sailors/sound-ui.jpg",
        code: {
          lang: "csharp",
          content: `public void SetBGMVolume(float volume)
{
    // 0–1 슬라이더 값을 데시벨로 변환
    audioMixer.SetFloat("BGM", Mathf.Log10(volume) * 20);
}`,
        },
      },
    ],
    gallery: [
      { src: "assets/images/sailors/hero.jpg", caption: "해상도시가 보이는 바다" },
      { src: "assets/images/sailors/submarine.jpg", caption: "메인 잠수함 — 파트너 강소희와 AI 로봇 꿀비" },
      { src: "assets/images/sailors/dialogue.jpg", caption: "대화 선택지" },
      { src: "assets/images/sailors/sub-submarine.jpg", caption: "보조 잠수함" },
      { src: "assets/images/sailors/puzzle1.jpg", caption: "수리 파트 1 — 회로 퍼즐" },
      { src: "assets/images/sailors/puzzle2-top.jpg", caption: "수리 파트 2 — 위에서 본 퍼즐" },
      { src: "assets/images/sailors/puzzle3-wall.jpg", caption: "수리 파트 3 — 바닥과 벽을 활용한 퍼즐" },
      { src: "assets/images/sailors/final-core.jpg", caption: "메인 코어" },
      { src: "assets/images/sailors/instruction.jpg", caption: "체험 조작 안내서" },
    ],
    results: [
      "2024 졸업전시 출품 (팀 졸업작품)",
      "전시 현장 체험 시간 약 20분, 체험 안내서 비치",
    ],
    links: [
      { label: "소개 영상", url: "https://youtu.be/ndaVkLro6GU" },
      { label: "전체 기획서 (PDF)", url: "https://drive.google.com/file/d/1h0AyuzHmlfkqEDzSktF-e0lrkugS7AUM/view" },
    ],
  },

  {
    id: "bulssi",
    title: "불씨",
    year: 2023,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "ember", accent: "#ffa800", bg: "#0a0a0a", text: "#f0eee9", font: "elegant", tagline: "당신은 이 불씨를 어떻게 전하시겠습니까?", hero: "assets/images/bulssi/hero.jpg" },
    award: "",
    summary: "유관순 열사와 함께 3.1 만세운동을 직접 겪어 보는 핸드 트래킹 VR 역사 콘텐츠",
    roles: ["개발"],
    tags: ["Unity", "VR", "Hand Tracking", "Education"],
    cover: "assets/images/bulssi/hero.jpg",
    youtube: "",
    meta: { period: "2023.03 – 2023.06", team: "5인 · 기획 1 · 디자인 4 · 개발 1 · 사운드 1 (겸임)", tools: "Unity URP · OpenXR Hand Tracking · XR Hands · XR Interaction Toolkit 2.4 · Timeline · Splines · VFX Graph", platform: "Meta Quest 2" },
    overview:
      "1919년, 유관순 열사를 중심으로 3.1 만세운동의 과정을 VR로 체험하는 역사 콘텐츠입니다. 플레이어는 유예도가 되어 유관순과 함께 만세운동을 준비하고 참여합니다.\n\n" +
      "인물들의 대사로 상황을 이해하는 '보는 파트'와, 손으로 직접 상호작용하는 '하는 파트'를 번갈아 진행합니다. 컨트롤러 없이 손만으로 플레이합니다.",
    intent:
      "초등학교 고학년 40명에게 설문을 해 보니, 많은 학생이 국경일을 '쉬는 날'로만 알고 있었고 태극기의 건곤감리를 헷갈려 했습니다.\n\n" +
      "그래서 역사를 궁금해하는 초등~중등 학생이 3.1 만세운동을 쉽고 실감 나게 배울 수 있는 VR 콘텐츠를 기획했습니다. 제목인 '불씨'는 독립을 바라는 의지와 희망을 뜻합니다. 사람들이 만세운동에 함께하겠다고 마음먹을 때마다 불씨가 모이고, 마지막에는 태극기의 모습이 됩니다.",
    flow: [
      "오프닝 — 일제강점기, 만세운동이 시작된 상황을 듣습니다.",
      "유관순의 집 — 유관순이 가족에게 서울의 만세 시위를 전하고 함께하자고 말합니다.",
      "매봉 교회 — 유관순의 연설을 듣고, 함께하겠다는 마음을 '불씨'로 모아 보냅니다.",
      "유관순의 집 — 태극기의 순서와 문양의 뜻을 배우고 붓으로 직접 그립니다.",
      "아우내 장터 — 일본군을 피해 사람들에게 태극기를 나눠 줍니다.",
      "아우내 장터 — 유관순의 독립 선언 연설 뒤, 함께 만세를 외치며 행진합니다.",
      "엔딩 — 만세운동 이후의 이야기를 전하고 묻습니다. \"당신은 이 불씨를 어떻게 전하시겠습니까?\"",
    ],
    contributions: [
      "VR 상호작용과 진행 로직 전체 프로그래밍 (5인 중 개발 1인)",
      "컨트롤러 → 핸드 트래킹 전환, 이동 입력 제거와 장면별 위치 고정",
      "장면 진행 · 군중 애니메이션 연출, 유저 테스트 이후 기능 개선",
    ],
    features: [
      {
        title: "디자이너가 조립하는 장면 흐름",
        problem: "5명 중 프로그래머는 혼자였고, 장면 7개의 연출은 디자이너들이 계속 바꿔야 했습니다.",
        solution: "태그 하나에 반응하는 공용 TriggerZone(UnityEvent)과, 긴 Timeline을 구간 시각으로 쪼개 재생 지점을 점프하는 PlaySteps를 만들었습니다. 무엇이 닿으면 무엇이 켜지고 어느 구간을 재생할지는 전부 인스펙터에서 정합니다.",
        result: "코드 수정 없이 팀원들이 장면 흐름을 조립하고 바꿀 수 있었습니다.",
        media: "",
      },
      {
        title: "마음의 불씨 보내기",
        points: [
          "불씨는 양손으로 잡을 수 있게 하고(Select Mode: Multiple), 머리 위 높이에 트리거 존을 두어 두 손으로 받쳐 들어 올리면 유관순에게 날아갑니다.",
          "손에는 Rigidbody를 속도로 추적하는 물리 손 콜라이더를 붙여, 손이 물체를 뚫지 않고 실제로 밀 수 있게 했습니다. 바닥에 떨어진 불씨는 자동으로 제자리로 돌아옵니다.",
        ],
        media: "assets/images/bulssi/ember-hands.jpg",
      },
      {
        title: "태극기 그리기 순차 판정",
        problem: "태극기를 자유롭게 그리게 하면 순서를 배우지 못하고, 물감 칠을 정확히 판정하기도 어려웠습니다.",
        solution: "붓이 물감 접시에 닿으면 '붓의 태그 = 지금 묻은 색'으로 바꾸고, 각 영역 콜라이더는 맞는 색이 0.5~1초 머물면 완성으로 판정합니다. 빨강 → 파랑 → 건 → 곤 → 감 → 리 순서를 지키지 않으면 다음 단계가 열리지 않습니다.",
        result: "테스트 뒤 학생들이 '이제 태극기 문양을 구분하고 직접 그릴 수 있다'고 답했습니다. 자유 드로잉 버전도 만들었지만 판정형으로 바꿨습니다.",
        media: "assets/images/bulssi/flag-drawing.jpg",
      },
      {
        title: "태극기 나눠주기",
        points: [
          "시민들은 Unity Splines를 따라 걸어오고, 경로의 트리거 존을 지나며 걷기 · 멈춤 애니메이션이 바뀝니다. 태극기가 닿으면 받는 동작으로 바뀌고 효과음과 파티클이 납니다.",
          "일본군에게 태극기가 닿으면 3초 뒤 장면이 처음부터 다시 시작됩니다. 세 사람에게 모두 전해야 다음 장면으로 넘어갑니다.",
        ],
        media: "assets/images/bulssi/market.jpg",
      },
      {
        title: "만세 동작 판정",
        points: [
          "손에 고정된 태극기가 머리 위 트리거 존을 통과하면 만세로 판정하고, Timeline의 다음 구간을 재생합니다. 네 번 만세를 외치는 동안 군중 50여 명의 행렬과 유관순의 연설이 고조됩니다.",
          "마지막 만세에서 이동 입력을 끄고 행진 연출에 집중하게 했습니다.",
        ],
        media: "assets/images/bulssi/manse.jpg",
      },
      {
        title: "유저 테스트로 바꾼 것",
        problem: "초등학교 5학년 40명 테스트에서 '컨트롤러 조작이 어렵다', '설명창을 이해하기 어렵다', '움직일 때 무섭고 어지럽다'는 반응이 나왔습니다.",
        solution: "OpenXR 핸드 트래킹과 XR Hands로 컨트롤러 없이 손동작만으로 플레이하게 바꾸고, 설명창에 색 구분과 소리를 더했습니다. 어려운 단어는 쉬운 말로 줄이고, 이동 · 회전 입력을 모두 끄고 장면마다 위치를 고정했습니다.",
        result: "테스트 뒤 학생들이 만세운동의 과정과 불씨의 의미를 자기 말로 설명했고, 기획 목표와 맞는 반응을 확인했습니다.",
        media: "",
      },
    ],
    gallery: [
      { src: "assets/images/bulssi/home.jpg", caption: "유관순의 집 — 가족에게 만세운동을 전하는 장면" },
      { src: "assets/images/bulssi/church.jpg", caption: "매봉 교회" },
      { src: "assets/images/bulssi/flag-drawing.jpg", caption: "태극기 그리기" },
      { src: "assets/images/bulssi/crowd-embers.jpg", caption: "만세운동에 함께하겠다는 사람들의 불씨" },
      { src: "assets/images/bulssi/hero.jpg", caption: "아우내 장터 만세 행렬" },
      { src: "assets/images/bulssi/ending.jpg", caption: "엔딩 — 만세운동 이후의 이야기" },
      { src: "assets/images/bulssi/question.jpg", caption: "마지막 질문" },
    ],
    results: [
      "유관순 연구소 자문으로 사실 확인과 연출 방향을 다듬음",
      "천안 안서초등학교 5학년 40명 대상 유저 테스트 진행",
      "1920년대를 흑백 머티리얼과 커스텀 툰 · 아웃라인 셰이더로 표현하고, 불씨의 노랑과 태극기만 채색",
    ],
    links: [
      { label: "기획서 (PDF)", url: "https://drive.google.com/file/d/1uBw1Lr_TW_85tPah7fE2C71qmdCKrImD/view" },
      { label: "플레이 영상", url: "" },
    ],
  },

  {
    id: "nostalgia",
    title: "Nostalgia",
    year: 2024,
    category: "xr",
    featured: true,
    detail: true,
    theme: { art: "deep-sea", accent: "#8cc8ff", bg: "#04070f", text: "#e9f1ff", font: "batang", tagline: "", hero: "assets/images/nostalgia/hero.jpg" },
    award: "",
    summary: "물에 잠긴 2070년의 고향에서 가라앉기 전의 기억을 손으로 되짚는 VR 인터랙티브 영상 (개인 졸업작품)",
    standalone: true, // 지원서에 링크한 페이지: 다른 페이지로 가는 링크 없음
    roles: ["제작"],
    tags: ["Unity", "VR", "Point Cloud", "Media Art"],
    cover: "assets/images/nostalgia/cover.jpg",
    videos: [{ title: "플레이 영상 (1분 26초)", youtube: "https://youtu.be/qZYtfb5D228" }],
    labels: { features: "Notes · 작업 노트", credits: "Credits · 제작" },
    meta: { period: "2024.05 – 2024.09 · 졸업전시 2024", tools: "Unity HDRP · VFX Graph · Timeline", platform: "Meta Quest (PC VR) · 1인 약 8분" },
    overview:
      "미래 2070년, 해수면 상승으로 침몰한 고향에서 과거를 회상하는 VR 인터랙티브 영상입니다. 약 8분 동안 튜토리얼 → 오프닝 → 회상 → 엔딩으로 이어집니다.\n\n" +
      "물에 반쯤 잠긴 고향을 걸으며 고향과 관련된 오브젝트에 손을 대면, 가라앉기 전의 기억이 빛과 입자로 떠오릅니다.",
    intent:
      "VR은 관람자가 그 공간에 실제로 있는 것 같은 경험을 줄 수 있습니다. 이 현존감으로 몰입을 끝까지 끌어올리고, 시간과 장소에 구애받지 않고 볼 수 있는 미디어아트 전시를 만들고 싶었습니다.\n\n" +
      "그래서 보기만 하는 영상이 아니라, 소리와 진동, 손의 움직임에 반응하는 VR 인터랙티브 영상으로 기획했습니다.",
    flow: [
      "튜토리얼 — 원 중앙에 서서 구를 가볍게 건드리면 파문과 함께 시작됩니다.",
      "오프닝 — 점으로 흩어진 도시 위로 새가 날아갑니다.",
      "물에 반쯤 가라앉은 고향에 도착해, 고향과 관련된 오브젝트에 손을 대며 회상을 시작합니다.",
      "놀이터, 벤치, 자전거 — 가라앉기 전의 기억들이 빛의 점으로 떠오르고 손에 반응합니다.",
      "엔딩 — 빛기둥과 새를 따라 밤이 된 고향에 도착합니다.",
    ],
    features: [
      {
        title: "실제 장소가 기억처럼 흩어집니다",
        points: [
          "놀이터, 벤치, 나무 같은 실제 장소를 스캔해 장소마다 10만~30만 개의 점으로 바꿨습니다. 형태와 색은 남아 있지만 손이 닿으면 흩어집니다.",
          "실사 그대로가 아니라 만지면 사라지는 재료로 만들어, '기억'이라는 감각을 재료 자체로 표현하려 했습니다.",
        ],
        media: "assets/images/nostalgia/vfx-process.jpg",
      },
      {
        title: "손에 반응하는 빛",
        points: [
          "양손 주변의 점은 밀려나고, 새와 빛은 손 쪽으로 끌려옵니다. 관객이 손을 내미는 순간 공간이 먼저 반응하게 했습니다.",
        ],
        media: "assets/images/nostalgia/hand-particles.jpg",
      },
      {
        title: "소리와 진동이 이끄는 시선",
        points: [
          "효과음 19개를 공간 곳곳에 두고, 발소리와 길이 생기는 소리는 길을 따라 움직여 소리가 가는 쪽으로 고개를 돌리게 했습니다.",
          "컨트롤러 진동을 연출의 호흡에 맞춰 이어지게 배치하고, 배경음악의 세기에 따라 빛의 크기가 달라지게 했습니다.",
        ],
        media: "assets/images/nostalgia/light-pillar.jpg",
      },
    ],
    gallery: [
      { src: "assets/images/nostalgia/flooded-home.jpg", caption: "물에 반쯤 잠긴 고향" },
      { src: "assets/images/nostalgia/light-pillar.jpg", caption: "빛기둥" },
      { src: "assets/images/nostalgia/hero.jpg", caption: "기억이 떠오르는 거리" },
      { src: "assets/images/nostalgia/memory-figure.jpg", caption: "회상 장면" },
      { src: "assets/images/nostalgia/hand-particles.jpg", caption: "손에 반응하는 입자" },
      { src: "assets/images/nostalgia/title.jpg", caption: "시작 화면" },
      { src: "assets/images/nostalgia/exhibition.jpg", caption: "졸업전시 — 디자인갤러리 부스" },
    ],
    results: [
      "2024 상명대학교 AR·VR미디어디자인전공 졸업전시 출품 — 디자인갤러리 (개인 졸업작품)",
      "게임이 아닌 '관객이 머무는 미디어아트'로 VR을 다룬 첫 작업",
    ],
    links: [],
  },

  // ── 전시 · 클라이언트 작업 ─────────────────────
  {
    id: "yeonginsan",
    title: "영인산산림박물관 힐링 영상 · 미니게임",
    year: 2025,
    category: "client",
    featured: false,
    hidden: true, // 홈 하단 Archive에만 표시. 자료가 생기면 featured: true로 올리세요
    detail: true,
    award: "",
    summary: "영인산산림박물관에서 상영되는 힐링 테마 영상과 미니게임",
    roles: ["영상", "개발"],
    tags: ["Museum", "Video", "Mini Game"],
    cover: "",
    youtube: "",
    meta: { client: "(주)요요인터렉티브 · 인턴", venue: "영인산산림박물관", period: "2025.01 – 2025.04", team: "", tools: "", platform: "" },
    overview: "",
    intent: "",
    flow: [],
    contributions: ["힐링 테마 상영 영상 제작", "미니게임 로직 개발"],
    features: [],
    gallery: [],
    results: [],
    links: [],
  },

  {
    id: "roasting-dreams",
    title: "로스팅 드림즈 AR 포스터",
    year: 2024,
    category: "client",
    featured: false,
    hidden: true, // 홈 하단 Archive에만 표시. 자료가 생기면 featured: true로 올리세요
    detail: true,
    award: "",
    summary: "강릉아트센터 공연 <로스팅 드림즈>의 AR 포스터",
    roles: ["개발", "홍보"],
    tags: ["AR", "Poster"],
    cover: "",
    youtube: "",
    meta: { venue: "강릉아트센터", period: "2024.10 – 2024.11", team: "", tools: "", platform: "" },
    overview: "",
    intent: "",
    flow: [],
    contributions: ["AR 포스터 제작", "홍보대사 활동"],
    features: [],
    gallery: [],
    results: [],
    links: [],
  },

  {
    id: "kculture-expo",
    title: "제1회 K컬쳐 박람회 미디어아트 전시",
    year: 2023,
    category: "client",
    featured: false,
    hidden: true, // 홈 하단 Archive에만 표시. 자료가 생기면 featured: true로 올리세요
    detail: true,
    award: "",
    summary: "충남원 대학생 서포터즈로 참여한 K컬쳐 박람회 미디어아트 전시와 영상",
    roles: ["운영", "영상"],
    tags: ["Media Art", "Exhibition", "Video"],
    cover: "",
    youtube: "",
    meta: { client: "충남원 대학생 서포터즈", venue: "제1회 K컬쳐 박람회", period: "2023.04 – 2023.07", team: "", tools: "", platform: "" },
    overview: "",
    intent: "",
    flow: [],
    contributions: ["미디어아트 전시 진행", "관련 영상 제작"],
    features: [],
    gallery: [],
    results: [],
    links: [],
  },

  {
    id: "msc-vr",
    title: "MSC 구조 구명 VR",
    year: 2023,
    category: "client",
    featured: false,
    hidden: true, // 홈 하단 Archive에만 표시. 자료가 생기면 featured: true로 올리세요
    detail: true,
    award: "",
    summary: "(재)의약바이오컨버젼스연구단의 MSC 구조 구명을 위한 VR 프로젝트",
    roles: ["개발"],
    tags: ["Unity", "VR", "Research"],
    cover: "",
    youtube: "",
    meta: { client: "(재)의약바이오컨버젼스연구단", period: "2023.06 – 2023.08", team: "", tools: "Unity", platform: "" },
    overview: "",
    intent: "",
    flow: [],
    contributions: ["VR 프로젝트 개발"],
    features: [],
    gallery: [],
    results: [],
    links: [],
  },

  // ── 아카이브 — 홈 하단 목록에만 표시. youtube나 links가 있으면 그 링크로 열립니다.
  { id: "summer-forest", title: "한 여름의 숲 속", year: 2025, category: "xr", featured: false, hidden: true, detail: false, tags: [] },
  { id: "ars", title: "ARS 조합", year: 2023, category: "xr", featured: false, hidden: true, detail: false, tags: [] },
  { id: "yut", title: "모두의 윷놀이", year: 2023, category: "xr", featured: false, hidden: true, detail: false, tags: [], youtube: "https://youtu.be/hco1Ki1dSUw" },
];
