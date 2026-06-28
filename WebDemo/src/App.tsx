import { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

type ImageVisual = {
  type: 'image';
  image: string;
  imageAlt: string;
  caption: string;
  variant?: 'portrait' | 'wide';
};

type TimelineVisual = {
  type: 'timeline';
  nodes: Array<{
    year: string;
    label: string;
    note: string;
  }>;
};

type DiptychVisual = {
  type: 'diptych';
  images: Array<{
    src: string;
    alt: string;
    label: string;
    note: string;
  }>;
};

type CasesVisual = {
  type: 'cases';
  cases: Array<{
    title: string;
    theory: string;
    image: string;
    alt: string;
  }>;
};

type DiscussionVisual = {
  type: 'discussion';
  slots: Array<{
    image: string;
    fallback: string;
    sceneLabel: string;
    title: string;
    note: string;
  }>;
};

type StudioVisual = {
  type: 'studio';
  heroImage: string;
  heroAlt: string;
  caption: string;
  modules: Array<{
    title: string;
    note: string;
    image: string;
    alt: string;
  }>;
};

type ReflectionVisual = {
  type: 'reflection';
  panels: Array<{
    image: string;
    alt: string;
    label: string;
    title: string;
    note: string;
  }>;
};

type SummaryVisual = {
  type: 'summary';
  image?: string;
  imageAlt?: string;
  points: Array<{
    title: string;
    note: string;
  }>;
};

type SceneVisual =
  | ImageVisual
  | TimelineVisual
  | DiptychVisual
  | CasesVisual
  | DiscussionVisual
  | StudioVisual
  | ReflectionVisual
  | SummaryVisual;

type Scene = {
  chapter: string;
  slideRange: string;
  title: string;
  thesis: string;
  proof: string[];
  takeaway: string;
  tags: string[];
  cue: string;
  turnImage: string;
  visual: SceneVisual;
};

const sceneDuration = 10800;
const turnDuration = 600;
const bookWidth = 1152;
const bookHeight = 752;

type TurnInstance = {
  turn: (...args: unknown[]) => unknown;
  bind: (...args: unknown[]) => TurnInstance;
  unbind: (...args: unknown[]) => TurnInstance;
  css: (...args: unknown[]) => TurnInstance;
};

type TurnJQuery = ((element: HTMLElement | Window | Document | string) => TurnInstance) & {
  isTouch?: boolean;
};

type FlipBookHandle = {
  goToScene: (index: number) => boolean;
  next: () => boolean;
  previous: () => boolean;
};

declare global {
  interface Window {
    jQuery?: TurnJQuery;
    $?: TurnJQuery;
  }
}

const scenes: Scene[] = [
  {
    chapter: '第一章',
    slideRange: '开卷 · 第1-2页',
    title: '从一个问题翻开经典',
    thesis: '为什么马克思主义必须中国化时代化，青年又怎样把经典阅读转化为理解时代的能力。',
    proof: [
      '这次品读从课程主线出发，把文献放回“马克思主义中国化时代化”的历史脉络中理解。',
      '我们不把经典当作结论清单，而是围绕时代之问、理论之答、青年之责建立论证。',
      '开场只保留一个核心追问，让后面的守正创新、两个结合和现实案例自然展开。',
    ],
    takeaway: '带着现实问题进入文本，经典才会真正发声。',
    tags: ['核心问题', '经典品读', '青年视角'],
    cue: '一场好的经典品读，起点不是背诵，而是把问题问准。',
    turnImage: 'photos/national-library-reading-room.jpg',
    visual: {
      type: 'image',
      image: 'photos/national-library-reading-room.jpg',
      imageAlt: '中国国家图书馆阅览室',
      caption: '从静心阅读开始，把问题带进文本',
    },
  },
  {
    chapter: '第二章',
    slideRange: '主线 · 第3页',
    title: '理论在回答中国问题中生长',
    thesis: '马克思主义中国化时代化不是孤立概念，而是贯穿革命、建设、改革和新时代的理论主线。',
    proof: [
      '毛泽东思想回答中国革命和建设中的道路问题。',
      '中国特色社会主义理论体系回答改革开放和社会主义现代化建设问题。',
      '习近平新时代中国特色社会主义思想回答新时代坚持和发展中国特色社会主义的重大时代课题。',
    ],
    takeaway: '理论从来不是静止的，它在实践中获得新的表达。',
    tags: ['理论脉络', '时代课题', '实践发展'],
    cue: '把文献放进毛概主线里看，才能看见“为什么必须不断推进”。',
    turnImage: 'photos/cuhk-reading-room.jpg',
    visual: {
      type: 'timeline',
      nodes: [
        { year: '原理', label: '马克思主义基本原理', note: '科学世界观和方法论' },
        { year: '革命', label: '毛泽东思想', note: '回答中国革命道路问题' },
        { year: '改革', label: '中国特色社会主义理论体系', note: '回答现代化建设问题' },
        { year: '新时代', label: '习近平新时代中国特色社会主义思想', note: '回答新的时代课题' },
        { year: '继续', label: '推进中国化时代化', note: '在实践中开辟新境界' },
      ],
    },
  },
  {
    chapter: '第三章',
    slideRange: '方法 · 第4页',
    title: '守正创新不是两选一',
    thesis: '守正保证根本方向，创新回应新的问题，二者统一在马克思主义鲜明的实践品格之中。',
    proof: [
      '守正，是坚持马克思主义基本立场、观点、方法，坚持人民立场和实事求是。',
      '创新，是回应中国之问、世界之问、人民之问、时代之问。',
      '只讲守正容易停在过去，只讲创新又可能失去根基；二者统一，理论才有生命力。',
    ],
    takeaway: '守正不是守旧，创新不是离根。',
    tags: ['守正创新', '实事求是', '人民立场'],
    cue: '这一章回答方法问题：方向不能丢，问题也不能绕开。',
    turnImage: 'photos/ten-bamboo-page.jpg',
    visual: {
      type: 'image',
      image: 'photos/ten-bamboo-page.jpg',
      imageAlt: '十竹斋书画谱古籍书页',
      caption: '在根脉中守正，在时代中创新',
    },
  },
  {
    chapter: '第四章',
    slideRange: '根脉 · 第5-6页',
    title: '两个结合让理论扎根中国',
    thesis: '同中国具体实际相结合，解决理论如何不悬空；同中华优秀传统文化相结合，解决理论如何有根脉。',
    proof: [
      '第一个结合强调从中国国情出发，不能照搬外来模式。',
      '第二个结合强调中华文明土壤，推动传统文化创造性转化、创新性发展。',
      '两个结合共同说明，科学理论既要回应实践，也要获得文化生命。',
    ],
    takeaway: '理论扎根中国，才能真正回应中国。',
    tags: ['中国具体实际', '中华优秀传统文化', '文化自信'],
    cue: '实际与文化不是背景板，而是理论创新能够落地生根的两条根系。',
    turnImage: 'photos/forbidden-city.jpg',
    visual: {
      type: 'diptych',
      images: [
        {
          src: 'photos/wuyuan-village.jpg',
          alt: '江西婺源传统村落',
          label: '中国具体实际',
          note: '从国情与人民生活出发',
        },
        {
          src: 'photos/forbidden-city.jpg',
          alt: '故宫宫殿建筑',
          label: '中华文化根脉',
          note: '在文明土壤中创造转化',
        },
      ],
    },
  },
  {
    chapter: '第五章',
    slideRange: '现实 · 第7页',
    title: '问题导向让理论进入现实',
    thesis: '理论创新的价值，不在于堆砌抽象词语，而在于解释现实、回应现实、指导现实。',
    proof: [
      '科技自立自强回应全球科技竞争和新质生产力发展。',
      '乡村振兴回应发展不平衡和共同富裕的现实课题。',
      '生态文明回应人民对美好生活和良好生态环境的需要。',
    ],
    takeaway: '现实问题在哪里，理论生命力就要体现在哪里。',
    tags: ['新质生产力', '乡村振兴', '生态文明', '中国式现代化'],
    cue: '这一页把抽象论述落回看得见的中国现场。',
    turnImage: 'photos/fast-telescope.jpg',
    visual: {
      type: 'cases',
      cases: [
        {
          title: '科技自立自强',
          theory: '时代化与新质生产力',
          image: 'photos/fast-telescope.jpg',
          alt: '中国FAST射电望远镜',
        },
        {
          title: '乡村振兴',
          theory: '中国实际与共同富裕',
          image: 'photos/jiangxi-village.jpg',
          alt: '江西传统村落',
        },
        {
          title: '绿色发展',
          theory: '生态文明与现代化',
          image: 'photos/saihanba-forest.jpg',
          alt: '塞罕坝国家森林公园',
        },
        {
          title: '交通强国',
          theory: '独立自主与道路选择',
          image: 'photos/high-speed-rail.jpg',
          alt: '高铁列车停靠站台',
        },
        {
          title: '理论研究',
          theory: '调查研究与问题解释',
          image: 'photos/cass-building.jpg',
          alt: '中国社会科学院建筑',
        },
        {
          title: '绿色转型',
          theory: '发展方式与质量变革',
          image: 'photos/golmud-solar.jpg',
          alt: '格尔木太阳能项目',
        },
      ],
    },
  },
  {
    chapter: '第六章',
    slideRange: '共读 · 第8页',
    title: '几张照片里的共读现场',
    thesis: '我们把文本、课堂笔记和案例材料摊开来，一边读一边改，最后把零散想法收成可以讲清楚的表达。',
    proof: [
      '先把原文读顺，标出“守正创新”“两个结合”“问题导向”等关键词。',
      '再把毛概主线接上，确认每个概念应该落在哪一页、哪一句。',
      '最后一起改讲法、定节奏，把现场讨论变成完整汇报。',
    ],
    takeaway: '坐下来认真读过，讲出来才有底气。',
    tags: ['小组共读', '现场讨论', '汇报打磨'],
    cue: '这一页放小组讨论照片，也把准备过程讲清楚。',
    turnImage: 'photos/national-library-hall.jpg',
    visual: {
      type: 'discussion',
      slots: [
        {
          image: 'photos/discussion-reading.jpg',
          fallback: 'photos/cuhk-reading-room.jpg',
          sceneLabel: '现场 01',
          title: '围坐读文本',
          note: '先把原文读顺，把关键词和课程主线对上',
        },
        {
          image: 'photos/discussion-notes.jpg',
          fallback: 'photos/chinese-books-library.jpg',
          sceneLabel: '现场 02',
          title: '一起辨问题',
          note: '把“两个结合”和现实案例放在一起讨论',
        },
        {
          image: 'photos/discussion-review.jpg',
          fallback: 'photos/national-library-hall.jpg',
          sceneLabel: '现场 03',
          title: '收束成表达',
          note: '确定演示顺序、讲稿节奏和最终呈现方式',
        },
      ],
    },
  },
  {
    chapter: '第七章',
    slideRange: '展厅 · 第9-10页',
    title: '数字展厅服务思想表达',
    thesis: '网页演示和主题短片不是装饰，而是把抽象理论转化为可观看、可停留、可复盘的学习路径。',
    proof: [
      '自动翻书串起经典导读、理论时间轴、现实案例和最终总结。',
      '影像短片把书页、关键词、现实中国和青年担当压缩成情感线索。',
      '多媒体表达的边界很清楚：技术服务内容，画面服务思想。',
    ],
    takeaway: '让形式变得有用，而不是让形式抢走主题。',
    tags: ['自动演示', '主题短片', '课堂呈现'],
    cue: '这一章说明我们为什么要把成果做成可以被观看和复盘的展厅。',
    turnImage: 'photos/tiananmen-square-flag.jpg',
    visual: {
      type: 'studio',
      heroImage: 'photos/tiananmen-square-flag.jpg',
      heroAlt: '天安门广场国旗',
      caption: '以红色中国现场收束展厅气质',
      modules: [
        {
          title: '自动翻书',
          note: '章节推进',
          image: 'photos/national-library-reading-room.jpg',
          alt: '国家图书馆阅览室',
        },
        {
          title: '理论时间轴',
          note: '压缩主线',
          image: 'photos/cuhk-reading-room.jpg',
          alt: '大学图书馆阅览室',
        },
        {
          title: '现实图像',
          note: '案例可见',
          image: 'photos/fast-telescope.jpg',
          alt: 'FAST射电望远镜',
        },
        {
          title: '共读现场',
          note: '承接讨论',
          image: 'photos/chinese-books-library.jpg',
          alt: '图书馆中文书籍',
        },
        {
          title: '主题短片',
          note: '强化表达',
          image: 'photos/china-flag-beijing.jpg',
          alt: '北京上空飘扬的国旗',
        },
        {
          title: '最终收束',
          note: '总结全篇',
          image: 'photos/ten-bamboo-page.jpg',
          alt: '古籍书页',
        },
      ],
    },
  },
  {
    chapter: '第八章',
    slideRange: '青年 · 第11页',
    title: '从理论自觉到实践担当',
    thesis: '读经典的终点，是把个人成长放进国家需要和时代趋势中思考。',
    proof: [
      '学理论，不停留在背诵，而是掌握分析问题的方法。',
      '看时代，不只是旁观变化，而是理解变化背后的方向。',
      '做青年，不只谈理想，更要提升本领、服务社会。',
    ],
    takeaway: '经典阅读最终要转化为方向感、判断力和行动力。',
    tags: ['理论自觉', '实践担当', '青春使命'],
    cue: '把理论重新落回大学生自己，汇报才有真正的收束力。',
    turnImage: 'photos/national-library-hall.jpg',
    visual: {
      type: 'reflection',
      panels: [
        {
          image: 'photos/cuhk-reading-room.jpg',
          alt: '图书馆阅览室',
          label: '知识',
          title: '读原著',
          note: '先把概念、论证和课程主线读准',
        },
        {
          image: 'photos/cass-building.jpg',
          alt: '中国社会科学院建筑',
          label: '研究',
          title: '辨问题',
          note: '用理论解释中国现实中的具体课题',
        },
        {
          image: 'photos/fuxing-train-guiyang.jpg',
          alt: '复兴号列车',
          label: '现场',
          title: '看发展',
          note: '在科技、交通、乡村与生态中看见实践',
        },
        {
          image: 'photos/saihanba-forest.jpg',
          alt: '塞罕坝森林',
          label: '行动',
          title: '作回应',
          note: '把阅读沉淀成判断力、方向感和本领',
        },
      ],
    },
  },
  {
    chapter: '第九章',
    slideRange: '合卷 · 第12页',
    title: '用三句话收束整套汇报',
    thesis: '守正创新、两个结合、青年担当，构成这次经典品读的完整闭环。',
    proof: [
      '守正创新，是开辟新境界的方法。',
      '两个结合，是理论扎根中国、回应时代的路径。',
      '青年担当，是经典阅读最终要落到的行动。',
    ],
    takeaway: '在经典中坚定方向，在实践中增长本领。',
    tags: ['全篇总结', '最终收束', '课堂展示'],
    cue: '最后把全篇收成一句话：理解时代，也认识自己。',
    turnImage: 'photos/ten-bamboo-page.jpg',
    visual: {
      type: 'summary',
      image: 'photos/china-flag-beijing.jpg',
      imageAlt: '北京上空飘扬的国旗',
      points: [
        { title: '守正创新', note: '坚持根本方向，回应时代问题' },
        { title: '两个结合', note: '扎根中国实际，赓续文化根脉' },
        { title: '青年担当', note: '把理论方法转化为行动能力' },
      ],
    },
  },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function getVisualAssetNames(visual: SceneVisual) {
  switch (visual.type) {
    case 'image':
      return [visual.image];
    case 'diptych':
      return visual.images.map((image) => image.src);
    case 'cases':
      return visual.cases.map((item) => item.image);
    case 'discussion':
      return visual.slots.flatMap((slot) => [slot.image, slot.fallback]);
    case 'studio':
      return [visual.heroImage, ...visual.modules.map((module) => module.image)];
    case 'reflection':
      return visual.panels.map((panel) => panel.image);
    case 'summary':
      return visual.image ? [visual.image] : [];
    case 'timeline':
      return [];
    default:
      return [];
  }
}

function getSceneAssetNames(scene: Scene) {
  return [scene.turnImage, ...getVisualAssetNames(scene.visual)];
}

function getInitialScene() {
  const sceneParam = new URLSearchParams(window.location.search).get('scene');
  const parsedScene = Number(sceneParam);
  if (Number.isInteger(parsedScene) && parsedScene >= 1 && parsedScene <= scenes.length) {
    return parsedScene - 1;
  }
  return 0;
}

function TextPage({ scene, className = '' }: { scene: Scene; className?: string }) {
  return (
    <article className={`page page--text ${className}`.trim()}>
      <div className="page__meta">
        <p className="page__eyebrow">{scene.chapter}</p>
        <span>{scene.slideRange}</span>
      </div>
      <h2>{scene.title}</h2>
      <p className="page__thesis">{scene.thesis}</p>
      <ul className="proof-list">
        {scene.proof.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <blockquote>{scene.takeaway}</blockquote>
      <div className="tag-row" aria-label="关键词">
        {scene.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function ImageVisualPage({ visual }: { visual: ImageVisual }) {
  return (
    <figure className={visual.variant === 'portrait' ? 'photo-frame photo-frame--portrait' : 'photo-frame'}>
      <img src={asset(visual.image)} alt={visual.imageAlt} />
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}

function TimelineVisualPage({ visual }: { visual: TimelineVisual }) {
  return (
    <div className="timeline-board">
      {visual.nodes.map((node, index) => (
        <article key={node.label} className="timeline-node">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{node.year}</strong>
            <h3>{node.label}</h3>
            <p>{node.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function DiptychVisualPage({ visual }: { visual: DiptychVisual }) {
  return (
    <div className="diptych-board">
      {visual.images.map((image, index) => (
        <figure key={image.label} className={index === 0 ? 'diptych-card diptych-card--lower' : 'diptych-card'}>
          <img src={asset(image.src)} alt={image.alt} />
          <figcaption>
            <strong>{image.label}</strong>
            <span>{image.note}</span>
          </figcaption>
        </figure>
      ))}
      <div className="diptych-bridge">
        <span>两个结合</span>
        <strong>让科学理论在中国大地上有方向，也有根脉</strong>
      </div>
    </div>
  );
}

function CasesVisualPage({ visual }: { visual: CasesVisual }) {
  return (
    <div className="case-board">
      {visual.cases.map((item) => (
        <article key={item.title} className="case-card">
          <img src={asset(item.image)} alt={item.alt} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.theory}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function DiscussionVisualPage({ visual }: { visual: DiscussionVisual }) {
  return (
    <div className="discussion-board">
      <div className="discussion-board__title">
        <span>线下讨论</span>
        <strong>共读现场记录</strong>
      </div>
      <div className="discussion-grid">
        {visual.slots.map((slot) => (
          <article key={slot.title} className="discussion-slot discussion-slot--scene">
            <figure className="discussion-slot__media">
              <img
                src={asset(slot.image)}
                alt={slot.title}
                onError={(event) => {
                  const image = event.currentTarget;
                  if (!image.dataset.fallbackApplied) {
                    image.dataset.fallbackApplied = 'true';
                    image.src = asset(slot.fallback);
                  }
                }}
              />
              <figcaption>{slot.sceneLabel}</figcaption>
            </figure>
            <div>
              <h3>{slot.title}</h3>
              <p>{slot.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StudioVisualPage({ visual }: { visual: StudioVisual }) {
  return (
    <div className="studio-board">
      <figure className="video-poster">
        <img src={asset(visual.heroImage)} alt={visual.heroAlt} />
        <figcaption>{visual.caption}</figcaption>
      </figure>
      <div className="module-grid">
        {visual.modules.map((module) => (
          <article key={module.title}>
            <img src={asset(module.image)} alt={module.alt} />
            <strong>{module.title}</strong>
            <span>{module.note}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function ReflectionVisualPage({ visual }: { visual: ReflectionVisual }) {
  return (
    <div className="reflection-board">
      {visual.panels.map((panel) => (
        <article key={panel.title} className="reflection-card">
          <img src={asset(panel.image)} alt={panel.alt} />
          <div>
            <span>{panel.label}</span>
            <strong>{panel.title}</strong>
            <p>{panel.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SummaryVisualPage({ visual }: { visual: SummaryVisual }) {
  return (
    <div className="summary-board">
      {visual.image && (
        <figure className="summary-board__image">
          <img src={asset(visual.image)} alt={visual.imageAlt ?? '总结图像'} />
        </figure>
      )}
      <div className="summary-board__content">
        <p>全篇闭环</p>
        {visual.points.map((point, index) => (
          <article key={point.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{point.title}</strong>
              <small>{point.note}</small>
            </div>
          </article>
        ))}
        <blockquote>读经典，不是停留在文本表面，而是在理论中看清时代，在实践中坚定方向。</blockquote>
      </div>
    </div>
  );
}

function VisualPage({ scene, className = '' }: { scene: Scene; className?: string }) {
  const visual = scene.visual;

  return (
    <article className={`page page--visual ${className}`.trim()}>
      {visual.type === 'image' && <ImageVisualPage visual={visual} />}
      {visual.type === 'timeline' && <TimelineVisualPage visual={visual} />}
      {visual.type === 'diptych' && <DiptychVisualPage visual={visual} />}
      {visual.type === 'cases' && <CasesVisualPage visual={visual} />}
      {visual.type === 'discussion' && <DiscussionVisualPage visual={visual} />}
      {visual.type === 'studio' && <StudioVisualPage visual={visual} />}
      {visual.type === 'reflection' && <ReflectionVisualPage visual={visual} />}
      {visual.type === 'summary' && <SummaryVisualPage visual={visual} />}
    </article>
  );
}

function scenePageNumber(index: number) {
  return index * 2 + 2;
}

function CoverPage() {
  return (
    <section className="page page--cover" aria-hidden="true">
      <div>
        <p>经典品读</p>
        <strong>守正创新</strong>
        <span>在翻阅中回到问题，也回到时代现场</span>
      </div>
    </section>
  );
}

type FlipBookProps = {
  initialScene: number;
  onReadyChange?: (isReady: boolean) => void;
  onTurnSettled?: (sceneIndex: number) => void;
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing?.dataset.loaded === 'true') {
      resolve();
      return;
    }

    const script = existing ?? document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    if (!existing) document.head.appendChild(script);
  });
}

function sceneIndexFromPage(page: number) {
  return Math.max(0, Math.min(scenes.length - 1, Math.floor((page - 2) / 2)));
}

const FlipBook = memo(forwardRef<FlipBookHandle, FlipBookProps>(function FlipBook(
  { initialScene, onReadyChange, onTurnSettled },
  ref,
) {
  const elementRef = useRef<HTMLDivElement>(null);
  const turnRef = useRef<TurnInstance | null>(null);
  const [isPluginReady, setIsPluginReady] = useState(false);

  const readPage = useCallback(() => {
    const instance = turnRef.current;
    return instance ? Number(instance.turn('page')) : scenePageNumber(initialScene);
  }, [initialScene]);

  const isAnimating = useCallback(() => {
    const instance = turnRef.current;
    return instance ? Boolean(instance.turn('animating')) : true;
  }, []);

  useImperativeHandle(ref, () => ({
    goToScene(index: number) {
      const instance = turnRef.current;
      if (!instance || isAnimating()) return false;
      const page = scenePageNumber(index);
      const view = instance.turn('view');
      if (Array.isArray(view) && view.includes(page)) return false;
      instance.turn('page', page);
      return true;
    },
    next() {
      const instance = turnRef.current;
      if (!instance || isAnimating()) return false;
      const currentPage = readPage();
      const view = instance.turn('view');
      const lastScenePage = scenePageNumber(scenes.length - 1);
      const isLastSpread = Array.isArray(view) && (view.includes(lastScenePage) || view.includes(lastScenePage + 1));
      if (currentPage < scenePageNumber(0)) {
        instance.turn('page', scenePageNumber(0));
      } else if (isLastSpread || currentPage >= lastScenePage) {
        instance.turn('page', scenePageNumber(0));
      } else {
        instance.turn('next');
      }
      return true;
    },
    previous() {
      const instance = turnRef.current;
      if (!instance || isAnimating()) return false;
      const currentPage = readPage();
      const view = instance.turn('view');
      const firstScenePage = scenePageNumber(0);
      const isFirstSpread = Array.isArray(view) && (view.includes(firstScenePage) || view.includes(firstScenePage + 1));
      if (isFirstSpread || currentPage <= firstScenePage) {
        instance.turn('page', scenePageNumber(scenes.length - 1));
      } else {
        instance.turn('previous');
      }
      return true;
    },
  }), [isAnimating, readPage]);

  useEffect(() => {
    let cancelled = false;
    const vendorBase = `${import.meta.env.BASE_URL}vendor/`;
    loadScript(`${vendorBase}jquery-1.7.1.min.js`)
      .then(() => loadScript(`${vendorBase}turn.min.js`))
      .then(() => {
        if (!cancelled) setIsPluginReady(true);
      })
      .catch(() => {
        if (!cancelled) setIsPluginReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!isPluginReady) return undefined;
    const element = elementRef.current;
    const turnFactory = window.jQuery ?? window.$;
    if (!element || !turnFactory) return undefined;

    const instance = turnFactory(element);
    const parent = element.parentElement;

    const readSize = () => {
      const parentWidth = parent?.getBoundingClientRect().width ?? bookWidth;
      const width = Math.round(Math.min(bookWidth, Math.max(320, parentWidth)));
      const height = Math.round((width * bookHeight) / bookWidth);
      return { width, height };
    };

    const applySize = () => {
      const size = readSize();
      instance.turn('size', size.width, size.height);
    };

    const size = readSize();
    instance.css({ width: size.width, height: size.height });

    const handleTurned = (_event: unknown, page?: unknown) => {
      const fallbackPage = typeof page === 'number' ? page : Number(instance.turn('page'));
      const settledScene = sceneIndexFromPage(fallbackPage);
      onTurnSettled?.(settledScene);
    };

    instance.turn({
      page: scenePageNumber(initialScene),
      display: 'double',
      acceleration: true,
      gradients: !turnFactory.isTouch,
      elevation: 50,
      duration: turnDuration,
      when: {
        turned: handleTurned,
      },
    });

    turnRef.current = instance;
    onReadyChange?.(true);
    handleTurned(null, Number(instance.turn('page')));

    const observer = parent ? new ResizeObserver(applySize) : null;
    if (parent) observer?.observe(parent);
    window.addEventListener('resize', applySize);

    return () => {
      window.removeEventListener('resize', applySize);
      observer?.disconnect();
      try {
        instance.unbind('turned');
      } catch {
      }
      turnRef.current = null;
      onReadyChange?.(false);
    };
  }, [initialScene, isPluginReady, onReadyChange, onTurnSettled]);

  return (
    <div className="book-case" aria-label="翻书式章节演示">
      <div className="book-shadow" aria-hidden="true" />
      <div className="page-stack page-stack--left" aria-hidden="true" />
      <div className="page-stack page-stack--right" aria-hidden="true" />
      <div ref={elementRef} id="magazine" className="book-shell turnjs-book">
        <CoverPage />
        {scenes.flatMap((item) => [
          <TextPage key={`${item.chapter}-text`} scene={item} className="book-page book-page--text" />,
          <VisualPage key={`${item.chapter}-visual`} scene={item} className="book-page book-page--visual" />,
        ])}
      </div>
      <div className="book-spine" aria-hidden="true" />
    </div>
  );
}));

function App() {
  const initialScene = useMemo(getInitialScene, []);
  const bookRef = useRef<FlipBookHandle>(null);
  const [activeScene, setActiveScene] = useState(initialScene);
  const [isPlaying, setIsPlaying] = useState(() => !new URLSearchParams(window.location.search).has('scene'));
  const [isBookReady, setIsBookReady] = useState(false);

  const scene = scenes[activeScene];

  const handleBookSettled = useCallback((sceneIndex: number) => {
    setActiveScene(sceneIndex);
  }, []);

  const goToScene = useCallback((index: number) => {
    if (index === activeScene || !isBookReady || !bookRef.current) return;
    bookRef.current.goToScene(index);
  }, [activeScene, isBookReady]);

  const goNext = useCallback(() => {
    if (!isBookReady) return;
    bookRef.current?.next();
  }, [isBookReady]);

  const goPrevious = useCallback(() => {
    if (!isBookReady) return;
    bookRef.current?.previous();
  }, [isBookReady]);

  useEffect(() => {
    const imageNames = new Set([
      'reading-hero.png',
      'photos/china-flag-beijing.jpg',
      ...scenes.flatMap(getSceneAssetNames),
    ]);
    const preloaders = Array.from(imageNames).map((name) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = asset(name);
      void image.decode?.().catch(() => undefined);
      return image;
    });
    return () => {
      preloaders.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || !isBookReady) return undefined;
    const timer = window.setTimeout(() => {
      bookRef.current?.next();
    }, sceneDuration);
    return () => window.clearTimeout(timer);
  }, [activeScene, isBookReady, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goNext();
      }
      if (event.key === 'ArrowLeft') {
        goPrevious();
      }
      if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying((value) => !value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrevious]);

  const progressLabel = useMemo(() => {
    return `${activeScene + 1} / ${scenes.length}`;
  }, [activeScene]);

  return (
    <main className="showcase" aria-label="守正创新经典品读自动演示">
      <video
        className="motion-video"
        autoPlay
        muted
        loop
        playsInline
        poster={asset('reading-hero.png')}
        aria-hidden="true"
      >
        <source src={asset('red-motion-bg.mp4')} type="video/mp4" />
      </video>
      <div className="motion-overlay" aria-hidden="true" />
      <div
        className="china-atmosphere"
        style={{ backgroundImage: `url("${asset('photos/china-flag-beijing.jpg')}")` } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className="silk-light silk-light--one" aria-hidden="true" />
      <div className="silk-light silk-light--two" aria-hidden="true" />

      <section className="stage" aria-live="polite">
        <header className="stage__header">
          <div>
            <p className="stage__kicker">经典品读 · 守正创新</p>
            <h1>{scene.title}</h1>
          </div>
          <div className="stage__timer" aria-label={`当前章节 ${progressLabel}`}>
            <span>{scene.chapter}</span>
            <strong>{progressLabel}</strong>
          </div>
        </header>

        <div className="book-stage">
          <FlipBook
            ref={bookRef}
            initialScene={initialScene}
            onReadyChange={setIsBookReady}
            onTurnSettled={handleBookSettled}
          />
        </div>

        <footer className="stage__footer">
          <p className="narration">{scene.cue}</p>
          <div className="controls" aria-label="演示控制">
            <button
              type="button"
              onClick={goPrevious}
              disabled={!isBookReady}
              aria-label="上一章"
            >
              上一章
            </button>
            <button
              type="button"
              className="controls__primary"
              onClick={() => setIsPlaying((value) => !value)}
              aria-pressed={isPlaying}
            >
              {isPlaying ? '停留' : '继续'}
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!isBookReady}
              aria-label="下一章"
            >
              下一章
            </button>
          </div>
        </footer>

        <div className={isPlaying && isBookReady ? 'progress-track is-playing' : 'progress-track'} aria-hidden="true">
          {scenes.map((item, index) => (
            <button
              type="button"
              key={item.chapter}
              className={index === activeScene ? 'is-active' : ''}
              onClick={() => goToScene(index)}
              disabled={!isBookReady}
              aria-label={`跳转到${item.chapter}`}
            >
              <span
                style={
                  index === activeScene && isPlaying
                    ? ({ '--duration': `${sceneDuration}ms` } as React.CSSProperties)
                    : undefined
                }
              />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
