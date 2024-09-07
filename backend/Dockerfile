FROM node:22 as base

# # 作業ディレクトリを作成
ARG WORKDIR_PATH=/usr/src/app

# 作業ディレクトリを作成
WORKDIR $WORKDIR_PATH

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

EXPOSE 3333



# # All deps stage
# FROM base as deps
# WORKDIR $WORKDIR_PATH
# ADD package.json package-lock.json ./
# RUN npm ci

# # Production only deps stage
# FROM base as production-deps
# WORKDIR $WORKDIR_PATH
# ADD package.json package-lock.json ./
# RUN npm ci --omit=dev

# # Build stage
# FROM base as build
# WORKDIR $WORKDIR_PATH
# COPY --from=deps $WORKDIR_PATH/node_modules $WORKDIR_PATH/node_modules
# ADD . .
# # TypeScriptをコンパイル（npmを使用）
# RUN npm run build

# # Production stage
# FROM base
# ENV NODE_ENV=production
# WORKDIR $WORKDIR_PATH
# COPY --from=production-deps $WORKDIR_PATH/node_modules $WORKDIR_PATH/node_modules
# COPY --from=build $WORKDIR_PATH/build $WORKDIR_PATH
# EXPOSE 8080
# CMD ["npm", "start"]
