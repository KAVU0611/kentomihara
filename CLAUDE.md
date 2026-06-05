# CLAUDE.md

このリポジトリ（Kento Mihara Portfolio）で作業する際の常設ルール。

## プロンプトログ（必須）

ユーザーから指示を受けて作業するたびに、`docs/PROMPT_LOG.md` の末尾へ1エントリ追記する。
形式は以下のとおり：

- 日時(JST)
- ユーザーのプロンプト全文
- 変更したファイル一覧
- 変更内容の要約（2行以内）

追記は作業完了後に行う。

## 技術メモ

- Tailwind は CDN 版（`https://cdn.tailwindcss.com`）を使用。配色・keyframes・animation は
  `index.html` 内のインライン `tailwind.config` で定義する。Vite への正式移行はまだ行わない。
- 依存は `importmap`（index.html）と `package.json` で二重管理されている。依存追加・変更時は両方を意識する。
- `components/AIChat.tsx` は現状マウントしていない（残置）。
- セクションのアンカー（`#home` `#about` `#experience` `#contact`）、
  `services/geminiService.ts`、`public/miharakentojiga/` の画像パスは壊さない。
