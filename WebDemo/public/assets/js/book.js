(function($) {
  var CONTENT_START_PAGE = 4;
  var CONTENT_PAGES = 18;
  var TOTAL_PAGES = CONTENT_START_PAGE + CONTENT_PAGES;
  var START_PAGE = 1;
  var book = $('#book');
  var scenes = [
    {
      chapter: '第一章',
      range: '开卷 · 第1-2页',
      title: '从一个问题翻开经典',
      thesis: '为什么马克思主义必须中国化时代化，青年又怎样把经典阅读转化为理解时代的能力。',
      proof: [
        '这次品读从课程主线出发，把文献放回“马克思主义中国化时代化”的历史脉络中理解。',
        '我们不把经典当作结论清单，而是围绕时代之问、理论之答、青年之责建立论证。',
        '开场只保留一个核心追问，让后面的守正创新、两个结合和现实案例自然展开。'
      ],
      takeaway: '带着现实问题进入文本，经典才会真正发声。',
      tags: ['核心问题', '经典品读', '青年视角'],
      image: 'national-library-reading-room.jpg',
      caption: '从静心阅读开始，把问题带进文本'
    },
    {
      chapter: '第二章',
      range: '主线 · 第3页',
      title: '理论在回答中国问题中生长',
      thesis: '马克思主义中国化时代化不是孤立概念，而是贯穿革命、建设、改革和新时代的理论主线。',
      proof: [
        '毛泽东思想回答中国革命和建设中的道路问题。',
        '中国特色社会主义理论体系回答改革开放和社会主义现代化建设问题。',
        '习近平新时代中国特色社会主义思想回答新时代坚持和发展中国特色社会主义的重大时代课题。'
      ],
      takeaway: '理论从来不是静止的，它在实践中获得新的表达。',
      tags: ['理论脉络', '时代课题', '实践发展'],
      timeline: [
        ['原理', '马克思主义基本原理', '科学世界观和方法论'],
        ['革命', '毛泽东思想', '回答中国革命道路问题'],
        ['改革', '中国特色社会主义理论体系', '回答现代化建设问题'],
        ['新时代', '习近平新时代中国特色社会主义思想', '回答新时代课题'],
        ['继续', '推进中国化时代化', '在实践中开辟新境界']
      ],
      image: 'cuhk-reading-room.jpg'
    },
    {
      chapter: '第三章',
      range: '方法 · 第4页',
      title: '守正创新不是两选一',
      thesis: '守正保证根本方向，创新回应新的问题，二者统一在马克思主义鲜明的实践品格之中。',
      proof: [
        '守正，是坚持马克思主义基本立场、观点、方法，坚持人民立场和实事求是。',
        '创新，是回应中国之问、世界之问、人民之问、时代之问。',
        '只讲守正容易停在过去，只讲创新又可能失去根基；二者统一，理论才有生命力。'
      ],
      takeaway: '守正不是守旧，创新不是离根。',
      tags: ['守正创新', '实事求是', '人民立场'],
      image: 'ten-bamboo-page.jpg',
      caption: '在根脉中守正，在时代中创新'
    },
    {
      chapter: '第四章',
      range: '根脉 · 第5-6页',
      title: '两个结合让理论扎根中国',
      thesis: '同中国具体实际相结合，解决理论如何不悬空；同中华优秀传统文化相结合，解决理论如何有根脉。',
      proof: [
        '第一个结合强调从中国国情出发，不能照搬外来模式。',
        '第二个结合强调中华文明土壤，推动传统文化创造性转化、创新性发展。',
        '两个结合共同说明，科学理论既要回应实践，也要获得文化生命。'
      ],
      takeaway: '理论扎根中国，才能真正回应中国。',
      tags: ['中国具体实际', '中华优秀传统文化', '文化自信'],
      image: 'forbidden-city.jpg',
      pair: [
        ['wuyuan-village.jpg', '中国具体实际', '从国情与人民生活出发'],
        ['forbidden-city.jpg', '中华文化根脉', '在文明土壤中创造转化']
      ]
    },
    {
      chapter: '第五章',
      range: '现实 · 第7页',
      title: '问题导向让理论进入现实',
      thesis: '理论创新的价值，不在于堆砌抽象词语，而在于解释现实、回应现实、指导现实。',
      proof: [
        '科技自立自强回应全球科技竞争和新质生产力发展。',
        '乡村振兴回应发展不平衡和共同富裕的现实课题。',
        '生态文明回应人民对美好生活和良好生态环境的需要。'
      ],
      takeaway: '现实问题在哪里，理论生命力就要体现在哪里。',
      tags: ['新质生产力', '乡村振兴', '生态文明', '中国式现代化'],
      image: 'fast-telescope.jpg',
      cards: [
        ['fast-telescope.jpg', '科技自立自强', '时代化与新质生产力'],
        ['jiangxi-village.jpg', '乡村振兴', '中国实际与共同富裕'],
        ['saihanba-forest.jpg', '绿色发展', '生态文明与现代化'],
        ['high-speed-rail.jpg', '交通强国', '独立自主与道路选择']
      ]
    },
    {
      chapter: '第六章',
      range: '共读 · 第8页',
      title: '几张照片里的共读现场',
      thesis: '我们把文本、课堂笔记和案例材料摊开来，一边读一边改，最后把零散想法收成可以讲清楚的表达。',
      proof: [
        '先把原文读顺，标出“守正创新”“两个结合”“问题导向”等关键词。',
        '再把毛概主线接上，确认每个概念应该落在哪一页、哪一句。',
        '最后一起改讲法、定节奏，把现场讨论变成完整汇报。'
      ],
      takeaway: '坐下来认真读过，讲出来才有底气。',
      tags: ['小组共读', '现场讨论', '汇报打磨'],
      image: 'national-library-hall.jpg',
      cards: [
        ['discussion-reading.jpg', '围坐读文本', '把关键词和课程主线对上'],
        ['discussion-notes.jpg', '一起辨问题', '把“两个结合”和现实案例放在一起讨论'],
        ['discussion-review.jpg', '收束成表达', '确定演示顺序和讲稿节奏']
      ]
    },
    {
      chapter: '第七章',
      range: '展厅 · 第9-10页',
      title: '数字展厅服务思想表达',
      thesis: '网页演示和主题短片不是装饰，而是把抽象理论转化为可观看、可停留、可复盘的学习路径。',
      proof: [
        '自动翻书串起经典导读、理论时间轴、现实案例和最终总结。',
        '影像短片把书页、关键词、现实中国和青年担当压缩成情感线索。',
        '多媒体表达的边界很清楚：技术服务内容，画面服务思想。'
      ],
      takeaway: '让形式变得有用，而不是让形式抢走主题。',
      tags: ['自动演示', '主题短片', '课堂呈现'],
      image: 'tiananmen-square-flag.jpg',
      cards: [
        ['national-library-reading-room.jpg', '自动翻书', '章节推进'],
        ['fast-telescope.jpg', '现实图像', '案例可见'],
        ['china-flag-beijing.jpg', '主题短片', '强化表达'],
        ['ten-bamboo-page.jpg', '最终收束', '总结全篇']
      ]
    },
    {
      chapter: '第八章',
      range: '青年 · 第11页',
      title: '从理论自觉到实践担当',
      thesis: '读经典的终点，是把个人成长放进国家需要和时代趋势中思考。',
      proof: [
        '学理论，不停留在背诵，而是掌握分析问题的方法。',
        '看时代，不只是旁观变化，而是理解变化背后的方向。',
        '做青年，不只谈理想，更要提升本领、服务社会。'
      ],
      takeaway: '经典阅读最终要转化为方向感、判断力和行动力。',
      tags: ['理论自觉', '实践担当', '青春使命'],
      image: 'fuxing-train-guiyang.jpg',
      cards: [
        ['cuhk-reading-room.jpg', '读原著', '把概念、论证和课程主线读准'],
        ['cass-building.jpg', '辨问题', '用理论解释中国现实中的具体课题'],
        ['fuxing-train-guiyang.jpg', '看发展', '在实践中看见时代趋势'],
        ['saihanba-forest.jpg', '作回应', '沉淀成判断力和行动力']
      ]
    },
    {
      chapter: '第九章',
      range: '合卷 · 第12页',
      title: '用三句话收束整套汇报',
      thesis: '守正创新、两个结合、青年担当，构成这次经典品读的完整闭环。',
      proof: [
        '守正创新，是开辟新境界的方法。',
        '两个结合，是理论扎根中国、回应时代的路径。',
        '青年担当，是经典阅读最终要落到的行动。'
      ],
      takeaway: '在经典中坚定方向，在实践中增长本领。',
      tags: ['全篇总结', '最终收束', '课堂展示'],
      image: 'china-flag-beijing.jpg',
      points: [
        ['守正创新', '坚持根本方向，回应时代问题'],
        ['两个结合', '扎根中国实际，赓续文化根脉'],
        ['青年担当', '把理论方法转化为行动能力']
      ]
    }
  ];

  function isChrome() {
    return navigator.userAgent.indexOf('Chrome') !== -1;
  }

  function photo(name) {
    return 'assets/photos/' + name;
  }

  function htmlEscape(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function contentForPage(page) {
    if (page < CONTENT_START_PAGE || page > TOTAL_PAGES - 1) {
      return '<span class="page-number">' + page + '</span>';
    }

    var contentIndex = page - CONTENT_START_PAGE;
    var scene = scenes[Math.floor(contentIndex / 2)];
    var isVisual = contentIndex % 2 === 1;

    if (!scene) {
      return '<span class="page-number">' + page + '</span>';
    }

    return isVisual ? visualPage(scene, page) : textPage(scene, page);
  }

  function textPage(scene, page) {
    return [
      '<article class="mg-page mg-page-text">',
      '<div class="mg-meta"><span>' + htmlEscape(scene.chapter) + '</span><em>' + htmlEscape(scene.range) + '</em></div>',
      '<h1>' + htmlEscape(scene.title) + '</h1>',
      '<p class="mg-thesis">' + htmlEscape(scene.thesis) + '</p>',
      '<ul>' + scene.proof.map(function(item) { return '<li>' + htmlEscape(item) + '</li>'; }).join('') + '</ul>',
      '<blockquote>' + htmlEscape(scene.takeaway) + '</blockquote>',
      '<div class="mg-tags">' + scene.tags.map(function(tag) { return '<span>' + htmlEscape(tag) + '</span>'; }).join('') + '</div>',
      '<span class="page-number">' + page + '</span>',
      '</article>'
    ].join('');
  }

  function visualPage(scene, page) {
    var body = '';
    var visualClass = '';

    if (scene.timeline) {
      visualClass = ' mg-page-timeline';
      body = '<div class="mg-timeline">' + scene.timeline.map(function(item, index) {
        return '<section><b>' + ('0' + (index + 1)).slice(-2) + '</b><div><strong>' + htmlEscape(item[0]) + '</strong><h2>' + htmlEscape(item[1]) + '</h2><p>' + htmlEscape(item[2]) + '</p></div></section>';
      }).join('') + '</div>';
    } else if (scene.pair) {
      visualClass = ' mg-page-pair';
      body = '<div class="mg-pair">' + scene.pair.map(function(item) {
        return '<figure><img src="' + photo(item[0]) + '" alt=""><figcaption><strong>' + htmlEscape(item[1]) + '</strong><span>' + htmlEscape(item[2]) + '</span></figcaption></figure>';
      }).join('') + '</div>';
    } else if (scene.cards || scene.points) {
      var cards = scene.cards || scene.points.map(function(item) { return [scene.image, item[0], item[1]]; });
      visualClass = ' mg-page-cards';
      if (cards.length === 3) {
        visualClass += ' mg-page-discussion';
      }
      body = '<div class="mg-card-grid">' + cards.map(function(item) {
        return '<section><img src="' + photo(item[0]) + '" alt=""><div><strong>' + htmlEscape(item[1]) + '</strong><p>' + htmlEscape(item[2]) + '</p></div></section>';
      }).join('') + '</div>';
    } else {
      visualClass = ' mg-page-photo';
      body = '<figure class="mg-photo"><img src="' + photo(scene.image) + '" alt=""><figcaption>' + htmlEscape(scene.caption || scene.title) + '</figcaption></figure>';
    }

    return [
      '<article class="mg-page mg-page-visual' + visualClass + '">',
      body,
      '<span class="page-number">' + page + '</span>',
      '</article>'
    ].join('');
  }

  function blankPage(page) {
    var sideClass = page % 2 === 0 ? ' even' : ' odd';

    return $('<div />', {
      'class': 'own-size blank-page' + sideClass,
      css: { width: 460, height: 582 }
    }).html(contentForPage(page));
  }

  function pageElement(page) {
    if (page === TOTAL_PAGES - 1) {
      return $('<div />', {
        'class': 'hard fixed back-side dynamic-back p' + page,
        css: { width: 480, height: 600 }
      }).html('<div class="depth"></div>');
    }

    if (page === TOTAL_PAGES) {
      return $('<div />', {
        'class': 'hard dynamic-last p' + page,
        css: { width: 480, height: 600 }
      });
    }

    return blankPage(page);
  }

  function updateDepth(newPage) {
    var page = newPage || book.turn('page');
    var pages = book.turn('pages');
    var frontDepth = 16 * Math.min(1, page * 2 / pages);
    var backDepth = 16 * Math.min(1, (pages - page) * 2 / pages);

    if (page > 3) {
      $('.sj-book .p2 .depth').css({
        width: frontDepth,
        left: 20 - frontDepth
      });
    } else {
      $('.sj-book .p2 .depth').css({ width: 0 });
    }

    if (page < pages - 3) {
      $('.sj-book .dynamic-back .depth').css({
        width: backDepth,
        right: 20 - backDepth
      });
    } else {
      $('.sj-book .dynamic-back .depth').css({ width: 0 });
    }
  }

  function addPage(page) {
    if (!book.turn('hasPage', page)) {
      book.turn('addPage', pageElement(page), page);
    }
  }

  function syncControls(page) {
    $('#page-number').val(page);
    window.location.hash = 'samples/steve-jobs/' + page;
  }

  function pageFromHash() {
    var match = window.location.hash.match(/steve-jobs\/(\d+)/);
    var page = match ? parseInt(match[1], 10) : START_PAGE;

    if (!page || page < 1 || page > TOTAL_PAGES) {
      return START_PAGE;
    }

    return page;
  }

  function setSpine(page) {
    if (page === 1) {
      book.css({ backgroundPosition: '482px 0' });
    } else if (page === TOTAL_PAGES) {
      book.css({ backgroundPosition: '472px 0' });
    } else {
      book.css({ backgroundPosition: '479px 0' });
    }
  }

  function showBook() {
    $('.book-shell').addClass('is-ready');
  }

  function introDuration() {
    var turnData = book.data('turn');

    if (!turnData || !turnData.opts) {
      return null;
    }

    return turnData.opts.duration;
  }

  function setIntroDuration(value) {
    var turnData = book.data('turn');

    if (turnData && turnData.opts) {
      turnData.opts.duration = value;
    }
  }

  function introDurationForPage(page) {
    var progress = Math.max(0, Math.min(1, (TOTAL_PAGES - page) / Math.max(1, TOTAL_PAGES - 1)));
    var fast = 120;
    var slow = 330;

    return Math.round(fast + Math.pow(progress, 0.55) * (slow - fast));
  }

  function introDurationForStep(stepIndex, totalSteps) {
    var progress = totalSteps <= 1 ? 1 : stepIndex / (totalSteps - 1);
    var fast = 100;
    var slow = 300;

    return Math.round(fast + Math.pow(progress, 0.62) * (slow - fast));
  }

  function introDelayForStep(stepIndex, totalSteps) {
    var progress = totalSteps <= 1 ? 1 : stepIndex / (totalSteps - 1);
    var fast = 28;
    var slow = 96;

    return Math.round(fast + Math.pow(progress, 1.15) * (slow - fast));
  }

  $(function() {
    var introActive = true;
    var introTimer = null;
    var normalDuration = null;
    var introSequence = [];
    var introStepIndex = 0;
    var introShown = false;

    function finishIntro() {
      introActive = false;

      if (introTimer) {
        clearTimeout(introTimer);
        introTimer = null;
      }

      if (normalDuration !== null) {
        setIntroDuration(normalDuration);
        normalDuration = null;
      }

      syncControls(1);
      updateDepth(1);
      book.turn('center');
    }

    function revealIntro() {
      if (!introShown) {
        introShown = true;
        showBook();
      }
    }

    function stepIntro() {
      if (!introActive) {
        return;
      }

      if (introStepIndex >= introSequence.length) {
        finishIntro();
        return;
      }

      var nextPage = introSequence[introStepIndex];
      setIntroDuration(introDurationForStep(introStepIndex, introSequence.length));
      book.turn('page', nextPage);
      introStepIndex += 1;
      introTimer = setTimeout(stepIntro, introDelayForStep(introStepIndex, introSequence.length));
    }

    for (var page = CONTENT_START_PAGE; page <= TOTAL_PAGES; page++) {
      book.append(pageElement(page));
    }

    book.turn({
      elevation: 80,
      acceleration: !isChrome(),
      autoCenter: true,
      duration: 1500,
      pages: TOTAL_PAGES,
      width: 960,
      height: 600,
      page: pageFromHash(),
      when: {
        turning: function(e, page) {
          revealIntro();
          updateDepth(page);
          setSpine(page);

          if (page >= 2) {
            $('.sj-book .p2').addClass('fixed');
          } else {
            $('.sj-book .p2').removeClass('fixed');
          }

          if (page < TOTAL_PAGES) {
            $('.sj-book .dynamic-back').addClass('fixed');
          } else {
            $('.sj-book .dynamic-back').removeClass('fixed');
          }
        },
        turned: function(e, page) {
          updateDepth(page);
          syncControls(page);
          book.turn('center');
        },
        missing: function(e, pages) {
          for (var i = 0; i < pages.length; i++) {
            addPage(pages[i]);
          }
        }
      }
    });

    setTimeout(function() {
      normalDuration = introDuration();
      introSequence = [];
      for (var introPage = TOTAL_PAGES - 1; introPage >= 1; introPage--) {
        introSequence.push(introPage);
      }
      introStepIndex = 0;
      $('.book-shell').removeClass('is-ready');
      book.turn('page', TOTAL_PAGES);
      updateDepth(TOTAL_PAGES);
      syncControls(TOTAL_PAGES);

      introTimer = setTimeout(stepIntro, 120);
    }, 0);

    updateDepth(pageFromHash());
    syncControls(pageFromHash());

    $('#previous').click(function() {
      book.turn('previous');
    });

    $('#next').click(function() {
      book.turn('next');
    });

    $('#page-number').keydown(function(e) {
      if (e.keyCode === 13) {
        var page = parseInt(this.value, 10);
        if (page >= 1 && page <= TOTAL_PAGES) {
          introActive = false;
          book.turn('page', page);
        }
      }
    }).change(function() {
      var page = parseInt(this.value, 10);
      if (page >= 1 && page <= TOTAL_PAGES) {
        introActive = false;
        book.turn('page', page);
      }
    });

    $(document).on('click', '.contents-panel button', function(e) {
      e.stopPropagation();
      var page = parseInt($(this).attr('data-page'), 10);
      if (page >= 1 && page <= TOTAL_PAGES) {
        introActive = false;
        book.turn('page', page);
      }
    });

    $(document).keydown(function(e) {
      if ($(e.target).is('input')) {
        return;
      }

      if (e.keyCode === 37) {
        book.turn('previous');
      } else if (e.keyCode === 39) {
        book.turn('next');
      }
    });
  });
})(jQuery);
