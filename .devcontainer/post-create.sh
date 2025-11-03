#!/bin/bash
# Post-create script for Dev Container

set -e

echo "🚀 Dev Container セットアップを開始します..."

# wasm-packのインストール確認とインストール
if ! command -v wasm-pack &> /dev/null; then
    echo "📦 wasm-packをインストール中..."
    curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
else
    echo "✅ wasm-packは既にインストールされています"
fi

# Node.js依存関係のインストール
echo "📦 Node.js依存関係をインストール中..."
npm install

# WebAssemblyビルド
echo "🔨 WebAssemblyをビルド中..."
npm run wasm-build

echo "✅ セットアップが完了しました！"
echo "🎉 'npm run dev' を実行して開発サーバーを起動してください"

