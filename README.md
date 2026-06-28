# 经典品读成果包说明

项目名称：**守正创新何以开辟新境界——《开辟马克思主义中国化时代化新境界》经典品读汇报**

本成果包围绕《开辟马克思主义中国化时代化新境界》展开，结合毛概课程中的马克思主义中国化时代化、“两个结合”、实事求是、群众路线、独立自主、中国式现代化等知识点，形成PPT文案、10分30秒汇报讲稿、活动总结、WebDemo、主题短片脚本和素材清单。

---

## 1. 文件结构

```text
classic-reading-project/
├── README.md
├── 守正创新经典品读汇报.pptx
├── 汇报讲稿.docx
├── PPT大纲与逐页文案.md
├── 汇报讲稿.md
├── 经典品读活动总结.md
├── 主题短片脚本与分镜.md
├── 素材清单.md
└── WebDemo/
    ├── package.json
    ├── index.html
    ├── vite.config.ts
    ├── public/
    │   ├── reading-hero.png
    │   ├── red-motion-bg.mp4
    │   ├── theme-video-poster.svg
    │   ├── group-photo-1.svg
    │   ├── group-photo-2.svg
    │   ├── group-photo-3.svg
    │   └── photos/
    │       ├── CREDITS.md
    │       ├── national-library-reading-room.jpg
    │       ├── national-library-hall.jpg
    │       ├── ten-bamboo-page.jpg
    │       ├── forbidden-city.jpg
    │       ├── wuyuan-village.jpg
    │       ├── fast-telescope.jpg
    │       ├── jiangxi-village.jpg
    │       ├── saihanba-forest.jpg
    │       └── high-speed-rail.jpg
    └── src/
        ├── App.tsx
        ├── main.tsx
        └── style.css
```

---

## 2. 如何运行 WebDemo

进入WebDemo目录：

```bash
cd WebDemo
npm install
npm run dev
```

运行后浏览器访问终端中显示的本地地址，默认通常为：

```text
http://127.0.0.1:5173/
```

检查构建：

```bash
npm run build
```

当前WebDemo已适配GitHub Pages子路径 `/mg/`，线上地址为：

```text
https://2711944586.github.io/mg/
```

---

## 3. WebDemo 自动演示方式

WebDemo现在是课堂投屏用的**自动翻书总结演示**。打开页面后，红色动态背景会持续播放，主体以左右书页、书脊、纸张厚度、翻页阴影和进度条推进整套汇报逻辑。

9个章节对应12页PPT：

1. 开卷：从一个问题翻开经典，对应PPT 1-2。
2. 主线：理论在回答中国问题中生长，对应PPT 3。
3. 方法：守正创新不是两选一，对应PPT 4。
4. 根脉：两个结合让理论扎根中国，对应PPT 5-6。
5. 现实：问题导向让理论进入现场，对应PPT 7。
6. 共读：把讨论留在真实现场，对应PPT 8。
7. 展厅：数字展厅服务思想表达，对应PPT 9-10。
8. 青年：从理论自觉到实践担当，对应PPT 11。
9. 合卷：用三句话收束整套汇报，对应PPT 12。

演示控制：

- 默认自动播放，每章约10.8秒。
- 点击“停留/继续”或按空格键可控制播放。
- 点击“上一章/下一章”或按键盘左右方向键可切换。
- 底部进度条可跳转章节。

---

## 4. 如何彩排10分30秒汇报

PPT共12页，建议按以下时间控制：

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

彩排建议：

- 第3、5、7页信息较密，只讲关键例子，不临时扩展。
- 第9页展示WebDemo时，建议让自动翻书播放一章，再手动跳到“现实”或“合卷”分镜。
- 第12页最后一句放慢语速，增强收束感。
- 正式汇报前完整计时两遍，第一遍看是否超时，第二遍调整停顿和过渡。

---

## 5. 如何替换小组照片和主题短片

### 替换线下讨论照片

WebDemo会优先读取以下小组自摄照片：

```text
WebDemo/public/group-photo-1.jpg
WebDemo/public/group-photo-2.jpg
WebDemo/public/group-photo-3.jpg
```

建议照片内容：

- `group-photo-1.jpg`：读原文，经典文献精读。
- `group-photo-2.jpg`：辨问题，小组交流讨论。
- `group-photo-3.jpg`：定表达，成果打磨和彩排。

如果还没有放入照片，页面会先使用同主题画面保持完整版式。

### 替换主题短片

当前第七章使用 `WebDemo/public/theme-video-poster.svg` 作为主题短片封面。正式短片完成后，可放入：

```text
WebDemo/public/theme-video.mp4
```

再把 `App.tsx` 中的封面图区域替换为视频标签即可。短片分镜见 `主题短片脚本与分镜.md`。

---

## 6. GitHub Actions 静态部署

仓库已包含GitHub Pages工作流：

```text
.github/workflows/deploy-pages.yml
```

工作流会在 `main` 分支 push 后自动执行：

1. 安装WebDemo依赖。
2. 执行 `npm run build`。
3. 上传 `WebDemo/dist`。
4. 使用GitHub Pages发布。

首次部署前，请在GitHub仓库设置中确认：

- `Settings` → `Pages`
- `Build and deployment` → `Source` 选择 `GitHub Actions`

---

## 7. 最终提交材料清单

- `守正创新经典品读汇报.pptx`：可编辑正式PPT。
- `汇报讲稿.docx`：Word版汇报讲稿。
- `PPT大纲与逐页文案.md`：逐页文案与设计说明。
- `汇报讲稿.md`：10分30秒口语稿。
- `经典品读活动总结.md`：活动总结与照片说明。
- `主题短片脚本与分镜.md`：主题短片脚本。
- `素材清单.md`：PPT、WebDemo、短片素材说明。
- `WebDemo/`：可本地运行、可静态部署的自动翻书演示。
- 小组真实活动照片3张。
- 如已制作，附主题短片文件或视频链接。

---

## 8. 自检结果

- PPT：12页，逻辑为“经典出发-毛概进入-文本展开-现实验证-青年落脚”。
- 讲稿：按12页分段，口语化表达，适合10分30秒汇报。
- WebDemo：红色动态背景、自动翻书、真实图片、九章总结、线下讨论现场影像、静态部署适配。
- 主题短片：时长45-60秒，承接“从书页到时代场景，从经典阅读到青年担当”。
- 素材：真实图片来源已记录在 `WebDemo/public/photos/CREDITS.md`。

