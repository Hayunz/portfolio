> **새 포트폴리오 사이트 작업용 저장소.** 제출용 사이트(https://hayunz.github.io , 저장소 `hayunz.github.io`, 태그 `submitted-2026-10-24`)는 심의가 끝날 때까지 동결합니다. 여기서는 그 데이터·이미지만 출발점으로 가져와 구조를 새로 짭니다. 미리보기: https://hayunz.github.io/portfolio/

# 김하윤 포트폴리오 사이트

빌드 도구 없이 HTML · CSS · JS만으로 만든 정적 사이트입니다. `index.html`을 더블클릭하면 바로 열립니다.

## 구조

```
index.html          홈 (소개 · 대표 수상 · 프로젝트 카드)
project.html        프로젝트 상세 템플릿 — project.html?id=sailors 처럼 열림
about.html          이력 (수상 · 경력 · 학력 · 스킬)
data/profile.js     이름, 한 줄 소개, 연락처, 이력  ← 글 수정은 여기
data/projects.js    프로젝트 내용                   ← 글 수정은 여기
assets/css/style.css
assets/js/app.js    데이터를 읽어 화면을 그리는 코드 (평소엔 안 건드려도 됨)
assets/images/<프로젝트id>/   썸네일, GIF, 스크린샷
assets/files/       이력서 PDF 등
```

## 내용 채우기

- 글은 전부 `data/` 두 파일에서만 고칩니다. HTML은 건드릴 필요 없어요.
- 빈 칸(`""`, `[]`)은 실제 배포된 사이트에서 자동으로 숨겨집니다. 로컬에서 열면 점선 박스로 "여기에 무엇을 넣으면 되는지" 보여줍니다.
- 새 프로젝트는 `data/projects.js` 맨 위 TEMPLATE을 복사해서 추가하세요.

### 방향

"코드를 잘 짜는 개발자"보다 **"기획부터 완성까지 해내는 XR 콘텐츠 메이커"**로 보이게 구성했어요. 전시 회사와 미래 클라이언트가 보는 건 완성작, 기획력, 현장 경험이에요.

- 작업은 `category`로 두 갈래로 나눕니다: `"xr"` (XR 콘텐츠) / `"client"` (전시 · 클라이언트 작업). 홈에서 탭으로 걸러 볼 수 있어요.
- `roles`에 맡은 분야(기획 / 개발 / 영상 / 운영…)를 적으면 카드와 상세에 보라색 칩으로 보여요.

### 프로젝트별 테마

상세 페이지는 영화 사이트처럼 프로젝트마다 분위기가 달라요. `theme`에서 정합니다.

- `hero`: **키 아트** (가로 1920px 이미지 또는 짧은 루프 mp4). 히어로 전체 배경이 돼요. 이게 가장 중요해요.
- `art`: 키 아트가 없을 때 나오는 임시 배경 — `deep-sea` / `space` / `ember` / `dream` / `dusk` / `aurora`
- `accent`, `bg`, `text`: 제목 색, 배경색, 글자색. 키 아트에서 색을 뽑아 맞추면 자연스러워요.
- `font`: 제목 서체 — `cinematic`(굵은 영화 포스터) / `elegant`(명조) / `tech`(모던 고딕) / `round`(둥근 서체)
- `tagline`: 히어로에 크게 들어갈 한 줄. 비우면 `summary`를 씁니다.

### 프로젝트 상세를 잘 쓰는 법

한 프로젝트에 30초 정도 쓴다고 생각하고, 상세 페이지는 이 순서로 보입니다:

1. **youtube / cover** — 1–2분 체험 영상. 가장 먼저 보입니다.
2. **overview** 소개 — 어떤 콘텐츠인지 2–3문장.
3. **intent** 기획 의도 — 누구에게 어떤 경험을 주려 했나.
4. **flow** 체험 흐름 — 관객이 처음부터 끝까지 하는 일, 단계별로.
5. **roles · contributions** 내가 맡은 것 — 팀 작업일수록 구체적으로.
6. **features** 구현 하이라이트 — 1–2개면 충분해요. `problem → solution → result` + 동작 영상. 코드는 선택이고 접힌 상태로 보입니다.
7. **gallery** 현장 · 과정 — **헤드셋을 쓰고 체험하는 사람 사진**이 가장 강력해요. 기획서, 스케치, 스토리보드도 여기에.
8. **results** 결과 — 수상, 전시 장소와 기간, 관람객 수, 반응.

### 미디어 팁

- 썸네일: 16:9, 가로 1280px 정도 JPG/WebP
- 동작 GIF는 용량이 커서 **mp4로 저장**하는 걸 추천해요 (자동재생·반복으로 GIF처럼 보입니다). 5–10초, 5MB 이하.

## 미리보기

`index.html` 더블클릭. 또는 이 폴더에서:

```bash
python -m http.server 8000
```

→ http://localhost:8000

## 배포 (GitHub Pages, 무료)

1. GitHub에서 새 저장소 생성 (예: `portfolio`, 또는 `아이디.github.io`로 만들면 주소가 짧아짐)
2. 이 폴더 전체를 올리기
3. 저장소 Settings → Pages → Branch: `main` / `/ (root)` → Save
4. 1–2분 뒤 `https://아이디.github.io/portfolio/` 에서 열림
