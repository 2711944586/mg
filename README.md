# 经典品读成果包说明

项目名称：**守正创新何以开辟新境界——《开辟马克思主义中国化时代化新境界》经典品读汇报**

本成果包围绕《开辟马克思主义中国化时代化新境界》展开，结合毛概课程中的马克思主义中国化时代化、“两个结合”、实事求是、群众路线、独立自主、中国式现代化等知识点，形成 PPT 文案、10分30秒汇报讲稿、活动总结、WebDemo、AI视频脚本和素材清单。

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
├── AI视频脚本与分镜.md
├── 素材清单.md
└── WebDemo/
    ├── package.json
    ├── index.html
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    │   ├── reading-hero.png
    │   ├── ai-video-poster.svg
    │   ├── group-photo-1.svg
    │   ├── group-photo-2.svg
    │   └── group-photo-3.svg
    └── src/
        ├── App.tsx
        ├── main.tsx
        └── style.css
```

---

## 2. 如何运行 WebDemo

进入 WebDemo 目录：

```bash
cd WebDemo
npm install
npm run dev
```

运行后浏览器访问终端中显示的本地地址，默认通常为：

```text
http://127.0.0.1:5173/
```

如需检查构建是否正常：

```bash
npm run build
```

当前 WebDemo 已适配 GitHub Pages 子路径 `/mg/`，可静态部署到：

```text
https://2711944586.github.io/mg/
```

---

## 3. WebDemo 展示顺序

建议课堂展示时按以下顺序操作：

1. 首页：展示汇报主题和副标题。
2. 经典导读：说明读什么、为什么读。
3. 理论时间轴：对应毛概课程主线。
4. 关键词云：现场点击“守正创新”“两个结合”“问题导向”等关键词。
5. 现实案例卡：选讲科技自立自强、乡村振兴、生态文明、传统文化创造性转化。
6. 互动问答：邀请同学作答，提交后显示分数和解析。
7. AI视频区：播放或展示短片占位。
8. 小组心得墙：展示成员阅读后的理解。
9. 汇报结语：回扣“在经典中坚定方向，在实践中增长本领”。

---

## 4. 如何彩排10分30秒汇报

PPT 共12页，建议按以下时间控制：

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
| 10 | AI视频展示 | 40秒 |
| 11 | 青年落脚 | 55秒 |
| 12 | 总结 | 40秒 |
| 合计 |  | 630秒 |

彩排建议：

- 第3、5、7页信息较密，讲述时只选关键例子，不临时扩展太多内容。
- WebDemo展示控制在1分钟左右，重点演示关键词和互动问答即可。
- 最后一页结束语放慢语速，增强收束感。
- 正式汇报前至少完整计时两遍，第一遍看是否超时，第二遍调整停顿和过渡。

---

## 5. 如何替换小组照片和AI视频

### 替换照片

当前 WebDemo 使用了3张 SVG 占位图：

```text
WebDemo/public/group-photo-1.svg
WebDemo/public/group-photo-2.svg
WebDemo/public/group-photo-3.svg
```

如果使用真实照片，可以将照片放入 `WebDemo/public/`，然后在 `WebDemo/src/App.tsx` 的 `reflections` 数组中修改文件名。例如：

```tsx
image: '/group-photo-1.jpg'
```

建议照片内容对应：

- 照片1：小组成员进行经典文献精读。
- 照片2：小组成员开展交流讨论。
- 照片3：小组成员完善PPT、WebDemo或AI视频脚本。

### 替换AI视频

当前视频区使用 `WebDemo/public/ai-video-poster.svg` 作为占位封面。正式视频完成后，可放入：

```text
WebDemo/public/ai-video.mp4
```

随后将 `App.tsx` 中的视频占位区域改成 `<video controls>` 即可。AI视频脚本与分镜见 `AI视频脚本与分镜.md`。

---

## 6. 最终提交材料清单

建议提交以下材料：

- `守正创新经典品读汇报.pptx`：可编辑正式PPT。
- `汇报讲稿.docx`：Word版汇报讲稿。
- `PPT大纲与逐页文案.md` 或据此制作的正式 PPT 文件。
- `汇报讲稿.md`。
- `经典品读活动总结.md`。
- `AI视频脚本与分镜.md`。
- `素材清单.md`。
- `WebDemo/` 完整目录。
- 小组真实活动照片3张。
- 如已制作，附 AI 视频文件或视频链接。

---

## 7. GitHub Actions 静态部署

仓库已包含 GitHub Pages 工作流：

```text
.github/workflows/deploy-pages.yml
```

工作流会在 `main` 分支 push 后自动执行：

1. 安装 `WebDemo` 依赖。
2. 执行 `npm run build`。
3. 上传 `WebDemo/dist`。
4. 使用 GitHub Pages 发布。

首次部署前，请在 GitHub 仓库设置中确认：

- `Settings` → `Pages`
- `Build and deployment` → `Source` 选择 `GitHub Actions`

---

## 8. 自检结果

- PPT：12页，逻辑为“经典出发—毛概进入—文本展开—现实验证—青年落脚”，符合10分30秒汇报。
- PPTX：已生成 `守正创新经典品读汇报.pptx`，共12页。
- 讲稿：按12页分段，口语化表达，适合自然偏快语速；已生成 `汇报讲稿.docx`。
- 活动总结：包含学习、交流、讨论、成果制作、反思全过程，并预留3张照片说明。
- WebDemo：包含首页、翻书动画、理论时间轴、关键词解释、现实案例卡、互动问答打分、AI视频区、小组心得墙和结语区，可静态部署。
- AI视频脚本：时长58秒，包含旁白、字幕、画面和音乐建议。
- 素材清单：覆盖 PPT、WebDemo、AI视频和版权注意事项。
