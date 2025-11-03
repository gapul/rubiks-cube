# GitHubリポジトリのセットアップ手順

## 1. GitHubでリポジトリを作成

1. https://github.com/new にアクセス
2. 以下の情報を入力：
   - **Repository name**: `rubiks-cube`（または任意の名前）
   - **Description**: `WebAssembly-powered 3D Rubik's Cube`
   - **Visibility**: Public または Private を選択
   - **重要**: 以下のチェックボックスは**オフ**にしてください：
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
3. **Create repository** をクリック

## 2. リモートリポジトリを追加

GitHubでリポジトリを作成したら、以下のコマンドを実行してください：

```bash
# リモートを追加（YOUR_USERNAMEを実際のGitHubユーザー名に置き換えてください）
git remote add origin https://github.com/YOUR_USERNAME/rubiks-cube.git

# または、SSHを使う場合（推奨）
git remote add origin git@github.com:YOUR_USERNAME/rubiks-cube.git
```

## 3. コードをプッシュ

```bash
# 現在の変更をコミット（まだの場合）
git add .
git commit -m "Initial commit: 3D Rubik's Cube with WebAssembly"

# メインブランチをプッシュ
git push -u origin main
```

## 認証について

- HTTPSの場合：GitHubのPersonal Access Tokenが必要です
- SSHの場合：SSH鍵をGitHubに登録する必要があります

詳しくは：https://docs.github.com/en/authentication

