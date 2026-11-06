# nsmr0604.github.io

nsmr0604 のソーシャルメディアハブ（ゆずと８月と角砂糖）の GitHub Pages サイトです。

🌐 公開URL: https://www.nsmr0604.geek.jp

## 構成

| パス | 説明 |
|------|------|
| `index.html` | トップページ |
| `assets/` | フロントアセット（`css/`, `js/`, `icons/`） |
| `CNAME` | カスタムドメイン設定 |
| `robots.txt` / `sitemap.xml` | 検索エンジン向け設定 |
| `block_domains.txt` / `block_hosts.txt` | ブロックリスト |

## ローカルでの確認

静的サイトのため、ビルドは不要です。

```sh
python3 -m http.server 8000
```

ブラウザで http://localhost:8000 を開いてください。

## デプロイ

`main` ブランチへ push すると GitHub Pages により自動で公開されます。

## SNSプロフィール更新

SNSプロフィールの表示データは `data/profiles.json` に保存されます。

- 取得元: Twitter/X, Misskey, Bluesky, Mastodon, GitHub の公開API
- 更新方法: GitHub Actions（`.github/workflows/update-social-profiles.yml`）
- 実行頻度: 毎日判定し、週ごとに1回だけ不定の曜日で更新

ページ読み込み時は外部APIを直接呼ばず、`data/profiles.json` の内容を利用します。
