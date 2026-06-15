/* =========================================================
   48Hgames — game detail page renderer
   ========================================================= */

function getGameId() {
  return new URLSearchParams(location.search).get("id");
}

const SOCIAL_ICONS = {
  facebook: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.45 2.9h-2.3v7A10 10 0 0022 12z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.6 3.6 0 00-.88-1.35 3.6 3.6 0 00-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 8.74a3.44 3.44 0 100-6.88 3.44 3.44 0 000 6.88zm6.75-8.93a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z"/></svg>',
};

function renderGame(lang) {
  const t = I18N[lang];
  const game = GAMES.find((g) => g.id === getGameId());
  const mount = document.getElementById("game-root");

  if (!game) {
    mount.innerHTML = `
      <div class="wrap coming-soon">
        <div class="timer">404</div>
        <p>${lang === "ja" ? "ゲームが見つかりませんでした。" : "We couldn't find that game."}</p>
        <a class="btn btn-ghost" href="index.html">← ${t.back_home}</a>
      </div>`;
    return;
  }

  document.title = `${game.title[lang]} — 48Hgames`;

  const shareUrl = encodeURIComponent(location.href);
  const shareText = encodeURIComponent(`${game.title[lang]} — 48Hgames`);
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    x: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    instagram: `https://www.instagram.com/`,
  };

  const langNames = game.langs.map((l) => (l === "ja" ? "日本語" : "EN")).join(" / ");

  const shotsHtml = game.screenshots.length
    ? game.screenshots.map((s) => `
        <figure class="shot reveal">
          <img src="${s.img}" alt="${s.cap[lang]}" loading="lazy">
          <figcaption>${s.cap[lang]}</figcaption>
        </figure>`).join("")
    : `<p class="rules">${lang === "ja" ? "スクリーンショットは準備中です。" : "Screenshots coming soon."}</p>`;

  const videoHtml = game.video
    ? `<video class="video-frame" controls poster="${game.cover}"><source src="${game.video}" type="video/mp4"></video>`
    : `<div class="video-frame"><img src="${game.cover}" alt=""><span class="play-overlay"><span class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg></span></span></div>
       <p class="rules" style="margin-top:12px">${t.video_soon}</p>`;

  mount.innerHTML = `
    <div class="wrap">
      <nav class="breadcrumb"><a href="index.html">48Hgames</a> <span>/</span> <span>${game.title[lang]}</span></nav>
    </div>

    <section class="wrap game-hero">
      <div class="game-cover"><img src="${game.cover}" alt="${game.title[lang]}"></div>
      <div class="game-info">
        <h1>${game.title[lang]}</h1>
        <p class="tagline">${game.tagline[lang]}</p>
        <div class="hero-meta">
          <span class="chip">${t.label_genre}: <b>${GENRES[game.genre][lang]}</b></span>
          <span class="chip">${t.label_lang}: <b>${langNames}</b></span>
          <span class="chip">${t.label_release}: <b>${game.releaseDate}</b></span>
          <span class="chip jam">${t.label_made}: <b>48H</b></span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${game.playUrl}">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>${t.hero_play}
          </a>
        </div>
      </div>
    </section>

    <div class="wrap">
      <section class="detail-section">
        <h2><span class="dot"></span>${t.detail_rules}</h2>
        <div class="rules"><p>${game.rules[lang]}</p></div>
      </section>

      <section class="detail-section">
        <h2><span class="dot"></span>${t.detail_shots}</h2>
        <div class="shots">${shotsHtml}</div>
      </section>

      <section class="detail-section">
        <h2><span class="dot"></span>${t.detail_video}</h2>
        ${videoHtml}
      </section>

      <section class="detail-section">
        <h2><span class="dot"></span>${t.detail_share}</h2>
        <div class="share">
          <a class="facebook" href="${shareLinks.facebook}" target="_blank" rel="noopener">${SOCIAL_ICONS.facebook} Facebook</a>
          <a class="x" href="${shareLinks.x}" target="_blank" rel="noopener">${SOCIAL_ICONS.x} X</a>
          <a class="instagram" href="${shareLinks.instagram}" target="_blank" rel="noopener">${SOCIAL_ICONS.instagram} Instagram</a>
        </div>
      </section>
    </div>
  `;
  observeReveals(mount);
}

document.addEventListener("DOMContentLoaded", () => renderGame(getLang()));
document.addEventListener("langchange", (e) => renderGame(e.detail.lang));
