# Hello Node CLI

一个使用 TypeScript 和 Commander.js 构建的命令行工具，集成了 OpenAI 兼容的 LLM API。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 特性

- 🚀 TypeScript 编写，类型安全
- 🤖 支持 OpenAI 兼容的 LLM API
- 🔧 模块化命令结构，易于扩展
- 🎯 支持自定义 API 端点（Ollama、Azure OpenAI 等）

## 快速开始

### 安装

```bash
npm install
```

### 配置

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑 .env 文件，添加你的 API key
# OPENAI_API_KEY=sk-your-key-here
# OPENAI_BASE_URL=https://api.openai.com/v1  # 可选
```

### 使用

```bash
# 开发模式
npm run dev -- hello 张三
npm run dev -- ask "什么是 TypeScript?"

# 构建
npm run build

# 运行构建后的代码
npm start -- hello 张三

# 全局安装
npm link
hello-cli ask "你好"
```

## 命令说明

### hello

简单的问候命令：

```bash
hello-cli hello 张三
# 输出: hello 张三
```

### ask

向 LLM 提问（默认使用流式输出）：

```bash
# 基本使用（流式输出，实时显示回复）
hello-cli ask "什么是 TypeScript?"

# 指定模型
hello-cli ask "解释闭包" --model gpt-4

# 调整温度（0-2，越高越随机）
hello-cli ask "写一首诗" --temperature 1.5

# 使用自定义 API 端点
hello-cli ask "你好" --base-url https://api.example.com/v1

# 命令行传入 API key
hello-cli ask "你好" --api-key sk-xxxxx

# 禁用流式输出（等待完整回复后一次性显示）
hello-cli ask "你好" --no-stream
```

**选项：**
- `-m, --model <model>` - 指定模型（默认：gpt-3.5-turbo）
- `-t, --temperature <number>` - 温度参数 0-2（默认：0.7）
- `--base-url <url>` - 自定义 API 基础 URL
- `--api-key <key>` - API 密钥
- `--no-stream` - 禁用流式输出

## 兼容的 API 服务

支持任何兼容 OpenAI API 格式的服务：

**OpenAI**
```bash
export OPENAI_API_KEY=sk-xxxxx
export OPENAI_BASE_URL=https://api.openai.com/v1
hello-cli ask "你好" --model gpt-4
```

**Ollama（本地）**
```bash
export OPENAI_API_KEY=dummy
export OPENAI_BASE_URL=http://localhost:11434/v1
hello-cli ask "你好" --model llama2
```

**智谱 AI**
```bash
export OPENAI_API_KEY=your-key
export OPENAI_BASE_URL=https://open.bigmodel.cn/api/paas/v4
hello-cli ask "你好" --model glm-4
```

## 开发

```bash
npm run dev          # 开发模式运行
npm run build        # 构建项目
npm run clean        # 清理构建输出
npm run typecheck    # 类型检查
```

## 项目结构

```
hello_node_cli/
├── src/
│   ├── cli.ts              # CLI 入口
│   ├── index.ts            # 主程序配置
│   └── commands/           # 命令模块
│       ├── hello.ts
│       └── ask.ts
├── .env.example            # 环境变量模板
├── package.json
├── tsconfig.json
└── README.md
```

## 许可证

MIT License - 查看 [LICENSE](./LICENSE) 文件了解详情。
