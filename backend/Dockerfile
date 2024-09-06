# ベースイメージとしてNode.jsを使用（bunには公式イメージがないため、Nodeベースで対応）
FROM node:18

# bunをインストール
RUN curl https://bun.sh/install | bash

# パスにbunを追加
ENV PATH="/root/.bun/bin:$PATH"

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.json と bun.lockb をコピー
COPY package.json bun.lockb ./

# 依存関係をbunでインストール
RUN bun install

# アプリケーションのソースコードをコピー
COPY . .

# TypeScriptをコンパイル（bunを使用）
RUN bun run build

# コンテナを起動するコマンド
CMD ["bun", "run", "start"]

# アプリケーションはデフォルトでポート3000で動作
EXPOSE 3000
