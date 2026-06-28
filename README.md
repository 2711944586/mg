# 经典品读成果包

项目主题：**守正创新何以开辟新境界——《开辟马克思主义中国化时代化新境界》经典品读汇报**

本仓库包含课堂汇报所需的 PPT、讲稿、活动总结、素材说明和 WebDemo 自动翻书演示。当前汇报时长按 **10分30秒** 设计，线上演示已适配 GitHub Pages 子路径 `/mg/`。

## 目录结构

```text
classic-reading-project/
├── README.md
├── .github/workflows/deploy-pages.yml
├── deliverables/
│   ├── 守正创新经典品读汇报.pptx
│   └── 汇报讲稿.docx
├── docs/
│   ├── PLAN.md
│   ├── PPT大纲与逐页文案.md
│   ├── 汇报讲稿.md
│   ├── 经典品读活动总结.md
│   ├── 主题短片脚本与分镜.md
│   └── 素材清单.md
├── scripts/
│   └── build_deliverables.py
└── WebDemo/
    ├── package.json
    ├── index.html
    ├── public/
    │   ├── favicon.svg
    │   ├── reading-hero.png
    │   ├── red-motion-bg.mp4
    │   ├── photos/
    │   └── vendor/
    └── src/
        ├── App.tsx
        ├── main.tsx
        └── style.css
```

## WebDemo

本地运行：

```bash
cd WebDemo
npm install
npm run dev
```

生产构建：

```bash
cd WebDemo
npm run build
```

线上地址：

```text
https://2711944586.github.io/mg/
```

演示控制：

- 默认自动播放，每章约 10.8 秒。
- 空格键或“停留/继续”控制播放。
- 左右方向键或“上一章/下一章”切换章节。
- 底部进度条可直接跳转章节。

## 汇报材料

- `deliverables/守正创新经典品读汇报.pptx`：正式 PPT。
- `deliverables/汇报讲稿.docx`：Word 版讲稿。
- `docs/PPT大纲与逐页文案.md`：12 页 PPT 文案与设计说明。
- `docs/汇报讲稿.md`：10分30秒口语稿。
- `docs/经典品读活动总结.md`：活动总结与现场照片说明。
- `docs/主题短片脚本与分镜.md`：45-60 秒主题短片脚本。
- `docs/素材清单.md`：PPT、WebDemo、短片素材说明。
- `WebDemo/public/photos/CREDITS.md`：公共图片来源记录。

## 小组照片

WebDemo 的“线下讨论”章节使用三张真实现场照片：

```text
WebDemo/public/photos/discussion-reading.jpg
WebDemo/public/photos/discussion-notes.jpg
WebDemo/public/photos/discussion-review.jpg
```

如需替换，保持文件名不变即可。建议三张照片分别对应“读原文”“辨问题”“定表达”，画面要自然、清晰、能看出真实讨论过程。根目录不保留微信原图或临时图片。

## 翻书插件

WebDemo 已本地化接入 `turn.js`：

```text
WebDemo/public/vendor/jquery-3.7.1.min.js
WebDemo/public/vendor/turn.js
WebDemo/public/vendor/turn.min.js
WebDemo/public/vendor/turnjs-license.txt
```

应用运行时会从 `/vendor/` 顺序加载 jQuery 和官方 `turn.js` 文件，不依赖外部 CDN，适合 GitHub Pages 静态部署。翻页动画由插件原生 `display: "double"`、`gradients`、`acceleration`、`elevation` 驱动；样式层只负责书页质感和舞台排版，避免覆盖插件生成的折页层。

## 部署

仓库包含 GitHub Pages 工作流：

```text
.github/workflows/deploy-pages.yml
```

推送 `main` 分支后，GitHub Actions 会自动执行：

1. 安装 WebDemo 依赖。
2. 执行 `npm run build`。
3. 上传 `WebDemo/dist`。
4. 发布到 GitHub Pages。

首次使用时，在 GitHub 仓库 `Settings -> Pages` 中确认 Source 为 `GitHub Actions`。

## 彩排时间

| 页码 | 内容 | 时间 |
|---|---|---:|
| 1 | 封面 | 20秒 |
| 2 | 选题原因 | 45秒 |
| 3 | 毛概理论主线 | 60秒 |
| 4 | 守正创新 | 60秒 |
| 5 | 第一个结合 | 65秒 |
| 6 | 第二个结合 | 65秒 |
| 7 | 问题导向与现实案例 | 70秒 |
| 8 | 小组阅读过程 | 50秒 |
| 9 | WebDemo展示 | 60秒 |
| 10 | 主题短片展示 | 40秒 |
| 11 | 青年落脚 | 55秒 |
| 12 | 总结 | 40秒 |
| 合计 |  | 630秒 |

## 自检

- WebDemo：红色动态背景、真实图片、自动翻书、线下讨论板块、静态部署。
- 字体：标题使用宋楷气质字体栈，正文使用更像纸本文稿的中文阅读字体栈。
- 动画：翻页由本地官方 `turn.js` 插件驱动，按钮、方向键和自动播放负责章节节奏；桌面端和移动端均已验证上一章/下一章可用。
- 文件：交付物在 `deliverables/`，过程文档在 `docs/`，WebDemo 源码和素材在 `WebDemo/`。
