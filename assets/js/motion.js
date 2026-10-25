// 움직임 담당: 히어로 빛 덩어리, 스크롤 등장, 카드 기울기, 헤더, 페이지 전환.
// app.js가 화면을 다 그린 뒤에 실행됩니다.
(function () {
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE_POINTER = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ── 히어로: 보라 빛 덩어리가 마우스를 느리게 따라옴 ─────────
  function glowFollow(bg) {
    if (REDUCE || !FINE_POINTER) return;
    addEventListener("pointermove", (e) => {
      bg.style.setProperty("--mx", ((e.clientX / innerWidth) - 0.5) * 2);
      bg.style.setProperty("--my", ((e.clientY / innerHeight) - 0.5) * 2);
    }, { passive: true });
  }

  // ── 스크롤하면 하나씩 떠오르기 ─────────────────
  function reveals() {
    if (REDUCE || !("IntersectionObserver" in window)) return;
    const groups = [
      ".section-title", ".filters", ".caps > .cap", ".grid > .card", ".list-row",
      ".p-media", ".meta", ".p-section > h2", ".prose", ".bullets", ".flow > li", ".feature", ".gallery > figure", ".results", ".links", ".pager a",
      ".t-label", ".t-statement", ".t-meta", ".t-video", ".t-bigquote", ".t-chapters > li", ".t-roles", ".t-contrib", ".t-laurels-row",
      ".about-hero > *", ".timeline .row", ".skills .row",
    ];
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    for (const sel of groups) {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.closest(".feature") && el !== el.closest(".feature")) return; // 기능 블록 안쪽은 통째로
        // 같은 부모 안에서 순서대로 조금씩 늦게
        const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.setProperty("--d", `${Math.min(idx, 6) * 70}ms`);
        el.classList.add("reveal");
        io.observe(el);
      });
    }
  }

  // ── 카드: 마우스 방향으로 기울고 빛이 따라옴 ──────────
  function tiltCards() {
    // 홈 카드는 CSS 흔들림 애니메이션(neon.css)을 쓰므로 여기선 건너뜀
    if (!FINE_POINTER || document.body.dataset.page === "home") return;
    document.querySelectorAll(".card .thumb").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) scale(1.02)`;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  // ── 헤더: 내려가면 숨고 올라가면 나타남 + 상세 페이지 진행 막대 ─────
  function header() {
    const bar = document.querySelector(".site-header");
    if (!bar) return;
    let progress = null;
    if (document.body.dataset.page === "project") {
      progress = document.createElement("div");
      progress.className = "progress";
      bar.appendChild(progress);
    }
    let lastY = scrollY, ticking = false;
    function update() {
      const y = scrollY;
      bar.classList.toggle("scrolled", y > 8);
      bar.classList.toggle("hide", y > lastY && y > 160);
      lastY = y;
      if (progress) {
        const max = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      ticking = false;
    }
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // ── 페이지 이동 시 살짝 페이드 ─────────────────
  function pageTransitions() {
    if (REDUCE) return;
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.target) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
      e.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(() => { location.href = url.href; }, 220);
    });
    // 뒤로 가기로 돌아왔을 때 페이드 상태가 남지 않게
    addEventListener("pageshow", () => document.body.classList.remove("leaving"));
  }

  const neonBg = document.querySelector(".neon-bg");
  if (neonBg) glowFollow(neonBg);
  reveals();
  tiltCards();
  header();
  pageTransitions();
})();
