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
    id: "hormuz",
    title:   { ja: "ホルムズ海峡突破", en: "Strait of Hormuz Run" },
    tagline: { ja: "タンカーの舵をにぎって90秒。ミサイルをよけ、お宝を拾え。", en: "Take the tanker's wheel for 90 seconds. Dodge the missiles, grab the loot." },
    genre: "action",
    langs: ["ja", "en"],
    plays: 18420,
    releaseDate: "2026-06-16",
    featured: true,
    popular: true,
    cover: "assets/img/hormuz.svg",
    playUrl: "games/hormuz/index.html",
    video: null,
    rules: {
      ja: "あなたはタンカーの操舵手。画面をタッチした場所がバーチャルパッドになり、上下左右にドラッグした方向へタンカーが進みます（PCは矢印キー／WASD）。ミサイル・自爆ドローン・魚雷・岩・軍艦・核ミサイルをよけながら90秒間生きのびるのが目標。石油(+10)・LNG(+20)・黄金の像(+50&5秒無敵)・金のスクリュー(+30&加速)を拾うと高得点。核ミサイルは接触で3ダメージだが、無敵中にぶつかると+500点。軍艦は魚雷をぶつけて倒すと+150点。ダメージでライフ(3つ)が減り、0でゲームオーバーです。",
      en: "You're the tanker's helmsman. Touch anywhere to set a virtual pad, then drag to steer (or use arrow keys / WASD on desktop). Survive 90 seconds while dodging missiles, kamikaze drones, torpedoes, rocks, warships and nuclear missiles. Grab oil (+10), LNG (+20), the golden statue (+50 & 5s invincibility) and the golden propeller (+30 & speed boost). A nuclear missile deals 3 damage on contact — but ram one while invincible for +500. Lure a torpedo into a warship to destroy it for +150. Damage drains your 3 lives; lose them all and it's game over."
    },
    screenshots: [
      { img: "assets/img/shot-hormuz-1.svg", cap: { ja: "ミサイル・ドローン・魚雷・岩をよける", en: "Dodge missiles, drones, torpedoes and rocks" } },
      { img: "assets/img/shot-hormuz-2.svg", cap: { ja: "石油・LNG・黄金の像・加速アイテムを拾う", en: "Collect oil, LNG, the golden idol and speed-ups" } },
    ],
  },
  {
    id: "block-cascade",
    title:   { ja: "ブロックカスケード", en: "Block Cascade" },
    tagline: { ja: "ポチポチ消すだけ、なのに気づけば夜。罪深い落ち物パズル。", en: "Just tap to clear blocks. Suddenly it’s 3am. A dangerously moreish puzzler." },
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
    tagline: { ja: "クリックで重力ビヨーン。星屑を欲ばって集める宇宙アクション。", en: "Click to go *boing* through gravity. A greedy little stardust-grabbing romp." },
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
    tagline: { ja: "王さま気分で街づくり。10ターンで国家、間に合う？", en: "Play king, build a town. Can you found a nation in ten turns? Probably?" },
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
    tagline: { ja: "押して浮く、離して沈む。それだけ。なのに深い（物理的に）。", en: "Hold to rise, let go to sink. That’s it. Somehow very deep (literally)." },
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
    tagline: { ja: "降ってくる文字で単語づくり。語彙力、試されちゃう。", en: "Spell words from falling letters before they bury you. Vocab flex time." },
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
    tagline_site: "48時間でムリヤリ作ったHTML5ゲーム、ぜんぶ無料で遊べます。",
    hero_eyebrow: "できたてホヤホヤ！",
    hero_play: "あそぶ！", hero_detail: "くわしく見る",
    sec_popular: "みんな夢中！", sec_popular_sub: "いま遊ばれまくってるゲーム",
    sec_all: "ぜんぶ見せます", sec_all_sub: "好きなジャンルで選んでね",
    filter_all: "ぜんぶ",
    plays_label: "回あそばれた", play_cta: "あそぶ →",
    label_genre: "ジャンル", label_lang: "対応言語", label_release: "リリース", label_made: "がんばった時間",
    detail_rules: "あそびかた", detail_video: "プレイ動画", detail_shots: "スクショ",
    detail_share: "友だちに広める", video_soon: "プレイ動画は準備中…（撮影で力尽きました）",
    back_home: "トップ",
    footer_about: "48時間でムリヤリ作った、自作HTML5ゲームのショーケース。基本、勢いです。",
    foot_explore: "あそぶ", foot_about: "サイトのこと",
    rights: "© 2026 48Hgames — 運営：オカキチ",
    company_eyebrow: "運営会社", company_title: "運営会社",
    company_name: "株式会社オカキチ", company_desc: "48Hgames をニコニコ運営しています。会社のことは公式サイトでどうぞ。",
    company_visit: "公式サイトを開く ↗",
    privacy_eyebrow: "プライバシーポリシー", privacy_title: "プライバシーポリシー",
    terms_eyebrow: "利用規約", terms_title: "利用規約",
    soon: "更新予定", soon_note: "このページは絶賛じゅんび中…！もうちょっとだけ待ってね。",
    new_badge: "NEW!", stamp: "勢いで制作中",
  },
  en: {
    htmlLang: "en",
    nav_new: "New", nav_popular: "Popular", nav_genre: "Genre",
    nav_company: "Company", nav_privacy: "Privacy Policy", nav_terms: "Terms of Use",
    tagline_site: "HTML5 games slapped together in 48 hours. Free, and playable right now.",
    hero_eyebrow: "Fresh out of the oven!",
    hero_play: "Play!", hero_detail: "Tell me more",
    sec_popular: "Crowd favorites!", sec_popular_sub: "What everyone's hooked on right now",
    sec_all: "The whole pile", sec_all_sub: "Pick a genre, any genre",
    filter_all: "All of it",
    plays_label: "plays", play_cta: "Play →",
    label_genre: "Genre", label_lang: "Languages", label_release: "Released", label_made: "Effort",
    detail_rules: "How to play", detail_video: "Gameplay video", detail_shots: "Screenshots",
    detail_share: "Tell your friends", video_soon: "Gameplay video coming soon… (we ran out of energy filming)",
    back_home: "Home",
    footer_about: "A showcase of homemade HTML5 games crammed into 48 hours. Mostly vibes.",
    foot_explore: "Play", foot_about: "About",
    rights: "© 2026 48Hgames — Operated by Okakichi",
    company_eyebrow: "Company", company_title: "Operating company",
    company_name: "Okakichi Inc.", company_desc: "48Hgames is happily operated by Okakichi. Visit the official site for the grown-up details.",
    company_visit: "Open official site ↗",
    privacy_eyebrow: "Privacy Policy", privacy_title: "Privacy Policy",
    terms_eyebrow: "Terms of Use", terms_title: "Terms of Use",
    soon: "Coming soon", soon_note: "This page is very much being prepared… hang tight!",
    new_badge: "NEW!", stamp: "made on vibes",
  },
};
