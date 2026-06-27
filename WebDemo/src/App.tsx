import { useEffect, useMemo, useState } from 'react';

type PageSide = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

type Scene = {
  chapter: string;
  title: string;
  cue: string;
  left: PageSide;
  right: PageSide;
  visual: 'opening' | 'timeline' | 'combine' | 'reality' | 'method' | 'media' | 'closing';
};

const sceneDuration = 7200;

const scenes: Scene[] = [
  {
    chapter: '01 开卷',
    title: '守正创新何以开辟新境界',
    cue: '经典不是静止文字，而是打开时代问题的一束光。',
    visual: 'opening',
    left: {
      eyebrow: '经典品读',
      title: '从书页进入时代',
      body: '围绕《开辟马克思主义中国化时代化新境界》，用经典阅读理解毛概主线。',
      points: ['读文本', '抓问题', '连现实'],
    },
    right: {
      eyebrow: '汇报主问',
      title: '为什么必须中国化时代化？',
      body: '马克思主义只有扎根中国实践、回应时代课题，才能不断展现真理力量。',
      points: ['中国问题', '时代问题', '青年回答'],
    },
  },
  {
    chapter: '02 主线',
    title: '理论在回答中国问题中发展',
    cue: '毛概课的理论脉络，是一条不断回答时代问题的思想河流。',
    visual: 'timeline',
    left: {
      eyebrow: '毛概脉络',
      title: '不是背结论，而是看发展',
      body: '从毛泽东思想到中国特色社会主义理论体系，再到习近平新时代中国特色社会主义思想。',
      points: ['革命建设', '改革开放', '新时代'],
    },
    right: {
      eyebrow: '一条线索',
      title: '实践提出问题，理论给出回答',
      body: '理论创新总是在中国实践中生长，也在新的实践中继续打开空间。',
      points: ['实践性', '人民性', '时代性'],
    },
  },
  {
    chapter: '03 两个结合',
    title: '理论扎根中国的两条路径',
    cue: '第一个结合让理论不悬空，第二个结合让理论有根脉。',
    visual: 'combine',
    left: {
      eyebrow: '第一个结合',
      title: '同中国具体实际相结合',
      body: '从中国国情和发展阶段出发，回答中国自己的现代化问题。',
      points: ['实事求是', '独立自主', '中国式现代化'],
    },
    right: {
      eyebrow: '第二个结合',
      title: '同中华优秀传统文化相结合',
      body: '让马克思主义在中华文明土壤中扎根，形成更深厚的文化支撑。',
      points: ['民为邦本', '天下为公', '文化自信'],
    },
  },
  {
    chapter: '04 现实',
    title: '每个理论点都要照进现实',
    cue: '理论的生命力，不在口号里，而在解释现实、回应现实、指导现实中。',
    visual: 'reality',
    left: {
      eyebrow: '现实验证',
      title: '新质生产力、乡村振兴、生态文明',
      body: '这些不是孤立案例，而是新时代中国问题的具体场景。',
      points: ['科技自立自强', '共同富裕', '绿色发展'],
    },
    right: {
      eyebrow: '问题导向',
      title: '时代出题，理论作答',
      body: '面对发展、科技、生态与文化课题，守正创新给出方法论支撑。',
      points: ['解释变化', '回应挑战', '指导实践'],
    },
  },
  {
    chapter: '05 小组阅读',
    title: '经典阅读不是背概念',
    cue: '我们把阅读做成可看、可翻、可讲述的学习过程。',
    visual: 'method',
    left: {
      eyebrow: '四步法',
      title: '精读、关联、讨论、转化',
      body: '先圈画关键词，再关联毛概知识，最后联系现实案例形成表达。',
      points: ['精读文本', '关联课程', '转化成果'],
    },
    right: {
      eyebrow: '课堂呈现',
      title: 'PPT讲逻辑，Demo做演示',
      body: '自动翻书把理论结构变成演示节奏，让课堂展示更像一次主题展映。',
      points: ['自动播放', '翻页动效', '红色视频背景'],
    },
  },
  {
    chapter: '06 数字化',
    title: '从文本到数字展映',
    cue: 'WebDemo不是炫技，而是把抽象理论转成可感知的课堂体验。',
    visual: 'media',
    left: {
      eyebrow: 'AI视频',
      title: '让理论之光照亮青春之路',
      body: '书页翻开，关键词浮现，现实场景推进，青年讨论收束。',
      points: ['书页', '时代场景', '青年担当'],
    },
    right: {
      eyebrow: '互动保留',
      title: '演示为主，控制为辅',
      body: '默认自动演示；需要彩排时，可暂停、上一页、下一页，精准配合讲稿节奏。',
      points: ['自动演示', '手动控场', '静态部署'],
    },
  },
  {
    chapter: '07 合卷',
    title: '在经典中坚定方向，在实践中增长本领',
    cue: '读经典，是为了在理论中看清时代，在青春中承担使命。',
    visual: 'closing',
    left: {
      eyebrow: '三句话总结',
      title: '守正创新，是开辟新境界的方法',
      body: '“两个结合”让理论扎根中国、回应时代。',
      points: ['守住根本', '回应时代', '扎根中国'],
    },
    right: {
      eyebrow: '青年落脚',
      title: '把个人成长放进国家需要',
      body: '经典阅读最终要转化为理解中国、观察时代、规划人生的思想能力。',
      points: ['学理论', '看时代', '做青年'],
    },
  },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function nextIndex(index: number) {
  return (index + 1) % scenes.length;
}

function previousIndex(index: number) {
  return (index - 1 + scenes.length) % scenes.length;
}

function SceneVisual({ type, sceneIndex }: { type: Scene['visual']; sceneIndex: number }) {
  if (type === 'timeline') {
    return (
      <div className="timeline-visual" aria-hidden="true">
        {['原理', '毛泽东思想', '理论体系', '新时代', '继续推进'].map((item, index) => (
          <span key={item} style={{ '--i': index } as React.CSSProperties}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (type === 'combine') {
    return (
      <div className="combine-visual" aria-hidden="true">
        <div className="combine-visual__ring">
          <span>中国实际</span>
          <span>马克思主义</span>
          <span>中华文化</span>
        </div>
      </div>
    );
  }

  if (type === 'reality') {
    return (
      <div className="reality-visual" aria-hidden="true">
        {['科技', '乡村', '生态', '文化'].map((item, index) => (
          <i key={item} style={{ '--i': index } as React.CSSProperties}>
            {item}
          </i>
        ))}
      </div>
    );
  }

  if (type === 'method') {
    return (
      <div className="method-visual" aria-hidden="true">
        {['精读', '关联', '讨论', '转化'].map((item, index) => (
          <b key={item} style={{ '--i': index } as React.CSSProperties}>
            {item}
          </b>
        ))}
      </div>
    );
  }

  if (type === 'media') {
    return (
      <div className="media-visual" aria-hidden="true">
        <div className="media-visual__screen">
          <span />
          <span />
          <span />
        </div>
        <p>AI VIDEO</p>
      </div>
    );
  }

  if (type === 'closing') {
    return (
      <div className="closing-visual" aria-hidden="true">
        <span>守正</span>
        <span>创新</span>
        <span>担当</span>
      </div>
    );
  }

  return (
    <div className="opening-visual" aria-hidden="true">
      <span className="opening-visual__seal">经典</span>
      <span className="opening-visual__line" />
      <span className="opening-visual__year">2026</span>
    </div>
  );
}

function Page({ side, align }: { side: PageSide; align: 'left' | 'right' }) {
  return (
    <article className={`page page--${align}`}>
      <p className="page__eyebrow">{side.eyebrow}</p>
      <h2>{side.title}</h2>
      <p className="page__body">{side.body}</p>
      <ul>
        {side.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
      <div className="silk-ribbon silk-ribbon--one" aria-hidden="true" />
      <div className="silk-ribbon silk-ribbon--two" aria-hidden="true" />

      <section className="stage" aria-live="polite">
        <header className="stage__header">
          <div>
            <p className="stage__kicker">自动演示 · 经典品读数字展映</p>
            <h1>{scene.title}</h1>
          </div>
          <div className="stage__timer" aria-label={`当前分镜 ${progressLabel}`}>
            <span>{scene.chapter}</span>
            <strong>{progressLabel}</strong>
          </div>
        </header>

        <div className="book-stage">
          <div className="book-shell" aria-label={`${scene.chapter} ${scene.title}`}>
            <div className="book-shadow" aria-hidden="true" />
            <Page side={scene.left} align="left" />
            <Page side={scene.right} align="right" />
            <div className="book-spine" aria-hidden="true" />
            <div
              key={`${flipTick}-${direction}`}
              className={`turn-sheet turn-sheet--${direction}`}
              aria-hidden="true"
            />
            <SceneVisual type={scene.visual} sceneIndex={activeScene} />
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
