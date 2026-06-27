import { useEffect, useMemo, useState } from 'react';

type ImageVisual = {
  type: 'image';
  image: string;
  imageAlt: string;
  caption: string;
};

type TimelineVisual = {
  type: 'timeline';
  nodes: Array<{
    year: string;
    label: string;
    note: string;
  }>;
};

type TwoCombineVisual = {
  type: 'two-combine';
  images: Array<{
    src: string;
    alt: string;
    label: string;
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
    title: string;
    note: string;
  }>;
};

type DigitalVisual = {
  type: 'digital';
  modules: Array<{
    title: string;
    note: string;
  }>;
};

type SummaryVisual = {
  type: 'summary';
  points: string[];
};

type SceneVisual =
  | ImageVisual
  | TimelineVisual
  | TwoCombineVisual
  | CasesVisual
  | DiscussionVisual
  | DigitalVisual
  | SummaryVisual;

type Scene = {
  chapter: string;
  pptMap: string;
  title: string;
  thesis: string;
  proof: string[];
  takeaway: string;
  tags: string[];
  cue: string;
  visual: SceneVisual;
};

const sceneDuration = 9200;

const scenes: Scene[] = [
  {
    chapter: '01 开卷',
    pptMap: 'PPT 1-2',
    title: '从一个主问题进入经典',
    thesis: '为什么马克思主义必须中国化时代化，青年怎样把经典阅读变成理解时代的能力。',
    proof: [
      '选题不是复述文章，而是把经典文本放回毛概课程主线中理解。',
      '整场汇报围绕时代之问、理论之答、青年之责展开。',
      '第一幕完成开场和选题原因，给后面的理论链条定方向。',
    ],
    takeaway: '经典阅读的起点，是带着现实问题走进文本。',
    tags: ['经典文本', '毛概课程', '核心问题'],
    cue: '开场只抓一个主问题：这篇文献怎样帮助我们理解中国化时代化，也怎样回应大学生自己的成长问题。',
    visual: {
      type: 'image',
      image: 'photos/reading-library.jpg',
      imageAlt: '学生在图书馆阅读资料',
      caption: '从文本出发：带着问题阅读经典',
    },
  },
  {
    chapter: '02 主线',
    pptMap: 'PPT 3',
    title: '从毛概看理论发展的脉络',
    thesis: '马克思主义中国化时代化不是孤立概念，而是贯穿革命、建设、改革和新时代的理论主线。',
    proof: [
      '毛泽东思想回答中国革命和建设中的道路问题。',
      '中国特色社会主义理论体系回答改革开放和现代化建设问题。',
      '习近平新时代中国特色社会主义思想回答新时代坚持和发展中国特色社会主义的重大课题。',
    ],
    takeaway: '理论总是在回答中国问题、时代问题、人民问题中发展。',
    tags: ['理论脉络', '中国化时代化', '时代课题'],
    cue: '这一页把 PPT 第3页压缩成一条时间线，说明理论不是静态概念，而是在实践中不断展开。',
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
    chapter: '03 方法',
    pptMap: 'PPT 4',
    title: '守正创新不是两选一',
    thesis: '守正保证方向，创新回应问题，二者统一在马克思主义的实践品格之中。',
    proof: [
      '守正是坚持基本立场、观点、方法，尤其是人民立场和实事求是。',
      '创新是回应中国之问、世界之问、人民之问、时代之问。',
      '只讲守正容易停在过去，只讲创新又可能失去根本方向。',
    ],
    takeaway: '守正不是守旧，创新不是离根。',
    tags: ['守正创新', '实事求是', '人民立场'],
    cue: '这里对应 PPT 第4页，是全篇的方法论中心：方向不能丢，问题也不能绕开。',
    visual: {
      type: 'image',
      image: 'photos/chinese-books-library.jpg',
      imageAlt: '中文书架上的书籍',
      caption: '方法意识：从概念记忆走向问题分析',
    },
  },
  {
    chapter: '04 根脉',
    pptMap: 'PPT 5-6',
    title: '两个结合让理论扎根中国',
    thesis: '同中国具体实际相结合，解决理论如何不悬空；同中华优秀传统文化相结合，解决理论如何有根脉。',
    proof: [
      '第一个结合强调从中国国情出发，不能照搬外来模式。',
      '第二个结合强调中华文明土壤，推动传统文化创造性转化。',
      '两个结合共同说明，科学理论要有实践根基，也要有文化根脉。',
    ],
    takeaway: '理论扎根中国，才能真正回应中国。',
    tags: ['中国具体实际', '中华优秀传统文化', '文化自信'],
    cue: '这一幕把 PPT 第5页和第6页合在一起，用乡村与传统建筑两类真实图像呈现“实际”和“文化”。',
    visual: {
      type: 'two-combine',
      images: [
        {
          src: 'photos/lishui-village.jpg',
          alt: '浙江丽水乡村建筑',
          label: '中国具体实际',
        },
        {
          src: 'photos/forbidden-city.jpg',
          alt: '故宫建筑',
          label: '中华文化根脉',
        },
      ],
    },
  },
  {
    chapter: '05 现实',
    pptMap: 'PPT 7',
    title: '问题导向把理论带入现实',
    thesis: '理论创新的价值，不在于堆出抽象词语，而在于解释现实、回应现实、指导现实。',
    proof: [
      '科技自立自强回应全球科技竞争和新质生产力发展。',
      '乡村振兴回应发展不平衡和共同富裕的现实课题。',
      '生态文明回应人民对美好生活和良好生态环境的需要。',
    ],
    takeaway: '现实问题在哪里，理论生命力就要体现在哪里。',
    tags: ['新质生产力', '乡村振兴', '生态文明', '中国式现代化'],
    cue: '这页是全场案例页，四个画面分别对应科技、乡村、生态和现代化道路，避免只讲概念。',
    visual: {
      type: 'cases',
      cases: [
        {
          title: '科技自立自强',
          theory: '时代化与新质生产力',
          image: 'photos/china-science-museum.jpg',
          alt: '中国科技馆互动展区',
        },
        {
          title: '乡村振兴',
          theory: '中国实际与共同富裕',
          image: 'photos/lishui-village.jpg',
          alt: '浙江乡村建筑',
        },
        {
          title: '绿色发展',
          theory: '生态文明与现代化',
          image: 'photos/golmud-solar.jpg',
          alt: '青海格尔木光伏项目',
        },
        {
          title: '交通强国',
          theory: '独立自主与道路选择',
          image: 'photos/high-speed-rail.jpg',
          alt: '上海高速铁路列车',
        },
      ],
    },
  },
  {
    chapter: '06 共读',
    pptMap: 'PPT 8',
    title: '线下讨论照片预留区',
    thesis: '这一页专门留给小组真实活动照片，用来证明经典品读不是临时拼材料，而是经历了阅读、讨论、打磨的过程。',
    proof: [
      '精读文本：圈画“守正创新”“两个结合”“问题导向”等关键词。',
      '关联毛概：把文本内容和课程知识点一一对应。',
      '交流讨论：围绕中国化时代化、青年担当和现实案例形成共同观点。',
    ],
    takeaway: '后续把你提供的线下讨论图片替换进三个照片位即可。',
    tags: ['精读文本', '小组讨论', '成果打磨'],
    cue: '这是新增的预留板块。等你给出小组照片后，只需要替换三个文件名，WebDemo 就能呈现真实活动过程。',
    visual: {
      type: 'discussion',
      slots: [
        {
          image: 'group-photo-1.jpg',
          fallback: 'group-photo-1.svg',
          title: '精读文本',
          note: '小组成员圈画关键词和原文要点',
        },
        {
          image: 'group-photo-2.jpg',
          fallback: 'group-photo-2.svg',
          title: '线下讨论',
          note: '围绕两个结合和现实案例交换观点',
        },
        {
          image: 'group-photo-3.jpg',
          fallback: 'group-photo-3.svg',
          title: '成果打磨',
          note: '共同修改 PPT、讲稿、WebDemo 和视频脚本',
        },
      ],
    },
  },
  {
    chapter: '07 展厅',
    pptMap: 'PPT 9-10',
    title: '数字化成果服务经典品读',
    thesis: 'WebDemo 和 AI 视频不是炫技，而是把抽象理论变成可看、可点、可演示的学习空间。',
    proof: [
      'WebDemo 用自动翻书串起经典导读、理论时间轴、现实案例和总结。',
      'AI 视频脚本把书页、关键词、现实中国和青年担当串成 45 到 60 秒短片。',
      '数字化展示的作用，是帮助同学更快抓住全篇逻辑。',
    ],
    takeaway: '多媒体必须服务思想内容，而不是替代思想内容。',
    tags: ['WebDemo', 'AI视频', '课堂演示'],
    cue: '这一幕对应 PPT 第9页和第10页，说明数字成果如何辅助讲清理论，而不是让技术喧宾夺主。',
    visual: {
      type: 'digital',
      modules: [
        { title: '自动翻书', note: '按 PPT 逻辑自动演示' },
        { title: '理论时间轴', note: '压缩毛概主线' },
        { title: '案例拼贴', note: '连接科技、乡村、生态、交通' },
        { title: '讨论预留', note: '接入小组真实照片' },
        { title: 'AI视频区', note: '承接情感表达' },
        { title: '最终总结', note: '三句话收束全篇' },
      ],
    },
  },
  {
    chapter: '08 青年',
    pptMap: 'PPT 11',
    title: '从理论自觉到实践担当',
    thesis: '读经典的终点，是把个人成长放进国家需要和时代趋势中思考。',
    proof: [
      '学理论，不停留在背诵，而是掌握分析问题的方法。',
      '看时代，不只是旁观变化，而是理解变化背后的方向。',
      '做青年，不只谈理想，更要提升本领、服务社会。',
    ],
    takeaway: '经典阅读最终要转化为方向感、判断力和行动力。',
    tags: ['理论自觉', '实践担当', '青春使命'],
    cue: '这里把文本重新落回大学生自己：如何面对专业学习、就业选择和未来责任。',
    visual: {
      type: 'image',
      image: 'reading-hero.png',
      imageAlt: '书页与青年实践场景融合的主题图',
      caption: '从书页走向实践：青年担当是最终落脚',
    },
  },
  {
    chapter: '09 合卷',
    pptMap: 'PPT 12',
    title: '用三句话总结整套 PPT',
    thesis: '守正创新、两个结合、青年担当，构成这次经典品读的完整闭环。',
    proof: [
      '守正创新，是开辟新境界的方法。',
      '两个结合，是理论扎根中国、回应时代的路径。',
      '青年担当，是经典阅读最终要落到的行动。',
    ],
    takeaway: '在经典中坚定方向，在实践中增长本领。',
    tags: ['全篇总结', '最终收束', '课堂展示'],
    cue: '最后一幕直接总结整套 PPT。投屏时可以停在这一页，作为全组汇报的收束画面。',
    visual: {
      type: 'summary',
      points: ['守正创新', '两个结合', '青年担当'],
    },
  },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function getInitialScene() {
  const sceneParam = new URLSearchParams(window.location.search).get('scene');
  const parsedScene = Number(sceneParam);
  if (Number.isInteger(parsedScene) && parsedScene >= 1 && parsedScene <= scenes.length) {
    return parsedScene - 1;
  }
  return 0;
}

function nextIndex(index: number) {
  return (index + 1) % scenes.length;
}

function previousIndex(index: number) {
  return (index - 1 + scenes.length) % scenes.length;
}

function TextPage({ scene }: { scene: Scene }) {
  return (
    <article className="page page--text">
      <div className="page__meta">
        <p className="page__eyebrow">{scene.chapter}</p>
        <span>{scene.pptMap}</span>
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
    <figure className="photo-frame">
      <img src={asset(visual.image)} alt={visual.imageAlt} />
      <figcaption>
        <span>{visual.caption}</span>
        <small>真实图片素材</small>
      </figcaption>
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

function TwoCombineVisualPage({ visual }: { visual: TwoCombineVisual }) {
  return (
    <div className="combine-board">
      {visual.images.map((image, index) => (
        <figure key={image.label} className={index === 0 ? 'combine-card combine-card--left' : 'combine-card'}>
          <img src={asset(image.src)} alt={image.alt} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
      <div className="combine-bridge">
        <span>两个结合</span>
        <strong>实际与文化共同支撑理论创新</strong>
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
        <span>待替换照片</span>
        <strong>线下讨论过程</strong>
      </div>
      <div className="discussion-grid">
        {visual.slots.map((slot, index) => (
          <article key={slot.title} className="discussion-slot">
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
            <div>
              <span>照片{index + 1}</span>
              <h3>{slot.title}</h3>
              <p>{slot.note}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="replace-note">后续将真实照片命名为 group-photo-1.jpg、group-photo-2.jpg、group-photo-3.jpg 后替换即可。</p>
    </div>
  );
}

function DigitalVisualPage({ visual }: { visual: DigitalVisual }) {
  return (
    <div className="digital-board">
      <figure className="video-poster">
        <img src={asset('ai-video-poster.svg')} alt="AI视频演示封面" />
      </figure>
      <div className="module-grid">
        {visual.modules.map((module) => (
          <article key={module.title}>
            <strong>{module.title}</strong>
            <span>{module.note}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function SummaryVisualPage({ visual }: { visual: SummaryVisual }) {
  return (
    <div className="summary-board">
      <p>全篇闭环</p>
      {visual.points.map((point, index) => (
        <article key={point}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{point}</strong>
        </article>
      ))}
      <blockquote>读经典，不是停留在文本表面，而是在理论中看清时代，在实践中坚定方向。</blockquote>
    </div>
  );
}

function VisualPage({ scene }: { scene: Scene }) {
  const visual = scene.visual;

  return (
    <article className="page page--visual">
      {visual.type === 'image' && <ImageVisualPage visual={visual} />}
      {visual.type === 'timeline' && <TimelineVisualPage visual={visual} />}
      {visual.type === 'two-combine' && <TwoCombineVisualPage visual={visual} />}
      {visual.type === 'cases' && <CasesVisualPage visual={visual} />}
      {visual.type === 'discussion' && <DiscussionVisualPage visual={visual} />}
      {visual.type === 'digital' && <DigitalVisualPage visual={visual} />}
      {visual.type === 'summary' && <SummaryVisualPage visual={visual} />}
    </article>
  );
}

function App() {
  const [activeScene, setActiveScene] = useState(getInitialScene);
  const [isPlaying, setIsPlaying] = useState(() => !new URLSearchParams(window.location.search).has('scene'));
  const [flipTick, setFlipTick] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const scene = scenes[activeScene];

  const goToScene = (index: number, nextDirection: 'next' | 'prev') => {
    setDirection(nextDirection);
    setActiveScene(index);
    setFlipTick((tick) => tick + 1);
  };

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => {
      goToScene(nextIndex(activeScene), 'next');
    }, sceneDuration);
    return () => window.clearInterval(timer);
  }, [activeScene, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToScene(nextIndex(activeScene), 'next');
      }
      if (event.key === 'ArrowLeft') {
        goToScene(previousIndex(activeScene), 'prev');
      }
      if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying((value) => !value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScene]);

  const progressLabel = useMemo(() => {
    return `${activeScene + 1} / ${scenes.length}`;
  }, [activeScene]);

  const turnImage = scene.visual.type === 'image' ? scene.visual.image : 'reading-hero.png';

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
      <div className="light-beam light-beam--one" aria-hidden="true" />
      <div className="light-beam light-beam--two" aria-hidden="true" />

      <section className="stage" aria-live="polite">
        <header className="stage__header">
          <div>
            <p className="stage__kicker">经典品读 · PPT全逻辑翻书演示</p>
            <h1>{scene.title}</h1>
          </div>
          <div className="stage__timer" aria-label={`当前分镜 ${progressLabel}`}>
            <span>{scene.pptMap}</span>
            <strong>{progressLabel}</strong>
          </div>
        </header>

        <div className="book-stage">
          <div className="book-shell" aria-label={`${scene.chapter} ${scene.title}`}>
            <div className="book-shadow" aria-hidden="true" />
            <TextPage scene={scene} />
            <VisualPage scene={scene} />
            <div className="book-spine" aria-hidden="true" />
            <div
              key={`${flipTick}-${direction}`}
              className={`turn-sheet turn-sheet--${direction}`}
              style={{ '--turn-image': `url("${asset(turnImage)}")` } as React.CSSProperties}
              aria-hidden="true"
            >
              <span />
            </div>
          </div>
        </div>

        <footer className="stage__footer">
          <p className="narration">{scene.cue}</p>
          <div className="controls" aria-label="演示控制">
            <button type="button" onClick={() => goToScene(previousIndex(activeScene), 'prev')}>
              上一页
            </button>
            <button
              type="button"
              className="controls__primary"
              onClick={() => setIsPlaying((value) => !value)}
              aria-pressed={isPlaying}
            >
              {isPlaying ? '暂停演示' : '继续演示'}
            </button>
            <button type="button" onClick={() => goToScene(nextIndex(activeScene), 'next')}>
              下一页
            </button>
          </div>
        </footer>

        <div className={isPlaying ? 'progress-track is-playing' : 'progress-track'} aria-hidden="true">
          {scenes.map((item, index) => (
            <button
              type="button"
              key={item.chapter}
              className={index === activeScene ? 'is-active' : ''}
              onClick={() => goToScene(index, index >= activeScene ? 'next' : 'prev')}
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
