# 48Hgames — ウェブサイト一式

48時間ゲームジャムから生まれた自作HTML5ゲームのショーケースサイトです。
HTML / CSS / JavaScript のみで動く静的サイトなので、サーバー側の準備は不要です。

## 設置方法

ダウンロードした `website_demo` フォルダの中身を、そのまま下記フォルダに置いてください。

```
C:\Users\s-yokoyama\OneDrive\ドキュメント\GitHub\website_demo
```

フォルダ構成は以下の通りです。

```
website_demo/
├─ index.html        トップページ
├─ game.html         ゲーム個別ページ（?id=◯◯ でゲームを切り替え）
├─ company.html      運営会社
├─ privacy.html      プライバシーポリシー（更新予定）
├─ terms.html        利用規約（更新予定）
├─ README.md         このファイル
└─ assets/
   ├─ css/style.css  デザイン
   ├─ js/games.js    ★ゲーム情報・多言語テキスト（編集はここ）
   ├─ js/common.js   言語切替・メニューなど共通処理
   ├─ js/main.js     トップページの描画
   ├─ js/game.js     個別ページの描画
   └─ img/           カバー画像・スクリーンショット（SVG）
```

## 表示方法

`index.html` をブラウザで開くだけで表示できます。
GitHub Pages で公開する場合は、このフォルダをリポジトリの公開対象にすればそのまま動きます。

## ゲームの追加・編集

`assets/js/games.js` の `GAMES` 配列に1件追加するだけです。
画像は `assets/img/` に置き、`cover` や `screenshots` にパスを指定してください。

```js
{
  id: "my-game",                       // URLに使う英数字ID（重複不可）
  title:   { ja: "わたしのゲーム", en: "My Game" },
  tagline: { ja: "ひとことキャッチ", en: "A short tagline" },
  genre: "action",                     // GENRES のキー
  langs: ["ja", "en"],                 // 対応言語
  plays: 0,                            // プレイ数
  releaseDate: "2026-06-16",           // リリース日（新着・並び順に使用）
  featured: false,                     // true にするとトップの大バナーに
  popular: true,                       // true にすると「人気のタイトル」に表示
  cover: "assets/img/my-game.svg",     // タイトル画像
  playUrl: "https://...",              // 実際にゲームが動くURL（「プレイ」ボタン先）
  video: null,                         // 動画があれば "assets/video/my-game.mp4"
  rules: { ja: "遊び方の説明…", en: "How to play…" },
  screenshots: [
    { img: "assets/img/my-shot-1.svg", cap: { ja: "説明", en: "Caption" } }
  ],
},
```

### ジャンルを増やす
同ファイル冒頭の `GENRES` にキーと表示名（日英）を追加してください。

```js
const GENRES = {
  action: { ja: "アクション", en: "Action" },
  // 追加例
  shooter: { ja: "シューティング", en: "Shooter" },
};
```

## プレイ動画について

各ゲームの `video` に mp4 のパスを指定すると、個別ページの「プレイ動画」が
プレースホルダーから実際のプレーヤーに切り替わります。
YouTube 等の埋め込みを使いたい場合は `assets/js/game.js` の `videoHtml` を編集してください。

## 言語設定

右上の「JA / EN」で日本語・英語を切り替えられます（選択は端末に保存されます）。
初回は端末の言語設定にあわせて自動判定し、それ以外は日本語で表示します。

## 仕様メモ

- 画像（カバー・スクリーンショット）はデモ用のSVGです。実際のゲーム画像に差し替えてください。
- 運営会社ページは https://okakichi.co.jp/ へリンクしています。
- プライバシーポリシー・利用規約は仕様通り「更新予定」表示です。本文ができたら
  `privacy.html` / `terms.html` の `coming-soon` ブロックを `prose` ブロックに置き換えてください。
- SNS拡散リンク（Facebook / X / Instagram）は個別ゲームページ下部にあります。
  Facebook と X は現在のページURLを自動で共有します。
