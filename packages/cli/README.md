# @hello-llm/cli

CLI 工具，用于与 OpenAI 兼容的 LLM 进行交互。

## 安装

```bash
npm install
```

## 配置

```bash
cp .env.example .env
# 编辑 .env 文件，添加你的 API key
```

## 使用

### 开发模式

```bash
# 从根目录运行
npm run cli ask "你好"

# 或在此目录运行
npm run dev -- ask "你好"
```

### 构建

```bash
npm run build
```

### 运行构建后的代码

```bash
npm start -- ask "你好"
```

## 命令

### hello

```bash
npm run dev -- hello 张三
```

### ask

```bash
# 基本使用
npm run dev -- ask "什么是 TypeScript?"

# 带选项
npm run dev -- ask "你好" --model gpt-4 --temperature 0.8 --no-stream
```

## 选项

- `-m, --model <model>` - 指定模型（默认：gpt-3.5-turbo）
- `-t, --temperature <number>` - 温度参数 0-2（默认：0.7）
- `--base-url <url>` - 自定义 API 基础 URL
- `--api-key <key>` - API 密钥
- `--no-stream` - 禁用流式输出
