# Date MCP Server (Japanese)

現在の日付と時刻を提供するシンプルなMCPサーバーです。

### 機能

- **現在の日付と時刻取得**: 指定されたフォーマットとタイムゾーンで現在の日付と時刻を返します

## ツール

1. `get_now`
   - 現在の日付と時刻を取得します
   - 入力パラメータ:
     - `format` (任意, 文字列): 日付フォーマット - 'ISO' または 'YYYY-MM-DD' (デフォルト: "ISO")
     - `timezone` (任意, 文字列): タイムゾーン - 'Asia/Tokyo' または 'UTC' (デフォルト: "Asia/Tokyo")
   - 戻り値: 指定されたフォーマットとタイムゾーンでの現在の日付と時刻

## セットアップ

1. 依存関係のインストール:
   ```bash
   npm install
   # または
   pnpm install
   ```
2. TypeScriptプロジェクトのビルド:
   ```bash
   npm run build
   # または
   pnpm run build
   ```

### Dockerでのセットアップ
Dockerを使用してセットアップする場合、以下のコマンドでビルドできます:

```bash
docker build -t date-mcp .
```

### Claude Desktopでの使用法
Claude Desktopで使用するには、`claude_desktop_config.json`に以下を追加してください:

```json
{
  "mcpServers": {
    "date": {
      "command": "node",
      "args": [
        "/path/to/date-mcp/build/index.js"
      ]
    }
  }
}
```

Dockerを使用する場合は以下のように設定できます:

```json
{
  "mcpServers": {
    "date": {
      "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "date-mcp"
        ]
    }
  }
}
```

### VS Codeでの使用法

VS Codeですぐに使用するための設定方法:

1. VS Codeでユーザー設定（JSON）を開く（`Ctrl+Shift+P` → `Preferences: Open User Settings (JSON)`）
2. 次の設定を追加:

```json
{
  "mcp": {
    "servers": {
      "date": {
        "command": "node",
        "args": [
          "/path/to/date-mcp/build/index.js"
        ]
      }
    }
  }
}
```

Dockerを使用する場合は、以下のように設定できます:

```json
{
  "mcp": {
    "servers": {
      "date": {
        "command": "docker",
          "args": [
          "run",
          "-i",
          "--rm",
          "date-mcp"
        ]
      }
    }
  }
}
```

または、ワークスペースの`.vscode/mcp.json`ファイルに以下を追加することもできます（`mcp`キーなし）:

```json
{
  "servers": {
    "date": {
      "command": "node",
      "args": [
        "/path/to/date-mcp/build/index.js"
      ]
    }
  }
}
```

Dockerを使用する場合は、以下のように設定できます:

```json
{
  "servers": {
    "date": {
      "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "date-mcp"
        ]
    }
  }
}
```