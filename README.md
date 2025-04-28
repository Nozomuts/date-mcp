# Date MCP Server

[English](#date-mcp-server-english) | [日本語](#date-mcp-server-japanese)

---

## Date MCP Server (English)

A simple MCP Server that provides the current date.

### Features

- **Get Current Date**: Returns today's date in ISO format (YYYY-MM-DD)
- **Get Formatted Date**: Returns today's date in different formats (ISO, Japanese, US)

## Tools

1. `get_current_date`
   - Get the current date in ISO format
   - Inputs: None
   - Returns: Current date in ISO format (YYYY-MM-DD)

2. `get_formatted_date`
   - Get the current date in a specified format
   - Inputs:
     - `format` (optional string): Date format preference - 'iso', 'jp', or 'us' (default: "iso")
   - Returns: Current date in the specified format and the format name

## Setup

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
2. Build the TypeScript project:
   ```bash
   npm run build
   # or
   pnpm run build
   ```

### Docker Setup
You can build using Docker with the following command:

```bash
docker build -t date-mcp .
```

### Usage with Claude Desktop
To use this with Claude Desktop, add the following to your `claude_desktop_config.json`:

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

If you're using Docker, you can configure it like this:

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

### Usage with VS Code

For quick installation in VS Code, configure your settings:

1. Open User Settings (JSON) in VS Code (`Ctrl+Shift+P` → `Preferences: Open User Settings (JSON)`)
2. Add the following configuration:

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

If you're using Docker, you can configure it like this:

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

Alternatively, you can add this to a `.vscode/mcp.json` file in your workspace (without the `mcp` key):

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

If you're using Docker, you can configure it like this:

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

---

## Date MCP Server (Japanese)

現在の日付を提供するシンプルなMCPサーバーです。

### 機能

- **現在の日付取得**: 今日の日付をISO形式（YYYY-MM-DD）で返します
- **フォーマット付き日付取得**: 今日の日付を異なるフォーマット（ISO、日本語、US）で返します

## ツール

1. `get_current_date`
   - ISO形式で現在の日付を取得します
   - 入力パラメータ: なし
   - 戻り値: ISO形式（YYYY-MM-DD）の現在日付

2. `get_formatted_date`
   - 指定されたフォーマットで現在の日付を取得します
   - 入力パラメータ:
     - `format` (任意, 文字列): 日付フォーマット - 'iso', 'jp', または 'us' (デフォルト: "iso")
   - 戻り値: 指定されたフォーマットでの現在日付とフォーマット名

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