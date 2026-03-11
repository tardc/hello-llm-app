# Hello LLM App

一个全栈应用，提供 CLI 和 Web 两种方式与 OpenAI 兼容的 LLM 进行交互。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## ✨ 特性

- 🚀 **CLI 工具** - 命令行界面，支持流式输出
- 🌐 **Web 界面** - 基于 Next.js 的现代化聊天界面
- 🤖 支持 OpenAI 兼容的 LLM API
- 🎯 支持自定义 API 端点（Ollama、Azure OpenAI 等）
- 📦 Monorepo 架构，代码组织清晰

## 🚀 快速开始

### 安装

```bash
npm install
```

### 配置

```bash
# CLI 配置
cp packages/cli/.env.example packages/cli/.env

# Web 配置
cp packages/web/.env.example packages/web/.env.local

# 编辑 .env 文件，添加你的 API key
```

### 运行

```bash
# CLI 模式
npm run cli ask "什么是 TypeScript?"

# Web 模式（访问 http://localhost:3000）
npm run web
```

## 📖 使用说明

### CLI 命令

```bash
# Hello 命令
npm run cli hello 张三

# Ask 命令（流式输出）
npm run cli ask "什么是 TypeScript?"

# 指定模型和参数
npm run cli ask "解释闭包" -- --model gpt-4 --temperature 0.8

# 禁用流式输出
npm run cli ask "你好" -- --no-stream
```

> **注意**：当需要传递选项（如 `--model`）时，必须在参数前加 `--` 分隔符。

**选项：**
- `-m, --model <model>` - 指定模型（默认：gpt-3.5-turbo）
- `-t, --temperature <number>` - 温度参数 0-2（默认：0.7）
- `--base-url <url>` - 自定义 API 基础 URL
- `--api-key <key>` - API 密钥
- `--no-stream` - 禁用流式输出

### Web 界面

```bash
# 启动开发服务器
npm run web

# 或使用默认命令
npm run dev
```

访问 http://localhost:3000 使用聊天界面。

## 🏗️ 项目结构

```
hello-llm-app/
├── packages/
│   ├── cli/                    # CLI 工具
│   │   ├── src/
│   │   │   ├── cli.ts         # CLI 入口
│   │   │   ├── index.ts       # 主程序配置
│   │   │   └── commands/      # 命令模块
│   │   └── package.json
│   └── web/                    # Next.js Web 应用
│       ├── src/
│       │   ├── app/           # Next.js App Router
│       │   │   ├── api/       # API 路由
│       │   │   └── ...
│       │   └── components/    # React 组件
│       └── package.json
├── .github/workflows/          # CI/CD
├── CONTRIBUTING.md             # 贡献指南
├── LICENSE                     # MIT 许可证
├── README.md                   # 项目文档
└── package.json                # Workspaces 配置
```

## 🔧 开发脚本

```bash
# CLI 开发
npm run cli <command> [args] -- [options]

# Web 开发
npm run web

# 构建
npm run build              # 构建所有
npm run build:cli          # 只构建 CLI
npm run build:web          # 只构建 Web

# 其他
npm run typecheck          # 类型检查
npm run clean              # 清理构建产物
```

## 🌐 兼容的 API 服务

支持任何兼容 OpenAI API 格式的服务：

### OpenAI
```env
OPENAI_API_KEY=sk-xxxxx
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4
```

### Ollama（本地）
```env
OPENAI_API_KEY=dummy
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_MODEL=llama2
```

### 智谱 AI
```env
OPENAI_API_KEY=your-key
OPENAI_BASE_URL=https://open.bigmodel.cn/api/paas/v4
OPENAI_MODEL=glm-4
```

## 🛠️ 技术栈

### CLI
- TypeScript
- Commander.js
- OpenAI SDK

### Web
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- OpenAI SDK

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详情。

## 📄 许可证

MIT License - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 🔗 链接

- [GitHub Repository](https://github.com/tardc/hello-llm-app)
- [Issues](https://github.com/tardc/hello-llm-app/issues)
