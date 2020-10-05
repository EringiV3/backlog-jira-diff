# Backlog と Jira の差分検出スクリプト

Jira で完了状態になっているが、バックログでは完了状態になっていない課題を抽出します。
Jira の完了状態のチケット検索範囲は、オープン中のスプリントでステータスが完了のものを対象とします。
バックログのチケットの検索範囲は、src/backlog/constants.ts で指定された対象プロジェクトです。

## 使い方

.env に環境変数を設定します。
Jira と Backlog の設定ページから API キーを取得してください。

```bash
yarn install
yarn dev
```

### 使用している Backlog API クライアントライブラリ

https://github.com/nulab/backlog-js

### 使用している Jira API クライアントライブラリ

https://github.com/jira-node/node-jira-client
