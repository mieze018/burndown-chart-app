FROM node:22

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package.json package-lock.json ./

# 依存関係をnpmでインストール
RUN npm install

# @swc/coreのネイティブバインディングをインストール
# RUN npm install @swc/core-linux-arm64-gnu

# アプリケーションのソースコードをコピー
COPY . .

# TypeScriptをコンパイル（npmを使用）
RUN npm run build

# コンテナを起動するコマンド
CMD ["npm", "start"]

EXPOSE 3000
