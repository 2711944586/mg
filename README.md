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
    │   ├── red-motion-bg.mp4
    │   ├── ai-video-poster.svg
    │   ├── group-photo-1.svg
    │   ├── group-photo-2.svg
    │   ├── group-photo-3.svg
    │   └── photos/
    │       ├── CREDITS.md
    │       ├── chinese-books-library.jpg
    │       ├── china-science-museum.jpg
    │       ├── forbidden-city.jpg
    │       ├── lishui-village.jpg
    │       ├── reading-library.jpg
    │       ├── jiangxi-village.jpg
    │       ├── high-speed-rail.jpg
    │       └── golmud-solar.jpg
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

## 3. WebDemo 自动演示方式

新版 WebDemo 已升级为**自动翻书演示版**：打开页面后会自动播放红色动态视频背景，并按照分镜自动翻阅书籍页面。它不是普通网页，而是用于课堂投屏的“PPT总结演示”：左页讲论证链，右页展示真实图片、时间轴、案例拼贴、线下讨论照片预留区和最终总结。课堂投屏时建议直接全屏打开：

```text
https://2711944586.github.io/mg/
```

演示控制：

- 自动播放：默认每约7秒翻到下一页。
- 暂停/继续：点击“暂停演示/继续演示”，或按空格键。
- 上一页/下一页：点击按钮，或按键盘左右方向键。
- 分镜跳转：点击底部进度条，可快速跳到对应章节。

9个自动分镜，完整对应12页PPT逻辑：

1. 开卷：从一个主问题进入经典，对应PPT 1-2。
2. 主线：从毛概看理论发展的脉络，对应PPT 3。
3. 方法：守正创新不是两选一，对应PPT 4。
4. 根脉：两个结合让理论扎根中国，对应PPT 5-6。
5. 现实：问题导向把理论带入现实，对应PPT 7。
6. 共读：线下讨论照片预留区，对应PPT 8。
7. 展厅：数字化成果服务经典品读，对应PPT 9-10。
8. 青年：从理论自觉到实践担当，对应PPT 11。
9. 合卷：用三句话总结整套PPT，对应PPT 12。

新版演示使用了多张真实图片素材，存放在 `WebDemo/public/photos/`，来源说明见 `WebDemo/public/photos/CREDITS.md`。

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
- WebDemo展示控制在1分钟左右，建议让自动翻书播放1—2页，再手动跳到“两个结合”或“现实”分镜配合讲述。
- 最后一页结束语放慢语速，增强收束感。
- 正式汇报前至少完整计时两遍，第一遍看是否超时，第二遍调整停顿和过渡。

---

## 5. 如何替换小组照片和AI视频

### 替换照片

当前 WebDemo 为线下讨论专门预留了3个照片位。页面会优先读取真实照片：

```text
WebDemo/public/group-photo-1.jpg
WebDemo/public/group-photo-2.jpg
WebDemo/public/group-photo-3.jpg
```

如果真实照片尚未提供，会自动退回到3张 SVG 占位图：

```text
WebDemo/public/group-photo-1.svg
WebDemo/public/group-photo-2.svg
WebDemo/public/group-photo-3.svg
```

因此后续替换时，只要把你提供的线下讨论图片改名为以上3个 `.jpg` 文件并放进 `WebDemo/public/`，不需要改代码。

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
- WebDemo：已升级为红色动态视频背景的自动翻书演示，包含9个核心分镜、真实图片素材、PPT页码映射、线下讨论照片预留区、自动播放、手动控场和 GitHub Pages 静态部署。
- AI视频脚本：时长58秒，包含旁白、字幕、画面和音乐建议。
- 素材清单：覆盖 PPT、WebDemo、AI视频和版权注意事项。
