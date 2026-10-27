// data/profile.js, data/projects.js 를 읽어서 각 페이지를 그립니다.
// 페이지 종류는 <body data-page="home|project|about"> 로 구분합니다.
(function () {
  const P = window.PROFILE;
  const ALL_PROJECTS = window.PROJECTS || [];
  const PROJECTS = ALL_PROJECTS.filter((p) => !p.hidden); // hidden: true 는 목록과 이전/다음에서 빠짐

  // 로컬(파일로 열기 / localhost)에서만 빈 칸 안내 박스를 보여 줌
  const DEV = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const has = (v) => (Array.isArray(v) ? v.length > 0 : !!v);
  const hint = (text, inline) => (DEV ? `<div class="ph${inline ? " inline" : ""}">✎ ${esc(text)}</div>` : "");
  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;

  function media(src, alt) {
    if (/\.(mp4|webm)$/i.test(src)) return `<video src="${esc(src)}" autoplay muted loop playsinline></video>`;
    return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
  }

  function youtubeId(v) {
    const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : v;
  }

  function paragraphs(text) {
    return text.split(/\n\s*\n/).map((t) => `<p>${esc(t.trim())}</p>`).join("");
  }

  // ── 공통 헤더 / 푸터 ─────────────────────────
  // standalone: 다른 페이지로 넘어가는 링크 없이 이 페이지만 보이게 (지원서 등에 링크한 상세 페이지용)
  function chrome(active, opts = {}) {
    if (opts.standalone) document.body.classList.add("standalone");
    document.body.insertAdjacentHTML(
      "afterbegin",
      opts.standalone
        ? `<header class="site-header"><div class="container">
        <span class="logo">${esc(P.nameEn)}</span>
        <nav class="nav"><a href="mailto:${esc(P.email)}">Contact</a></nav>
      </div></header>`
        : `<header class="site-header"><div class="container">
        <a class="logo" href="index.html">${esc(P.nameEn)}</a>
        <nav class="nav">
          <a href="index.html#work" class="${active === "work" ? "active" : ""}">Work</a>
          <a href="about.html" class="${active === "about" ? "active" : ""}">About</a>
          <a href="mailto:${esc(P.email)}">Contact</a>
        </nav>
      </div></header>`
    );
    const links = [`<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`];
    if (P.github) links.push(`<a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub</a>`);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<footer class="site-footer"><div class="container">
        <span>© ${new Date().getFullYear()} ${esc(P.nameKo)} ${esc(P.nameEn)}</span>
        <span style="display:flex;gap:20px">${links.join("")}</span>
      </div></footer>`
    );
  }

  // ── 공통 조각 ─────────────────────────────────
  const CATEGORIES = { xr: "XR 콘텐츠", client: "전시 · 클라이언트" };

  function cover(p) {
    return p.cover ? media(p.cover, p.title) : `<div class="cover-fallback"><span>${esc(p.title)}</span></div>`;
  }

  function chips(p) {
    const roles = (p.roles || []).map((t) => `<span class="tag role">${esc(t)}</span>`);
    const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`);
    return roles.length || tags.length ? `<div class="tags">${roles.join("")}${tags.join("")}</div>` : "";
  }

  // "3인 (팀 X) · 개발 1 · …" 에서 인원 수만 뽑아 "3인 팀 · 개발" 처럼 짧게
  function teamLine(p) {
    const team = p.meta && p.meta.team ? p.meta.team : "";
    const n = (team.match(/^(\d+인|개인)/) || [])[1];
    const who = n === "개인" || /개인/.test(team) ? "개인 작업" : n ? `${n} 팀` : "";
    const role = (p.roles || []).join(" · ");
    // 기간은 시작일이 있는 것만, 괄호 설명은 뺌
    let period = p.meta && p.meta.period ? p.meta.period.replace(/\s*\(.*?\)\s*/g, "").trim() : "";
    if (!/^\d/.test(period)) period = "";
    const parts = [who, role, period].filter(Boolean);
    return parts.length ? `<p class="team-line">${parts.map(esc).join(" · ")}</p>` : "";
  }

  // 2023–2026 타임라인: 작품마다 제작 기간을 막대로. 시작일이 없는 작품은 완료 시점만 점으로
  function projectTimeline() {
    const items = PROJECTS.filter((p) => p.featured && p.meta && p.meta.period);
    const parse = (s) => { const m = s.match(/(\d{4})\.(\d{2})/g) || []; return m.map((t) => { const [y, mo] = t.split("."); return (+y - 2023) * 12 + (+mo - 1); }); };
    const SPAN = 48; // 2023.01 – 2026.12
    const rows = items.map((p) => {
      const d = parse(p.meta.period);
      const start = /^\d/.test(p.meta.period.trim()) ? d[0] : null;
      const end = d[d.length - 1];
      const left = ((start ?? end) / SPAN) * 100, width = start === null ? 0 : ((end - start + 1) / SPAN) * 100;
      const name = esc(p.title.split(/:\s*/)[0]);
      return `<div class="tl-row">
        ${p.detail ? `<a class="tl-name" href="${projectUrl(p)}">${name}</a>` : `<span class="tl-name">${name}</span>`}
        <div class="tl-track">${start === null ? `<i class="tl-dot" style="left:${left}%" title="완료 ${esc(p.meta.period)}"></i>` : `<i class="tl-bar" style="left:${left}%;width:${width}%"></i>`}</div>
      </div>`;
    });
    const years = [2023, 2024, 2025, 2026].map((y) => `<span>${y}</span>`).join("");
    return `<div class="tl"><div class="tl-row tl-head"><span></span><div class="tl-years">${years}</div></div>${rows.join("")}</div>`;
  }

  function capabilities() {
    if (!has(P.capabilities)) return "";
    return `<div class="caps">${P.capabilities
      .map((c, i) => `<div class="cap"><span class="num">0${i + 1}</span><h3>${esc(c.title)}</h3>
        <p>${esc(c.detail)}</p></div>`)
      .join("")}</div>`;
  }

  // ── 홈 ────────────────────────────────────────
  function card(p) {
    const tag = p.detail ? "a" : "div";
    const href = p.detail ? ` href="${projectUrl(p)}"` : "";
    const ap = p.award ? awardParts(p.award) : null;
    const awardShort = ap ? (ap.honor ? `${ap.rank} · ${ap.honor}` : `${ap.event} ${ap.rank}`.trim()) : "";
    return `<${tag} class="card" data-cat="${esc(p.category)}"${href}>
      <div class="thumb">${cover(p)}</div>
      <div class="body">
        <div class="top"><span>${esc(CATEGORIES[p.category] || "")} · ${p.year}</span>${awardShort ? `<span class="badge">${esc(awardShort)}</span>` : ""}</div>
        <h3>${esc(p.title)}</h3>
        ${teamLine(p)}
        ${p.summary ? `<p>${esc(p.summary)}</p>` : hint("summary: 한 줄 소개", true)}
        ${chips(p)}
      </div>
    </${tag}>`;
  }

  function filters(featured) {
    const count = (c) => featured.filter((p) => !c || p.category === c).length;
    const btn = (key, label) =>
      `<button type="button" class="filter${key === "" ? " active" : ""}" data-filter="${key}" aria-pressed="${key === ""}">${label}<span>${count(key)}</span></button>`;
    const used = Object.entries(CATEGORIES).filter(([k]) => count(k) > 0);
    if (used.length < 2) return ""; // 분류가 하나뿐이면 탭이 의미 없으니 숨김
    return `<div class="filters" role="group" aria-label="작업 분류">${btn("", "전체")}${used.map(([k, label]) => btn(k, label)).join("")}</div>`;
  }

  function bindFilters() {
    const buttons = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll("#work .grid > .card");
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        const key = b.dataset.filter;
        document.querySelector("#work .grid").classList.toggle("filtered", !!key);
        buttons.forEach((x) => {
          x.classList.toggle("active", x === b);
          x.setAttribute("aria-pressed", x === b);
        });
        let n = 0;
        cards.forEach((c) => {
          const show = !key || c.dataset.cat === key;
          c.hidden = !show;
          if (!show) return;
          c.classList.remove("pop");
          void c.offsetWidth; // 애니메이션 다시 시작
          c.style.setProperty("--pd", `${Math.min(n++, 6) * 50}ms`);
          c.classList.add("pop");
        });
      })
    );
  }

  function home() {
    chrome("work");
    const featured = PROJECTS.filter((p) => p.featured);
    // 하단 아카이브: 메인 카드가 아닌 모든 작업(hidden 포함). 볼거리가 있는 것만 링크
    const archive = ALL_PROJECTS.filter((p) => !p.featured).sort((a, b) => b.year - a.year);
    const byId = (id) => PROJECTS.find((p) => p.id === id && p.detail);

    document.getElementById("app").innerHTML = `
      <section class="hero neon">
        <div class="neon-bg" aria-hidden="true"><i class="glow g1"></i><i class="glow g2"></i><i class="glow g3"></i><i class="grain"></i></div>
        <div class="container hero-in">
          <p class="eyebrow">${esc(P.nameKo)} — ${esc(P.nameEn)}</p>
          <h1 class="giant">XR Content Creator</h1>
          <p class="headline">${esc(P.headline)}</p>
        </div>
        <div class="container hero-foot">
          <div class="actions">
            <a class="btn primary" href="#work">작업 보기</a>
            <a class="btn" href="about.html">About</a>
            ${P.resumePdf ? `<a class="btn" href="${esc(P.resumePdf)}" target="_blank">이력서 PDF</a>` : ""}
          </div>
          <a class="scroll-cue" href="#work" aria-label="아래로 스크롤">Scroll</a>
        </div>
      </section>

      <section class="section" id="work"><div class="container">
        <div class="work-head">
          <h2 class="section-title">Selected Work</h2>
          ${filters(featured)}
        </div>
        <div class="grid">${featured.map(card).join("")}</div>
      </div></section>

      ${has(archive) ? `
      <section class="section archive" id="archive"><div class="container">
        <h2 class="section-title">Archive</h2>
        <div class="list">${archive
          .map((p) => {
            const rich = p.detail && (p.cover || has(p.features) || has(p.gallery) || p.youtube);
            const ext = p.youtube || (p.links || []).find((l) => l.url)?.url || "";
            const href = rich ? projectUrl(p) : ext;
            const tag = (p.tags && p.tags[0]) || CATEGORIES[p.category] || "";
            const kind = rich ? "→" : p.youtube ? "영상 ↗" : ext ? "문서 ↗" : "";
            const open = href ? `<a class="list-row" href="${esc(href)}"${rich ? "" : ' target="_blank" rel="noopener"'}>` : `<div class="list-row">`;
            return `${open}<strong>${esc(p.title)}</strong>
              <span>${esc(tag)}${tag ? " · " : ""}${p.year}${kind ? ` <i class="arrow">${kind}</i>` : ""}</span></${href ? "a" : "div"}>`;
          })
          .join("")}</div>
      </div></section>` : ""}
    `;
    bindFilters();
  }

  // ── 프로젝트 상세 ─────────────────────────────
  // 프로젝트마다 theme(색 · 서체 · 키 아트)이 달라서 영화 사이트처럼 각자 다른 분위기로 보입니다.
  // 순서: 히어로 → 소개 → 정보 → 영상 → 기획 의도 → 체험 흐름 → 장면 → 구현 하이라이트 → 크레딧 → 결과 → 링크 → 다음 작품
  const META_LABELS = { client: "클라이언트", venue: "장소", period: "기간", team: "인원", tools: "툴", platform: "플랫폼" };

  const FONT_PRESETS = {
    cinematic: { css: ["Anton", "Black+Han+Sans"], family: '"Anton", "Black Han Sans", sans-serif', upper: true },
    elegant: { css: ["Cormorant+Garamond:wght@600", "Nanum+Myeongjo:wght@800"], family: '"Cormorant Garamond", "Nanum Myeongjo", serif' },
    batang: { css: ["Gowun+Batang:wght@400;700"], family: '"Gowun Batang", serif' },
    tech: { css: ["Space+Grotesk:wght@700", "IBM+Plex+Sans+KR:wght@700"], family: '"Space Grotesk", "IBM Plex Sans KR", sans-serif' },
    round: { css: ["Fredoka:wght@600", "Jua"], family: '"Fredoka", "Jua", sans-serif' },
  };
  const DEFAULT_THEME = { art: "aurora", accent: "#9a8cff", bg: "#0b0b10", text: "#ececf1", font: "tech", tagline: "", hero: "" };
  const themeOf = (p) => ({ ...DEFAULT_THEME, ...(p.theme || {}) });
  const fontOf = (t) => FONT_PRESETS[t.font] || FONT_PRESETS.tech;

  const loadedFonts = new Set();
  function loadFonts(preset) {
    const key = preset.css.join("&");
    if (loadedFonts.has(key)) return;
    loadedFonts.add(key);
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = `https://fonts.googleapis.com/css2?${preset.css.map((f) => "family=" + f).join("&")}&display=swap`;
    document.head.appendChild(l);
  }

  // 키 아트가 있으면 그 이미지/영상, 없으면 CSS로 만든 임시 배경
  function artLayer(t) {
    if (t.hero && /\.(mp4|webm)$/i.test(t.hero)) return `<video class="t-art" src="${esc(t.hero)}" autoplay muted loop playsinline></video>`;
    if (t.hero) return `<div class="t-art" style="background-image:url('${esc(t.hero)}')"></div>`;
    return `<div class="t-art art-${esc(t.art)}"><span class="t-particles"></span></div>`;
  }

  // "2025 ○○ 경진대회 대상 · 부총리 겸 … 장관상" → { year, event, rank, honor }
  function awardParts(award) {
    const [head, ...rest] = award.split("·").map((s) => s.trim());
    const year = (head.match(/^\d{4}/) || [""])[0];
    const name = head.replace(/^\d{4}\s*/, "").trim();
    const rank = (name.match(/(대상|최우수상|우수상|장려상|금상|은상|동상)$/) || [""])[0];
    const event = rank ? name.slice(0, -rank.length).trim() : name;
    return { year, event, rank, honor: rest.join(" · ") };
  }

  // 수상 마크: 트로피 이모지 + 연도 · 등급, 아래에 장관상 이름과 대회명
  function laurel(award) {
    const { year, event, rank, honor } = awardParts(award);
    return `<figure class="t-laurel t-trophy">
      <span class="t-trophy-icon" aria-hidden="true">🏆</span>
      <span class="t-trophy-rank"><em>${esc(year)}</em>${esc(rank || "AWARD")}</span>
      <figcaption>${honor ? `<strong>${esc(honor)}</strong>` : ""}${esc(event)}</figcaption>
    </figure>`;
  }

  function feature(f) {
    const psr = [
      ["문제", f.problem],
      ["해결", f.solution],
      ["결과", f.result],
    ].filter(([, v]) => v);
    const mediaHtml = f.media ? `<div class="f-media">${media(f.media, f.title)}</div>` : hint(`media: ${f.title} 동작 GIF/mp4`);
    return `<div class="feature${mediaHtml ? "" : " no-media"}">
      <div>
        <h3>${esc(f.title)}</h3>
        ${has(psr) ? `<div class="psr">${psr.map(([k, v]) => `<div><b>${k}</b>${esc(v)}</div>`).join("")}</div>` : ""}
        ${has(f.points) ? `<ul class="bullets">${f.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${f.code && f.code.content ? `<details class="code"><summary>코드 보기</summary><pre><code>${esc(f.code.content)}</code></pre></details>` : ""}
        ${f.codeLink ? `<a class="code-link" href="${esc(f.codeLink)}" target="_blank" rel="noopener">전체 코드 보기 →</a>` : ""}
      </div>
      ${mediaHtml}
    </div>`;
  }

  function bindScenes() {
    const track = document.querySelector(".t-track");
    if (!track) return;
    const items = [...track.children];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("on", e.intersectionRatio > 0.6)),
      { root: track, threshold: [0, 0.6, 1] }
    );
    items.forEach((el) => io.observe(el));
    const step = (d) => track.scrollBy({ left: d * (items[0].getBoundingClientRect().width + 24), behavior: "smooth" });
    document.querySelector(".t-prev")?.addEventListener("click", () => step(-1));
    document.querySelector(".t-next-btn")?.addEventListener("click", () => step(1));
  }

  function project() {
    const app = document.getElementById("app");
    const id = new URLSearchParams(location.search).get("id");
    const list = PROJECTS.filter((p) => p.detail);
    const i = list.findIndex((p) => p.id === id);
    // 숨긴 프로젝트도 주소로 직접 열면 보이게 (미리보기용)
    const p = i >= 0 ? list[i] : ALL_PROJECTS.find((x) => x.id === id && x.detail);
    const standalone = !!(p && p.standalone);
    chrome("work", { standalone });

    if (!p) {
      app.innerHTML = `<div class="container p-hero"><a class="back" href="index.html#work">← 전체 작업</a>
        <h1 style="margin-top:32px">프로젝트를 찾을 수 없어요</h1></div>`;
      return;
    }
    document.title = `${p.title} | ${P.nameEn}`;

    // 테마 적용: 페이지 전체 색을 이 프로젝트 색으로
    const t = themeOf(p);
    const font = fontOf(t);
    loadFonts(font);
    const b = document.body.style;
    document.body.classList.add("themed");
    b.setProperty("--bg", t.bg);
    b.setProperty("--text", t.text);
    b.setProperty("--accent", t.accent);
    b.setProperty("--display", font.family);
    b.setProperty("--muted", `color-mix(in srgb, ${t.text} 62%, ${t.bg})`);
    b.setProperty("--surface", `color-mix(in srgb, ${t.text} 7%, ${t.bg})`);
    b.setProperty("--surface-2", `color-mix(in srgb, ${t.text} 12%, ${t.bg})`);
    b.setProperty("--line", `color-mix(in srgb, ${t.text} 16%, ${t.bg})`);
    b.setProperty("--accent-soft", `color-mix(in srgb, ${t.accent} 18%, transparent)`);

    const [mainTitle, subTitle] = p.title.split(/:\s*/);
    const quote = t.tagline || p.summary;
    const meta = Object.entries(META_LABELS)
      .filter(([k]) => p.meta && p.meta[k])
      .map(([k, label]) => `<div><dt>${label}</dt><dd>${esc(p.meta[k])}</dd></div>`)
      .join("");
    const links = (p.links || []).filter((l) => l.url);
    const emptyLinks = (p.links || []).filter((l) => !l.url).map((l) => l.label);
    const gallery = (p.gallery || []).filter((g) => g.src);
    // 영상: videos[{title, youtube}] 여러 개, 없으면 youtube 하나
    // videos[].youtube(유튜브 주소) 또는 videos[].src(사이트 안의 mp4 파일, poster 선택)
    const videos = has(p.videos) ? p.videos.filter((v) => v.youtube || v.src) : p.youtube ? [{ youtube: p.youtube, title: "" }] : [];
    const videoHtml = (v) =>
      v.src
        ? `<video controls playsinline preload="metadata"${v.poster ? ` poster="${esc(v.poster)}"` : ""}><source src="${esc(v.src)}" type="video/mp4"></video>`
        : `<iframe src="https://www.youtube.com/embed/${esc(youtubeId(v.youtube))}" title="${esc(v.title || p.title)}"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    // 섹션 제목을 프로젝트별로 바꿀 수 있게 (labels: { features: "작업 노트" })
    const L = Object.assign(
      { features: "Highlights · 구현 하이라이트", credits: "Credits · 내가 맡은 것", results: "Results · 결과" },
      p.labels || {}
    );

    const sec = (cls, label, body, hintText) =>
      body
        ? `<section class="t-sec ${cls}"><div class="container"><p class="t-label">${label}</p>${body}</div></section>`
        : DEV && hintText
        ? `<section class="t-sec ${cls}"><div class="container"><p class="t-label">${label}</p>${hint(hintText)}</div></section>`
        : "";

    const credits =
      has(p.roles) || has(p.contributions)
        ? `${has(p.roles) ? `<div class="t-roles"><div><span>${p.roles.map(esc).join(" · ")}</span><strong>${esc(P.nameKo)}</strong></div></div>` : ""}
           ${has(p.contributions) ? `<ul class="t-contrib">${p.contributions.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
           ${p.meta && p.meta.team ? `<p class="t-team">Team · ${esc(p.meta.team)}</p>` : ""}`
        : "";

    // 기여도: 업무별 비중. value가 비어 있으면 로컬에서만 '확인 필요'로 보임
    const shares = (p.share || []).filter((s) => s.value || DEV);
    const share = shares.length
      ? `<div class="t-share"><p class="t-share-title">기여도 · 업무별</p>${shares
          .map((s) => {
            const pct = parseInt(s.value, 10);
            return `<div class="t-share-row">
              <span>${esc(s.area)}</span>
              ${s.value ? `<i style="--w:${isNaN(pct) ? 0 : pct}%"></i><b>${esc(s.value)}</b>` : hint("확인 필요 — 비중(%)을 채워 주세요", true)}
              ${s.note ? `<small>${esc(s.note)}</small>` : ""}
            </div>`;
          })
          .join("")}</div>`
      : "";

    // 성과 숫자: 큰 숫자 + 무엇을 셌는지(측정 기준). n이 비어 있으면 로컬에서만 안내
    const nums = (p.numbers || []).filter((x) => x.n || DEV);
    const numbers = nums.length
      ? `<div class="t-numbers">${nums
          .map((x) => x.n
            ? `<div><strong>${esc(x.n)}</strong><span>${esc(x.label)}</span>${x.basis ? `<small>${esc(x.basis)}</small>` : ""}</div>`
            : `<div>${hint(`${x.label}: 숫자와 근거를 채워 주세요`, true)}</div>`)
          .join("")}</div>`
      : "";

    const awards = p.award ? [p.award] : [];
    const results = has(p.results) || awards.length || numbers
      ? `${numbers}
         ${awards.length ? `<div class="t-laurels-row">${awards.map(laurel).join("")}</div>` : ""}
         ${has(p.results) ? `<ul class="results">${p.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}`
      : "";

    const prev = i >= 0 && !standalone ? list[i - 1] : null;
    const next = i >= 0 && !standalone ? list[(i + 1) % list.length] : null;
    let nextHtml = "";
    if (next && next !== p) {
      const nt = themeOf(next);
      const nf = fontOf(nt);
      loadFonts(nf);
      nextHtml = `<a class="t-next" href="${projectUrl(next)}" style="--accent:${esc(nt.accent)};--bg:${esc(nt.bg)};--display:${esc(nf.family)}">
        ${artLayer(nt)}<div class="t-shade"></div>
        <div class="t-next-in"><p class="t-label">Next Project</p><h2 class="${nf.upper ? "t-upper" : ""}">${esc(next.title.split(/:\s*/)[0])}</h2><span class="t-go">→</span></div>
      </a>`;
    }

    app.innerHTML = `
      <article class="t-page">
        <header class="t-hero">
          ${artLayer(t)}
          <div class="t-shade"></div>
          <div class="container t-hero-in">
            ${standalone ? "" : `<a class="back" href="index.html#work">← 전체 작업</a>`}
            <p class="t-eyebrow">${esc(P.nameEn)} · ${p.year} · ${esc(CATEGORIES[p.category] || "")}</p>
            <h1 class="t-title${font.upper ? " t-upper" : ""}">${esc(mainTitle)}${subTitle ? `<small>${esc(subTitle)}</small>` : ""}</h1>
            <div class="t-hero-foot">
              ${quote ? `<blockquote class="t-quote">${esc(quote)}</blockquote>` : hint("theme.tagline 또는 summary: 히어로에 들어갈 한 줄", true)}
              ${p.award ? `<div class="t-hero-laurel">${laurel(p.award)}</div>` : ""}
            </div>
          </div>
          ${!t.hero ? `<div class="t-hero-hint">${hint("theme.hero: 키 아트 이미지/영상을 넣으면 이 배경이 바뀌어요", true)}</div>` : ""}
          <a class="t-down" href="#synopsis" aria-label="아래로">Scroll</a>
        </header>

        <section class="t-sec t-synopsis" id="synopsis"><div class="container">
          <p class="t-label">Synopsis · 소개</p>
          <div class="t-syn">
            <div>
              <p class="t-statement">${p.summary ? esc(p.summary) : ""}</p>
              ${p.role ? `<p class="t-role"><span>이 작품에서 ${esc(P.nameKo)}은</span>${esc(p.role)}</p>` : ""}
            </div>
            <div class="prose">${p.overview ? paragraphs(p.overview) : hint("overview: 어떤 콘텐츠인지 2–3문장")}</div>
          </div>
          ${meta ? `<dl class="t-meta">${meta}</dl>` : ""}
          ${share}
        </div></section>

        ${videos.length ? `<section class="t-sec"><div class="container"><p class="t-label">${videos.length > 1 ? "Videos · 영상" : "Trailer · 영상"}</p>
          <div class="t-videos n${videos.length}">${videos.map((v) => `<figure>
            <div class="t-video">${videoHtml(v)}</div>
            ${v.title ? `<figcaption>${esc(v.title)}</figcaption>` : ""}</figure>`).join("")}</div></div></section>`
          : DEV ? `<section class="t-sec"><div class="container"><p class="t-label">Trailer · 영상</p>${hint("youtube: 1–2분 체험 영상 주소")}</div></section>` : ""}

        ${sec("t-intent", "Intent · 기획 의도", p.intent ? `<blockquote class="t-bigquote">${paragraphs(p.intent)}</blockquote>` : "", "intent: 누구에게 어떤 경험을 주려고 했나")}

        ${sec("t-flow", "Experience · 체험 흐름", has(p.flow)
          ? `<ol class="t-chapters">${p.flow.map((s, n) => `<li><span>Chapter ${String(n + 1).padStart(2, "0")}</span><p>${esc(s)}</p></li>`).join("")}</ol>` : "",
          "flow: 관객이 처음부터 끝까지 하게 되는 일을 단계별로")}

        ${gallery.length
          ? `<section class="t-sec t-scenes"><div class="container t-scenes-head"><p class="t-label">Scenes · 장면</p>
              ${gallery.length > 1 ? `<div class="t-arrows"><button class="t-prev" aria-label="이전 장면">←</button><button class="t-next-btn" aria-label="다음 장면">→</button></div>` : ""}</div>
              <div class="t-track">${gallery.map((g) => `<figure>${media(g.src, g.caption)}${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure>`).join("")}</div></section>`
          : DEV ? `<section class="t-sec"><div class="container"><p class="t-label">Scenes · 장면</p>${hint("gallery: 체험하는 사람 사진, 플레이 장면, 기획서, 스케치")}</div></section>` : ""}

        ${sec("t-features", L.features, has(p.features) ? p.features.map(feature).join("") : "", "features: 직접 만든 것 1–2개 (문제 → 해결 → 결과 + 영상)")}

        ${sec("t-credits", L.credits, credits, "roles / contributions: 내가 맡은 분야와 구체적인 일")}

        ${sec("t-results", L.results, results, "results: 수상, 전시 장소 · 기간, 관람객 수, 반응")}

        ${has(p.press) ? `<section class="t-sec t-press"><div class="container"><p class="t-label">Press · 소개</p>
          <div class="links">${p.press.filter((x) => x.url).map((x) => `<a class="btn" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join("")}</div>
          ${p.press.filter((x) => x.facebook).map((x) => `<div class="t-embed"><iframe src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(x.facebook)}&show_text=true&width=500" width="500" height="${x.height || 665}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="${esc(x.label)}"></iframe></div>`).join("")}
        </div></section>` : ""}

        ${links.length || emptyLinks.length ? `<section class="t-sec"><div class="container">
          ${links.length ? `<div class="links">${links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
          ${emptyLinks.length ? hint(`links: ${emptyLinks.join(", ")} 주소가 비어 있어요`, true) : ""}
        </div></section>` : ""}

        ${prev ? `<div class="container t-prev-link"><a href="${projectUrl(prev)}">← ${esc(prev.title)}</a></div>` : ""}
        ${nextHtml}
      </article>`;
    bindScenes();
  }

  // ── About ────────────────────────────────────
  function timeline(items) {
    return `<div class="timeline">${items
      .map((x) => `<div class="row"><div class="when">${esc(x.period ?? x.year)}</div>
        <div class="what"><strong>${esc(x.title)}</strong>${x.detail ? `<span>${esc(x.detail)}</span>` : ""}</div></div>`)
      .join("")}</div>`;
  }

  // 스킬 표: 툴 → 할 수 있는 것 → 근거 작품(상세 페이지 링크)
  function skillsTable() {
    if (!has(P.skills)) return "";
    const chip = (id) => {
      const p = ALL_PROJECTS.find((x) => x.id === id);
      if (!p) return "";
      const name = esc(p.title.split(/:\s*/)[0]);
      return p.detail ? `<a class="proof" href="${projectUrl(p)}">${name}</a>` : `<span class="proof">${name}</span>`;
    };
    return `<div class="skill-table">${P.skills
      .map((g) => `<div class="skill-group"><h3>${esc(g.group)}</h3>${g.items
        .map((it) => `<div class="skill-row">
          <strong>${esc(it.name)}</strong>
          <p>${esc(it.can)}</p>
          <div class="proofs">${(it.projects || []).map(chip).join("")}${it.note ? `<span class="proof note">${esc(it.note)}</span>` : ""}</div>
        </div>`).join("")}</div>`)
      .join("")}</div>`;
  }

  function about() {
    chrome("about");
    document.getElementById("app").innerHTML = `
      <div class="neon-bg subtle" aria-hidden="true"><i class="glow g1"></i><i class="glow g2"></i><i class="grain"></i></div>
      <div class="container">
        <section class="about-hero">
          <h1>${esc(P.nameKo)} <span style="color:var(--muted);font-weight:500">${esc(P.nameEn)}</span></h1>
          <p>${esc(P.role)} — ${esc(P.headline)}</p>
          ${P.intro ? `<div class="about-intro">${paragraphs(P.intro)}</div>` : ""}
          <div class="actions">
            <a class="btn primary" href="mailto:${esc(P.email)}">${esc(P.email)}</a>
            ${P.github ? `<a class="btn" href="${esc(P.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
            ${P.resumePdf ? `<a class="btn" href="${esc(P.resumePdf)}" target="_blank">이력서 PDF ↓</a>` : ""}
          </div>
        </section>
        ${has(P.capabilities) ? `<section class="section"><h2 class="section-title">What I do</h2>${capabilities()}</section>` : ""}
        <section class="section"><h2 class="section-title">Timeline — 언제 무엇을 만들었나</h2>${projectTimeline()}</section>
        <section class="section"><h2 class="section-title">Awards</h2>${timeline(P.awards)}</section>
        <section class="section"><h2 class="section-title">Experience</h2>${timeline(P.experience)}</section>
        <section class="section"><h2 class="section-title">Education</h2>${timeline(P.education)}</section>
        <section class="section"><h2 class="section-title">Skills — 툴로 할 수 있는 것과 근거</h2>
          ${skillsTable()}
          ${has(P.certificates) ? `<p class="cert">자격증 · ${P.certificates.map(esc).join(", ")}</p>` : ""}
        </section>
      </div>`;
  }

  ({ home, project, about })[document.body.dataset.page]();
})();
