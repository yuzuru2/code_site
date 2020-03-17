## このリポジトリは何？

コード共有サイトのソースです。<br />

## 成果物

https://code.itsumen.com/ <br />

## 開発環境

- ubuntu 18.04
- docker <br/>
- docker-compose <br/>

## 使用ライブラリ周り

### フロントエンド

- parcel
- bootstrap
- highlight.js
- react
- nginx(静的ファイルを配信)

### バックエンド

- typescript
- nodejs
- pm2

### データベース

- mongodb

## セットアップ

```
$ git clone https://github.com/yuzuru2/code_site.git code_site
$ cd code_site

.envを編集　※portの開放は各自で設定してください
SERVER_IP   →　サーバのIP
NGINX_PORT  →  フロントのポート番号
BACKEND_PORT →  バックエンドのポート番号

# フロント・バックエンドnodejsをビルド
$ sudo docker-compose -f docker-compose.build.yml up
$ sudo docker-compose -f docker-compose.build.yml down -v

# コンテナを立ち上げる
$ sudo docker-compose up -d --build

# ブラウザでアクセスする
http://サーバのIP:NGINX_PORT

# コンテナを落とす
$ sudo docker-compose down -v
```
