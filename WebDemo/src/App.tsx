import { useEffect, useMemo, useState } from 'react';

type Scene = {
  chapter: string;
  title: string;
  thesis: string;
  quote: string;
  tags: string[];
  image: string;
  imageAlt: string;
  caption: string;
  cue: string;
};

const sceneDuration = 7600;

const scenes: Scene[] = [
  {
    chapter: '01 开卷',
    title: '为什么读这篇经典',
    thesis: '经典阅读不是把概念背下来，而是获得理解中国、观察时代的方法。',
    quote: '从“为什么必须中国化时代化”进入文本，再把答案放回现实中检验。',
    tags: ['经典文本', '毛概主线', '青年问题'],
    image: 'photos/reading-library.jpg',
    imageAlt: '学生在图书馆阅读资料',
    caption: '阅读现场：从文本进入问题',
    cue: '开场只讲一个问题：这篇文献怎样帮助我们理解毛概课中的中国化时代化。',
  },
  {
    chapter: '02 根脉',
    title: '两个结合让理论扎根中国',
    thesis: '第一个结合回答“中国问题”，第二个结合回答“文化根脉”。',
    quote: '理论不能悬在空中，必须进入中国实际，也必须进入中华文明的深处。',
    tags: ['中国具体实际', '中华优秀传统文化', '文化自信'],
    image: 'photos/jiangxi-village.jpg',
    imageAlt: '江西传统村落景观',
    caption: '文化土壤：传统村落与现实中国',
    cue: '这一页聚焦“两个结合”，用真实的中国场景说明理论为什么要有土地和根脉。',
  },
  {
    chapter: '03 道路',
    title: '中国式现代化不是照搬模式',
    thesis: '现代化必须从中国国情出发，在独立自主中探索自己的道路。',
    quote: '守正不是守旧，创新也不是脱根；二者统一在中国式现代化的实践中。',
    tags: ['实事求是', '独立自主', '中国式现代化'],
    image: 'photos/high-speed-rail.jpg',
    imageAlt: '上海高速铁路列车',
    caption: '发展场景：高铁与现代化进程',
    cue: '用高铁这样的现实画面承接理论主线：现代化是具体的道路选择，不是抽象口号。',
  },
  {
    chapter: '04 回答',
    title: '理论要回答现实问题',
    thesis: '新质生产力、乡村振兴、生态文明，都是时代给理论提出的新问题。',
    quote: '理论的生命力，在于解释现实、回应现实、指导现实。',
    tags: ['新质生产力', '绿色发展', '问题导向'],
    image: 'photos/golmud-solar.jpg',
    imageAlt: '青海格尔木光伏项目',
    caption: '时代问题：绿色发展与科技创新',
    cue: '这一页不堆案例，只用绿色发展和科技创新说明：理论必须能回答今天的问题。',
  },
  {
    chapter: '05 合卷',
    title: '青年如何把阅读变成行动',
    thesis: '读经典的终点，是把个人成长放进国家需要和时代趋势中思考。',
    quote: '在经典中坚定方向，在实践中增长本领。',
    tags: ['理论自觉', '实践担当', '青春使命'],
    image: 'reading-hero.png',
    imageAlt: '书页与青年实践场景融合的主题图',
    caption: '汇报收束：从书页走向实践',
    cue: '最后回到青年：经典阅读最终要转化为方向感、判断力和行动力。',
  },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function nextIndex(index: number) {
  return (index + 1) % scenes.length;
}

function previousIndex(index: number) {
  return (index - 1 + scenes.length) % scenes.length;
}

function TextPage({ scene }: { scene: Scene }) {
  return (
    <article className="page page--text">
      <p className="page__eyebrow">{scene.chapter}</p>
      <h2>{scene.title}</h2>
      <p className="page__thesis">{scene.thesis}</p>
      <blockquote>{scene.quote}</blockquote>
      <ul>
        {scene.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

function PhotoPage({ scene }: { scene: Scene }) {
  return (
    <article className="page page--photo">
      <figure>
        <img src={asset(scene.image)} alt={scene.imageAlt} />
        <figcaption>
          <span>{scene.caption}</span>
          <small>真实图片素材</small>
        </figcaption>
      </figure>
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
      <div className="light-beam light-beam--one" aria-hidden="true" />
      <div className="light-beam light-beam--two" aria-hidden="true" />

      <section className="stage" aria-live="polite">
        <header className="stage__header">
          <div>
            <p className="stage__kicker">经典品读 · 自动翻书演示</p>
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
            <TextPage scene={scene} />
            <PhotoPage scene={scene} />
            <div className="book-spine" aria-hidden="true" />
            <div
              key={`${flipTick}-${direction}`}
              className={`turn-sheet turn-sheet--${direction}`}
              style={{ '--turn-image': `url("${asset(scene.image)}")` } as React.CSSProperties}
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
