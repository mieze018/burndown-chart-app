# ベースイメージとしてNode.jsを使用（bunのためにNodeを使う）
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

# ビルドを実行（bunを使用）
RUN bun run build

# 簡易サーバを起動（ローカル開発用）
CMD ["bun", "run", "start"]

# フロントエンドはポート3000を使用（コンテナ内部ではデフォルト）
EXPOSE 3000
