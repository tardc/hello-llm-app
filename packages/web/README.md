# @hello-llm/web

基于 Next.js 的 Web 聊天界面。

## 安装

```bash
npm install
```

## 配置

```bash
cp .env.example .env.local
# 编辑 .env.local 文件，添加你的 API key
```

## 开发

```bash
# 从根目录运行
npm run web

# 或在此目录运行
npm run dev
```

访问 http://localhost:3000

## 构建

```bash
npm run build
```

## 生产模式

```bash
npm start
```

## 环境变量

- `OPENAI_API_KEY` - OpenAI API 密钥（必需）
- `OPENAI_BASE_URL` - API 基础 URL（可选）
- `OPENAI_MODEL` - 默认模型（可选，默认：gpt-3.5-turbo）

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- OpenAI SDK

## 功能

- 实时聊天界面
- 流式响应显示
- 深色模式支持
- 响应式设计
- 消息历史记录
