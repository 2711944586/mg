# 经典品读成果包

项目主题：**守正创新何以开辟新境界——《开辟马克思主义中国化时代化新境界》经典品读汇报**

本仓库包含课堂汇报所需的 PPT、讲稿、过程文档、素材说明和 WebDemo 翻书演示。当前汇报时长按 **10分30秒** 设计，线上演示适配 GitHub Pages 子路径 `/mg/`。

## 目录结构

```text
classic-reading-project/
├── README.md
├── .github/workflows/deploy-pages.yml
├── deliverables/
├── docs/
├── scripts/
└── WebDemo/
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    └── public/
        ├── assets/
        │   ├── css/styles.css
        │   ├── js/book.js
        │   ├── fonts/
        │   ├── photos/
        │   ├── reading-hero.png
        │   └── red-motion-bg.mp4
        ├── lib/
        │   ├── turn.min.js
        │   └── turnjs-license.txt
        ├── samples/steve-jobs/
        └── vendor/jquery-1.7.2.min.js
```

## WebDemo

WebDemo 已改为纯静态 Vite 站点，页面结构和翻页逻辑按参考 zip 里的 `turn.js 4.1.0` 示例迁入：`#book.sj-book`、硬封面、目录页、页深、书脊、开场倒翻动画都由原生 turn.js 驱动，不再通过 React 状态控制翻页。

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

- 打开页面后自动执行参考 zip 同款开场翻书。
- 左右方向键可翻到上一页或下一页。
- 书本左右边缘透明热区可点击翻页。
- 目录页可直接跳转到对应章节。

## 小组照片

WebDemo 的共读现场章节使用三张真实照片：

```text
WebDemo/public/assets/photos/discussion-reading.jpg
WebDemo/public/assets/photos/discussion-notes.jpg
WebDemo/public/assets/photos/discussion-review.jpg
```

如需替换，保持文件名不变即可。根目录不保留微信原图或临时图片。

## 翻书插件

WebDemo 本地化接入参考 zip 中的原版文件：

```text
WebDemo/public/vendor/jquery-1.7.2.min.js
WebDemo/public/lib/turn.min.js
WebDemo/public/samples/steve-jobs/
```

`turn.min.js` 与参考 zip 中的 `lib/turn.min.js` 保持一致；书页尺寸、书脊素材、页纹素材和开场翻阅节奏均按参考项目组织。字体使用本地化的 Noto Serif SC 字体文件，保留当前项目的中文纸本阅读质感。

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

- WebDemo：红色动态背景、真实图片、开场翻书、共读现场板块、静态部署。
- 字体：本地中文衬线字体，避免浏览器默认字体导致的发虚和粗糙。
- 动画：翻页由参考 zip 同款 `turn.js` 原生驱动，书脊、页深、硬封面和页纹素材与示例一致。
- 文件：交付物在 `deliverables/`，过程文档在 `docs/`，WebDemo 源码和素材集中在 `WebDemo/`。
