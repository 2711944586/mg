import { useEffect, useMemo, useState } from 'react';

type Keyword = {
  term: string;
  summary: string;
};

type Question = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

const timeline = [
  {
    title: '马克思主义基本原理',
    body: '提供认识世界、改造世界的科学立场、观点和方法。',
  },
  {
    title: '毛泽东思想',
    body: '把马克思主义基本原理同中国革命和建设具体实际相结合。',
  },
  {
    title: '中国特色社会主义理论体系',
    body: '围绕改革开放和社会主义现代化建设回答重大实践问题。',
  },
  {
    title: '习近平新时代中国特色社会主义思想',
    body: '回答新时代坚持和发展中国特色社会主义的重大时代课题。',
  },
  {
    title: '继续推进中国化时代化',
    body: '在守正创新中回应中国之问、世界之问、人民之问、时代之问。',
  },
];

const keywords: Keyword[] = [
  { term: '守正创新', summary: '在坚持马克思主义基本立场、观点、方法的基础上，回应新的时代问题和实践要求。' },
  { term: '两个结合', summary: '把马克思主义基本原理同中国具体实际相结合，同中华优秀传统文化相结合。' },
  { term: '中国具体实际', summary: '从中国国情、发展阶段和人民需要出发，回答中国自己的问题。' },
  { term: '中华优秀传统文化', summary: '为理论创新提供文化根脉和表达资源，使马克思主义在中华文明土壤中扎根。' },
  { term: '实事求是', summary: '一切从实际出发，在实践中检验和发展真理。' },
  { term: '群众路线', summary: '坚持人民立场，把人民需要作为理论和实践的重要出发点。' },
  { term: '独立自主', summary: '中国道路必须立足自身实际，不能照搬照抄外来模式。' },
  { term: '问题导向', summary: '理论发展要面对真问题，解释现实、回应现实、指导现实。' },
  { term: '中国式现代化', summary: '符合中国国情、体现社会主义性质、具有中华文明底蕴的现代化道路。' },
  { term: '青年担当', summary: '把个人成长放进国家需要和时代趋势中，提升本领、服务社会。' },
  { term: '文化自信', summary: '在理解中华文明连续性和创造性的基础上，坚定走中国道路的文化底气。' },
  { term: '新质生产力', summary: '以科技创新推动生产力跃升，回应高质量发展和全球竞争的新要求。' },
  { term: '生态文明', summary: '推动人与自然和谐共生，体现现代化发展理念的深化。' },
  { term: '乡村振兴', summary: '从中国实际出发解决发展不平衡问题，推动共同富裕。' },
];

const cases = [
  {
    title: '科技自立自强与新质生产力',
    theory: '时代化、问题导向、实践创新',
    body: '面对全球科技竞争和产业变革，理论创新要帮助我们认识新变化、解决新问题。',
    youth: '在专业学习中重视创新能力，把个人本领同国家发展需要联系起来。',
  },
  {
    title: '乡村振兴与共同富裕',
    theory: '群众路线、中国具体实际、共同富裕',
    body: '中国发展不能只看城市，也要回应城乡发展不平衡和人民共同富裕的现实课题。',
    youth: '在社会实践中走近基层，理解真实中国的广度和复杂性。',
  },
  {
    title: '生态文明建设',
    theory: '人与自然和谐共生、发展理念深化',
    body: '现代化不能只追求速度和规模，也要回应人民对良好生态环境的需要。',
    youth: '在日常生活和未来职业中形成绿色发展意识，参与可持续实践。',
  },
  {
    title: '中华优秀传统文化创造性转化',
    theory: '第二个结合、文化自信',
    body: '“民为邦本”“天下为公”“和而不同”等思想，为理解人民立场和文明交流提供文化资源。',
    youth: '在文化学习中增强自信，也学会用现代方式讲好中国故事。',
  },
];

const questions: Question[] = [
  {
    prompt: '“两个结合”主要指什么？',
    options: ['同中国具体实际、中华优秀传统文化相结合', '同西方理论、现代技术相结合', '同个人兴趣、校园活动相结合'],
    answer: '同中国具体实际、中华优秀传统文化相结合',
    explanation: '“两个结合”强调马克思主义基本原理同中国具体实际相结合，同中华优秀传统文化相结合。',
  },
  {
    prompt: '“守正创新”中的“守正”强调什么？',
    options: ['坚持马克思主义基本立场、观点、方法', '完全照搬过去的表达', '只追求形式上的新颖'],
    answer: '坚持马克思主义基本立场、观点、方法',
    explanation: '守正不是守旧，而是坚持根本方向、人民立场和科学方法。',
  },
  {
    prompt: '马克思主义中国化时代化为什么要坚持问题导向？',
    options: ['因为理论要解释现实、回应现实、指导现实', '因为理论只需要记忆概念', '因为现实问题与理论无关'],
    answer: '因为理论要解释现实、回应现实、指导现实',
    explanation: '理论的生命力体现在能够回答中国问题、时代问题和人民问题。',
  },
  {
    prompt: '下面哪项最能体现“同中国具体实际相结合”？',
    options: ['立足中国国情推进中国式现代化', '照搬别国发展模式', '只讨论抽象概念不联系现实'],
    answer: '立足中国国情推进中国式现代化',
    explanation: '中国式现代化体现了从中国实际出发探索现代化道路。',
  },
  {
    prompt: '大学生阅读经典文献最重要的意义是什么？',
    options: ['形成观察现实、理解时代和规划人生的方法', '只为背诵段落', '只为完成一次作业'],
    answer: '形成观察现实、理解时代和规划人生的方法',
    explanation: '经典阅读应转化为思想能力和实践自觉，而不只是文本记忆。',
  },
];

const reflections = [
  {
    image: 'group-photo-1.svg',
    text: '读经典，让我们更懂理论与现实的联系。',
    label: '精读文本',
  },
  {
    image: 'group-photo-2.svg',
    text: '两个结合让我们看到理论扎根中国的方式。',
    label: '交流讨论',
  },
  {
    image: 'group-photo-3.svg',
    text: '守正创新不是口号，而是分析问题的方法。',
    label: '成果打磨',
  },
  {
    image: 'group-photo-1.svg',
    text: '青年要把个人成长放进时代发展中思考。',
    label: '青年担当',
  },
];

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;

function useScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

const readingPages = [
  {
    label: '第一读',
    title: '从问题进入文本',
    body: '围绕“为什么必须中国化时代化”提出阅读问题，先抓住文章回答的时代课题。',
  },
  {
    label: '第二读',
    title: '从关键词进入结构',
    body: '把“守正创新”“两个结合”“问题导向”作为线索，整理文献内部逻辑。',
  },
  {
    label: '第三读',
    title: '从课程进入现实',
    body: '把文本与毛概知识、现实案例和青年成长相互印证，形成小组表达。',
  },
];

function App() {
  const [activeKeyword, setActiveKeyword] = useState(keywords[0]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useScrollReveal();

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  }, [answers]);

  const handleAnswer = (questionIndex: number, option: string) => {
    setAnswers((current) => ({ ...current, [questionIndex]: option }));
  };

  return (
    <main id="main-content">
      <a className="skip-link" href="#guide">跳到主要内容</a>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__overlay" data-reveal>
          <p className="eyebrow">经典品读数字展厅</p>
          <h1 id="page-title">守正创新何以开辟新境界</h1>
          <p className="hero__subtitle">
            从“两个结合”到新时代青年的理论自觉与实践担当
          </p>
          <div className="hero__actions" aria-label="页面快捷入口">
            <a href="#guide" className="button button--primary">开始品读</a>
            <a href="#quiz" className="button button--secondary">互动问答</a>
          </div>
        </div>
        <div className="hero-book" aria-hidden="true">
          <div className="book">
            <div className="book__page book__page--left">
              <span>守正</span>
              <small>坚持根本方向</small>
            </div>
            <div className="book__page book__page--right">
              <span>创新</span>
              <small>回应时代问题</small>
            </div>
            <div className="book__flip"></div>
          </div>
        </div>
      </section>

      <section className="band band--book" id="guide" aria-labelledby="guide-title">
        <div className="section-header">
          <p className="eyebrow">经典导读</p>
          <h2 id="guide-title">读什么，为什么读</h2>
        </div>
        <div className="reading-desk" data-reveal>
          <div className="reading-book" aria-live="polite">
            <div className="reading-book__left">
              <p className="reading-book__label">{readingPages[activePage].label}</p>
              <h3>{readingPages[activePage].title}</h3>
            </div>
            <div className="reading-book__right">
              <p>{readingPages[activePage].body}</p>
              <div className="page-controls" aria-label="翻阅导读">
                {readingPages.map((item, index) => (
                  <button
                    type="button"
                    key={item.label}
                    className={index === activePage ? 'page-dot is-active' : 'page-dot'}
                    onClick={() => setActivePage(index)}
                    aria-label={`查看${item.label}`}
                    aria-pressed={index === activePage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="guide-grid">
          <article className="info-card">
            <h3>文献主题</h3>
            <p>围绕马克思主义中国化时代化，理解守正创新、“两个结合”和问题导向。</p>
          </article>
          <article className="info-card">
            <h3>核心问题</h3>
            <p>为什么马克思主义必须中国化时代化？青年如何把经典阅读转化为思想能力？</p>
          </article>
          <article className="info-card">
            <h3>学习目标</h3>
            <p>从文本中提炼方法，把理论放进现实案例和个人成长中理解。</p>
          </article>
          <article className="info-card">
            <h3>课程关联</h3>
            <p>连接毛概课中的理论成果脉络、实事求是、群众路线、独立自主和中国式现代化。</p>
          </article>
        </div>
      </section>

      <section className="band band--warm" aria-labelledby="timeline-title" data-reveal>
        <div className="section-header">
          <p className="eyebrow">毛概理论时间轴</p>
          <h2 id="timeline-title">理论在回答时代问题中发展</h2>
        </div>
        <ol className="timeline">
          {timeline.map((item, index) => (
            <li className="timeline__item" key={item.title}>
              <span className="timeline__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band" aria-labelledby="keywords-title" data-reveal>
        <div className="section-header">
          <p className="eyebrow">关键词云</p>
          <h2 id="keywords-title">从关键词进入文献逻辑</h2>
        </div>
        <div className="keyword-layout">
          <div className="keyword-cloud" aria-label="关键词列表">
            {keywords.map((keyword) => (
              <button
                className={keyword.term === activeKeyword.term ? 'keyword is-active' : 'keyword'}
                key={keyword.term}
                onClick={() => setActiveKeyword(keyword)}
                type="button"
              >
                {keyword.term}
              </button>
            ))}
          </div>
          <aside className="keyword-panel" aria-live="polite">
            <p className="eyebrow">当前关键词</p>
            <h3>{activeKeyword.term}</h3>
            <p>{activeKeyword.summary}</p>
          </aside>
        </div>
      </section>

      <section className="band band--deep" aria-labelledby="cases-title" data-reveal>
        <div className="section-header section-header--light">
          <p className="eyebrow">现实案例卡</p>
          <h2 id="cases-title">每个理论点都对应一个现实问题</h2>
        </div>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.title}>
              <p className="case-card__tag">{item.theory}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <strong>青年启发</strong>
              <p>{item.youth}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="quiz" aria-labelledby="quiz-title" data-reveal>
        <div className="section-header">
          <p className="eyebrow">互动问答</p>
          <h2 id="quiz-title">用5道题检验阅读线索</h2>
        </div>
        <div className={submitted ? 'quiz quiz--submitted' : 'quiz'}>
          {questions.map((question, questionIndex) => {
            const selected = answers[questionIndex];
            return (
              <fieldset className="question" key={question.prompt}>
                <legend>{questionIndex + 1}. {question.prompt}</legend>
                <div className="question__options">
                  {question.options.map((option) => {
                    const isSelected = selected === option;
                    const isCorrect = submitted && option === question.answer;
                    const isWrong = submitted && isSelected && option !== question.answer;
                    const className = [
                      'option',
                      isSelected ? 'is-selected' : '',
                      isCorrect ? 'is-correct' : '',
                      isWrong ? 'is-wrong' : '',
                    ].filter(Boolean).join(' ');

                    return (
                      <button
                        className={className}
                        key={option}
                        onClick={() => handleAnswer(questionIndex, option)}
                        type="button"
                        aria-pressed={isSelected}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {submitted ? <p className="explanation">{question.explanation}</p> : null}
              </fieldset>
            );
          })}
          <div className="quiz__footer">
            <button
              className="button button--primary"
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length < questions.length}
            >
              提交答案
            </button>
            <button
              className="button button--ghost"
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
            >
              重新作答
            </button>
            <p className="score" role="status">
              {submitted ? `得分：${score} / ${questions.length}` : '完成全部题目后显示得分'}
            </p>
          </div>
        </div>
      </section>

      <section className="band band--warm" aria-labelledby="video-title" data-reveal>
        <div className="section-header">
          <p className="eyebrow">AI视频区</p>
          <h2 id="video-title">让理论之光照亮青春之路</h2>
        </div>
        <div className="video-layout">
          <div className="video-frame">
            <img src={asset('ai-video-poster.svg')} alt="AI视频占位画面" />
            <button
              className="video-button"
              type="button"
              onClick={() => setVideoReady((current) => !current)}
              aria-pressed={videoReady}
            >
              播放演示视频
            </button>
          </div>
          <div className="video-copy">
            <h3>从书页到时代场景</h3>
            <p>
              视频以书页翻开为起点，依次呈现守正创新、“两个结合”、中国式现代化和青年阅读讨论，作为汇报中的情感收束。
            </p>
            <p className="video-status" aria-live="polite">
              {videoReady ? '演示位已激活：替换为正式视频后即可播放。' : '当前为占位演示，正式视频可放入 public 目录后接入。'}
            </p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="wall-title" data-reveal>
        <div className="section-header">
          <p className="eyebrow">小组心得墙</p>
          <h2 id="wall-title">阅读之后，我们形成自己的表达</h2>
        </div>
        <div className="reflection-grid">
          {reflections.map((reflection, index) => (
            <article className="reflection" key={`${reflection.label}-${index}`}>
              <img src={asset(reflection.image)} alt={`${reflection.label}占位照片`} />
              <div>
                <p className="reflection__label">{reflection.label}</p>
                <p>{reflection.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <p className="eyebrow">汇报结语</p>
        <h2 id="closing-title">在经典中坚定方向，在实践中增长本领。</h2>
        <p>
          读经典，不是为了停留在文本表面，而是为了在理论中看清时代，在实践中坚定方向，在青春中承担使命。
        </p>
      </section>
    </main>
  );
}

export default App;
