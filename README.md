# ルービックキューブ 3D WebAssembly

WebAssemblyとThree.jsを使用したインタラクティブな3Dルービックキューブです。

## 機能

- 🎲 WebAssemblyで実装されたルービックキューブのロジック
- 🎨 Three.jsによる美しい3Dレンダリング
- 🧭 慣性付きのカメラ軌道操作とズーム
- ⌨️ キーボードショートカット対応
- 🔄 リアルタイム状態チェック（解かれているか判定）
- 🧩 スクランブル生成、一手戻し、操作履歴の記録
- 🎞️ 面回転アニメーションと速度調整スライダー
- 🖐️ キューブを直接クリックして回転できる直感的な操作
- 🌓 ライト / ダーク切り替え対応のモダンUI

## 開発環境

このプロジェクトはDev Containerを使用しています。

### 必要な環境

- Docker
- VS Code with Remote-Containers extension

### セットアップ

1. VS Codeでこのプロジェクトを開く
2. 「Reopen in Container」を選択（またはコマンドパレットから）
3. コンテナが起動したら、自動的に依存関係がインストールされます

### 手動セットアップ（Dev Containerを使わない場合）

```bash
# Rustとwasm-packをインストール
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install wasm-pack

# Node.js依存関係をインストール
npm install

# WebAssemblyをビルド
npm run wasm-build

# 開発サーバーを起動
npm run dev
```

## 使い方

### 操作方法

- **左ドラッグ**: キューブ周りを軌道回転（慣性付き）
- **マウスホイール**: ズームイン/アウト
- **アニメーション速度スライダー**: 面回転アニメーションの再生速度を調整
- **スクランブルボタン**: 指定手数のランダムスクランブルを生成
- **一手戻すボタン**: 直近の手順を取り消す
- **ビューリセット**: カメラを初期位置に戻す
- **ボタンクリック**: 各面を回転
- **キーボード**:
  - `F`, `R`, `U`, `B`, `L`, `D`: 時計回り回転
  - `Shift + F/R/U/B/L/D`: 反時計回り回転
  - `Alt + F/R/U/B/L/D`: 180度回転（例: Alt+F -> F2）
- **キューブをクリック**: クリックした面を時計回りに回転（Shiftで反時計回り、Altで180度）

### キューブ操作

標準的なルービックキューブの記法を使用：
- `F`: 前面時計回り
- `F'`: 前面反時計回り
- `F2`: 前面180度
- 同様に `R`, `U`, `B`, `L`, `D` も使用可能

## 技術スタック

- **Rust**: ルービックキューブのロジック実装
- **WebAssembly**: 高性能な計算処理
- **Three.js**: 3Dレンダリング
- **Vite**: ビルドツールと開発サーバー

## プロジェクト構造

```
.
├── src/
│   ├── lib.rs          # Rust WebAssembly実装
│   └── main.js         # Three.jsレンダリングとUI
├── .devcontainer/      # Dev Container設定
├── index.html          # HTMLテンプレート
├── Cargo.toml          # Rust依存関係
├── package.json        # Node.js依存関係
└── vite.config.js      # Vite設定
```

## ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## GitHubリポジトリの設定

このプロジェクトをGitHubのプライベートリポジトリとして管理する場合：

```bash
# Gitリポジトリを初期化
git init

# リモートリポジトリを追加（GitHubで作成後）
git remote add origin https://github.com/YOUR_USERNAME/rubiks-cube.git

# ファイルをコミット
git add .
git commit -m "Initial commit: WebAssembly Rubik's Cube"

# プライベートリポジトリにプッシュ
git branch -M main
git push -u origin main
```

GitHubで新しいプライベートリポジトリを作成する場合は、GitHubのWebインターフェースから作成してください。

## ライセンス

MIT License
