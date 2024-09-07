# ベースイメージとして Bun を使用
FROM oven/bun:latest

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージファイルをコピー
COPY package.json bun.lockb ./

# 依存関係をインストール
RUN bun install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN bun run build

# アプリケーションを実行
CMD ["bun", "run", "preview"]
