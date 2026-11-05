# nsmr0604.github.io

nsmr0604 のソーシャルメディアハブ（ゆずと８月と角砂糖）の GitHub Pages サイトです。

🌐 公開URL: https://www.nsmr0604.geek.jp

## 構成

| パス | 説明 |
|------|------|
| `index.html` | トップページ |
| `css/` | スタイルシート |
| `js/` | JavaScript（`modules/` を含む） |
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
