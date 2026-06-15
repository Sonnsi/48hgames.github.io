/* =========================================================
   48Hgames — data & i18n
   ▼ ゲームを追加するときは GAMES 配列に1件追加するだけ。
     画像は assets/img/ に置き、cover / screenshots にパスを指定。
   ========================================================= */

/* ジャンル定義（キー: 表示名） */
const GENRES = {
  action:   { ja: "アクション",   en: "Action"   },
  puzzle:   { ja: "パズル",       en: "Puzzle"   },
  racing:   { ja: "レーシング",   en: "Racing"   },
  arcade:   { ja: "アーケード",   en: "Arcade"   },
  strategy: { ja: "ストラテジー", en: "Strategy" },
  word:     { ja: "ワード",       en: "Word"     },
};

/* ゲームカタログ */
const GAMES = [
  {
    id: "neon-drift",
    title:   { ja: "ネオンドリフト", en: "Neon Drift" },
    tagline: { ja: "光跡を残してコースを駆け抜ける、48時間製のドリフトレーサー。", en: "A 48-hour drift racer where every turn paints the track with light." },
    genre: "racing",
    langs: ["ja", "en"],
    plays: 18420,
    releaseDate: "2026-06-12",
    featured: true,
    popular: true,
    cover: "assets/img/neon-drift.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "左右キーでマシンを傾け、ブレーキを当ててドリフトを開始します。連続ドリフトでブーストゲージが溜まり、ゲージ満タンでスペースキーを押すと一気に加速。3周のラップタイムを競うタイムアタック制です。壁に当たると光跡が途切れ、コンボがリセットされます。",
      en: "Steer with the arrow keys and tap brake to start a drift. Chaining drifts fills the boost gauge — slam Space at full gauge for a burst of speed. It's a three-lap time attack: hit a wall and your light trail breaks, resetting the combo."
    },
    screenshots: [
      { img: "assets/img/shot-drift-1.svg", cap: { ja: "ドリフト中はブーストゲージが点灯", en: "Boost gauge lights up mid-drift" } },
      { img: "assets/img/shot-drift-2.svg", cap: { ja: "ラップタイムは画面右上に表示", en: "Lap time shown top-right" } },
    ],
  },
  {
    id: "block-cascade",
    title:   { ja: "ブロックカスケード", en: "Block Cascade" },
    tagline: { ja: "落ちてくるブロックを連鎖させて消す、シンプルで奥深い落ち物パズル。", en: "Stack, chain and clear — a simple-to-learn, deep-to-master falling block puzzle." },
    genre: "puzzle",
    langs: ["ja", "en"],
    plays: 24190,
    releaseDate: "2026-05-28",
    featured: false,
    popular: true,
    cover: "assets/img/block-cascade.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "同じ色のブロックを4つ以上つなげると消えます。消えたあとに上のブロックが落ちて連鎖が発生すると高得点。フィールド上部までブロックが積み上がるとゲームオーバーです。",
      en: "Connect four or more blocks of the same color to clear them. When blocks fall into new chains, you score big. Stack to the top of the field and it's game over."
    },
    screenshots: [
      { img: "assets/img/shot-block-1.svg", cap: { ja: "4つ以上で消去", en: "Match four to clear" } },
      { img: "assets/img/shot-block-2.svg", cap: { ja: "連鎖でスコア倍率アップ", en: "Chains multiply your score" } },
    ],
  },
  {
    id: "star-forager",
    title:   { ja: "スターフォレジャー", en: "Star Forager" },
    tagline: { ja: "重力を操りながら星屑を集める、宇宙アクション。", en: "Bend gravity, gather stardust — a fast little space action game." },
    genre: "action",
    langs: ["ja", "en"],
    plays: 9870,
    releaseDate: "2026-06-05",
    featured: false,
    popular: true,
    cover: "assets/img/star-forager.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "クリックした方向に引力が発生し、その方向へ移動します。星屑を集めながら障害物を避け、制限時間内にできるだけ多くのスコアを稼ぎましょう。",
      en: "Click to pull yourself toward a point of gravity. Collect stardust, dodge debris, and rack up as much score as you can before time runs out."
    },
    screenshots: [
      { img: "assets/img/shot-star-1.svg", cap: { ja: "引力で移動", en: "Move via gravity pulls" } },
    ],
  },
  {
    id: "tiny-kingdom",
    title:   { ja: "タイニーキングダム", en: "Tiny Kingdom" },
    tagline: { ja: "小さな王国を育てる、ひと息でわかる箱庭ストラテジー。", en: "Grow a pocket-sized realm in this bite-size strategy sandbox." },
    genre: "strategy",
    langs: ["ja", "en"],
    plays: 7320,
    releaseDate: "2026-05-20",
    featured: false,
    popular: false,
    cover: "assets/img/tiny-kingdom.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "資源を集めて建物を建て、人口を増やしていきます。季節ごとに発生するイベントに対応しながら、10年（10ターン）で最大の王国を目指します。",
      en: "Gather resources, raise buildings, and grow your population. React to seasonal events and build the largest kingdom you can over ten years (ten turns)."
    },
    screenshots: [
      { img: "assets/img/shot-kingdom-1.svg", cap: { ja: "建物を配置して発展", en: "Place buildings to expand" } },
    ],
  },
  {
    id: "pixel-diver",
    title:   { ja: "ピクセルダイバー", en: "Pixel Diver" },
    tagline: { ja: "深海へ潜るほどスコアが上がる、ワンボタン・アーケード。", en: "Dive deeper, score higher — a one-button arcade plunge." },
    genre: "arcade",
    langs: ["ja", "en"],
    plays: 13560,
    releaseDate: "2026-06-01",
    featured: false,
    popular: false,
    cover: "assets/img/pixel-diver.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "ボタンを押している間だけ潜水艦が浮上します。岩や生物にぶつからないように、できるだけ深くまで潜りましょう。深度がそのままスコアになります。",
      en: "Hold the button to rise, release to sink. Thread past rocks and sea life and go as deep as you can — depth is your score."
    },
    screenshots: [
      { img: "assets/img/shot-diver-1.svg", cap: { ja: "押して浮上、離して潜行", en: "Hold to rise, release to dive" } },
    ],
  },
  {
    id: "word-rush",
    title:   { ja: "ワードラッシュ", en: "Word Rush" },
    tagline: { ja: "降ってくる文字をつないで単語を作る、語彙力アクション。", en: "Link falling letters into words before they pile up." },
    genre: "word",
    langs: ["en"],
    plays: 5410,
    releaseDate: "2026-05-15",
    featured: false,
    popular: false,
    cover: "assets/img/word-rush.svg",
    playUrl: "#",
    video: null,
    rules: {
      ja: "降ってくる文字をドラッグしてつなぎ、英単語を作ると消えます。長い単語ほど高得点。文字が画面上部まで積み上がる前に消し続けましょう。",
      en: "Drag to connect falling letters into valid words to clear them. Longer words score more — keep the board from filling up."
    },
    screenshots: [
      { img: "assets/img/shot-word-1.svg", cap: { ja: "文字をつないで単語に", en: "Connect letters into words" } },
    ],
  },
];

/* UI文言（日英） */
const I18N = {
  ja: {
    htmlLang: "ja",
    nav_new: "新着", nav_popular: "人気", nav_genre: "ジャンル",
    nav_company: "運営会社", nav_privacy: "プライバシーポリシー", nav_terms: "利用規約",
    tagline_site: "48時間で作られたHTML5ゲームを、すぐにブラウザで。",
    hero_eyebrow: "最新リリース",
    hero_play: "今すぐプレイ", hero_detail: "詳細を見る",
    sec_popular: "人気のタイトル", sec_popular_sub: "いま遊ばれているゲーム",
    sec_all: "すべてのタイトル", sec_all_sub: "コレクションをまるごと探す",
    filter_all: "すべて",
    plays_label: "プレイ", play_cta: "プレイ →",
    label_genre: "ジャンル", label_lang: "対応言語", label_release: "リリース", label_made: "制作時間",
    detail_rules: "遊び方", detail_video: "プレイ動画", detail_shots: "スクリーンショット",
    detail_share: "シェアする", video_soon: "プレイ動画は準備中です",
    back_home: "トップ", footer_about: "48時間ゲームジャムから生まれた、自作HTML5ゲームのショーケース。",
    foot_explore: "さがす", foot_about: "サイト情報",
    rights: "© 2026 48Hgames — Operated by Okakichi",
    company_eyebrow: "運営会社", company_title: "運営会社",
    company_name: "株式会社オカキチ", company_desc: "48Hgames を運営しています。会社の詳細は公式サイトをご覧ください。",
    company_visit: "公式サイトを開く ↗",
    privacy_eyebrow: "プライバシーポリシー", privacy_title: "プライバシーポリシー",
    terms_eyebrow: "利用規約", terms_title: "利用規約",
    soon: "更新予定", soon_note: "このページは現在準備中です",
    new_badge: "NEW",
  },
  en: {
    htmlLang: "en",
    nav_new: "New", nav_popular: "Popular", nav_genre: "Genre",
    nav_company: "Company", nav_privacy: "Privacy Policy", nav_terms: "Terms of Use",
    tagline_site: "HTML5 games built in 48 hours — playable instantly in your browser.",
    hero_eyebrow: "Latest release",
    hero_play: "Play now", hero_detail: "View details",
    sec_popular: "Popular titles", sec_popular_sub: "What people are playing right now",
    sec_all: "All titles", sec_all_sub: "Browse the whole collection",
    filter_all: "All",
    plays_label: "plays", play_cta: "Play →",
    label_genre: "Genre", label_lang: "Languages", label_release: "Released", label_made: "Made in",
    detail_rules: "How to play", detail_video: "Gameplay video", detail_shots: "Screenshots",
    detail_share: "Share", video_soon: "Gameplay video coming soon",
    back_home: "Home", footer_about: "A showcase of homemade HTML5 games born from 48-hour game jams.",
    foot_explore: "Explore", foot_about: "About",
    rights: "© 2026 48Hgames — Operated by Okakichi",
    company_eyebrow: "Company", company_title: "Operating company",
    company_name: "Okakichi Inc.", company_desc: "48Hgames is operated by Okakichi. Visit the official site for company details.",
    company_visit: "Open official site ↗",
    privacy_eyebrow: "Privacy Policy", privacy_title: "Privacy Policy",
    terms_eyebrow: "Terms of Use", terms_title: "Terms of Use",
    soon: "Coming soon", soon_note: "This page is being prepared",
    new_badge: "NEW",
  },
};
