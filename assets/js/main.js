/* =========================================================
   48Hgames — top page renderer
   ========================================================= */

let currentGenre = "all";

function gameCard(game, lang, rank) {
  const t = I18N[lang];
  const genre = GENRES[game.genre][lang];
  const isNew = isRecent(game.releaseDate);
  const rankTag = rank ? `<span class="card-rank">#${rank}</span>` : "";
  const newTag = isNew ? `<span class="card-new">${t.new_badge}</span>` : "";
  return el(`
    <article class="card reveal">
      <a class="stretch" href="game.html?id=${game.id}" aria-label="${game.title[lang]}"></a>
      <div class="card-thumb">
        ${rankTag}${newTag}
        <img src="${game.cover}" alt="" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-genre">${genre}</span>
        <h3 class="card-title">${game.title[lang]}</h3>
        <div class="card-foot">
          <span class="plays">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            ${fmtPlays(game.plays)} ${t.plays_label}
          </span>
          <span class="card-play">${t.play_cta}</span>
        </div>
      </div>
    </article>
  `);
}

function isRecent(dateStr) {
  const d = new Date(dateStr);
  const days = (Date.now() - d.getTime()) / 86400000;
  return days <= 21;
}

function renderHero(lang) {
  const t = I18N[lang];
  const game = GAMES.find((g) => g.featured) || GAMES[0];
  const mount = document.getElementById("hero");
  mount.innerHTML = "";
  mount.appendChild(el(`
    <div class="wrap">
      <div class="hero-eyebrow">${t.hero_eyebrow}</div>
      <div class="hero-grid">
        <div class="hero-copy">
          <h1>${game.title[lang]}</h1>
          <p class="tagline">${game.tagline[lang]}</p>
          <div class="hero-meta">
            <span class="chip">${t.label_genre}: <b>${GENRES[game.genre][lang]}</b></span>
            <span class="chip">${t.label_release}: <b>${game.releaseDate}</b></span>
            <span class="chip jam">${t.label_made}: <b>48H</b></span>
          </div>
          <div class="hero-actions">
            <a class="btn btn-primary" href="game.html?id=${game.id}">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>${t.hero_play}
            </a>
            <a class="btn btn-ghost" href="game.html?id=${game.id}">${t.hero_detail}</a>
          </div>
        </div>
        <a class="hero-media" href="game.html?id=${game.id}" aria-label="${game.title[lang]}">
          <span class="media-tag">${t.new_badge}</span>
          <img class="cover" src="${game.cover}" alt="${game.title[lang]}">
          <span class="scan"></span>
          <span class="play-overlay">
            <span class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          </span>
        </a>
      </div>
    </div>
  `));
}

function renderPopular(lang) {
  const rail = document.getElementById("popular-rail");
  rail.innerHTML = "";
  const popular = GAMES.filter((g) => g.popular).sort((a, b) => b.plays - a.plays);
  popular.forEach((g, i) => rail.appendChild(gameCard(g, lang, i + 1)));
  observeReveals(rail);
}

function renderFilters(lang) {
  const t = I18N[lang];
  const mount = document.getElementById("filters");
  mount.innerHTML = "";
  // "All" + only genres that actually have games
  const used = [...new Set(GAMES.map((g) => g.genre))];
  const make = (key, label) => {
    const b = el(`<button class="filter" data-genre="${key}">${label}</button>`);
    b.setAttribute("aria-pressed", String(key === currentGenre));
    b.addEventListener("click", () => { currentGenre = key; renderAll(getLang()); renderFilters(getLang()); });
    return b;
  };
  mount.appendChild(make("all", t.filter_all));
  used.forEach((key) => mount.appendChild(make(key, GENRES[key][lang])));
}

function renderAll(lang) {
  const grid = document.getElementById("all-grid");
  grid.innerHTML = "";
  const list = GAMES
    .filter((g) => currentGenre === "all" || g.genre === currentGenre)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  list.forEach((g) => grid.appendChild(gameCard(g, lang)));
  observeReveals(grid);
}

function renderTop(lang) {
  renderHero(lang);
  renderPopular(lang);
  renderFilters(lang);
  renderAll(lang);
}

document.addEventListener("DOMContentLoaded", () => renderTop(getLang()));
document.addEventListener("langchange", (e) => renderTop(e.detail.lang));
