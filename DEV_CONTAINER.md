# Dev Container セットアップガイド

## 前提条件

- Docker Desktop がインストールされ、実行されていること
- VS Code がインストールされていること
- VS Code拡張機能「Remote - Containers」がインストールされていること

## Dev Container の起動方法

### 方法1: VS Codeのコマンドパレットから

1. VS Codeでこのプロジェクトを開く
2. `F1` キーを押すか、`Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows/Linux) でコマンドパレットを開く
3. 「Dev Containers: Reopen in Container」を選択
4. 初回はコンテナのビルドに数分かかります（イメージのダウンロードとセットアップ）

### 方法2: VS Codeの通知から

1. VS Codeでプロジェクトを開くと、右下に通知が表示されます
2. 「Reopen in Container」をクリック

### 方法3: VS Codeのコマンドパレットから（詳細選択）

1. `F1` キーを押すか、`Cmd+Shift+P` でコマンドパレットを開く
2. 「Dev Containers: Reopen Folder in Container」を選択

## 初回セットアップ

コンテナが起動すると、自動的に以下の処理が実行されます：

1. ✅ Node.js 20 のインストール
2. ✅ Rust のインストール
3. ✅ wasm-pack のインストール
4. ✅ npm パッケージのインストール
5. ✅ WebAssembly のビルド

**所要時間**: 初回は約5-10分程度かかります（ネットワーク速度により異なります）

## セットアップ完了後

セットアップが完了すると、以下のメッセージが表示されます：

```
✅ セットアップが完了しました！
🎉 'npm run dev' を実行して開発サーバーを起動してください
```

## 開発サーバーの起動

ターミナルで以下のコマンドを実行：

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスすると、ルービックキューブが表示されます。

## トラブルシューティング

### コンテナが起動しない場合

1. Docker Desktop が実行されているか確認
2. VS Code拡張機能「Remote - Containers」がインストールされているか確認
3. VS Codeを再起動してみる

### wasm-packのビルドが失敗する場合

コンテナ内で以下を手動実行：

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
npm run wasm-build
```

### ポートが既に使用されている場合

`vite.config.js`のポート番号（3000）を変更してください。

## 便利なコマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run wasm-build` - WebAssemblyのみビルド
- `npm run preview` - ビルド結果のプレビュー

## コンテナの停止

- VS Codeのコマンドパレットから「Dev Containers: Reopen Folder Locally」を選択
- または、VS Codeを閉じることで自動的にコンテナが停止されます

