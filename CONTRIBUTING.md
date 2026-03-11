# 贡献指南

感谢你考虑为这个项目做出贡献！

## 开发设置

### 1. 克隆仓库

```bash
git clone https://github.com/tardc/hello-llm-app.git
cd hello-llm-app
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

#### CLI
```bash
cp packages/cli/.env.example packages/cli/.env
# 编辑 packages/cli/.env 添加你的 API key
```

#### Web
```bash
cp packages/web/.env.example packages/web/.env.local
# 编辑 packages/web/.env.local 添加你的 API key
```

### 4. 开发

```bash
# CLI 开发
npm run cli ask "测试"

# Web 开发
npm run web
```

## 项目结构

```
hello-llm-app/
├── packages/
│   ├── cli/          # CLI 工具
│   └── web/          # Next.js Web 应用
├── .github/          # GitHub Actions
├── LICENSE
├── README.md
└── package.json      # Workspaces 配置
```

## 开发流程

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'feat: add some feature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` - 新功能
- `fix:` - 修复 bug
- `docs:` - 文档更新
- `style:` - 代码格式（不影响功能）
- `refactor:` - 重构
- `test:` - 添加测试
- `chore:` - 构建/工具更新

## 代码规范

- 使用 TypeScript
- 遵循现有的代码风格
- 确保类型检查通过：`npm run typecheck`
- 添加适当的注释

## 测试

```bash
# 类型检查
npm run typecheck

# 构建测试
npm run build
```

## 报告问题

如果你发现了 bug 或有功能建议，请创建一个 [Issue](https://github.com/tardc/hello-llm-app/issues)。

## 许可证

通过贡献，你同意你的贡献将在 MIT 许可证下授权。
