import type { SiteLanguage } from '@/types';

const SUPPORTED_LANGUAGES = ['zh-CN', 'en'] as const satisfies readonly SiteLanguage[];

function normalizeLanguage(value: string | undefined): SiteLanguage {
  if (!value) return 'zh-CN';
  return SUPPORTED_LANGUAGES.includes(value as SiteLanguage) ? (value as SiteLanguage) : 'zh-CN';
}

export const siteLanguage = normalizeLanguage(import.meta.env.PUBLIC_SITE_LANG);

const uiByLanguage = {
  'zh-CN': {
    meta: {
      lang: 'zh-CN',
      defaultDescription: '关于学习、工作、生活，以及安静成长过程的中文写作与阅读札记。'
    },
    nav: {
      home: '首页',
      writing: '写作',
      sites: '站点库',
      archive: '归档',
      about: '关于',
      primaryLabel: '主导航'
    },
    brand: {
      subtitle: '关于学习、工作与安静生活方式的写作与札记'
    },
    footer: {
      summary: '一个安静安放文章、笔记与值得反复回看的想法的地方。',
      tech: '使用 Astro、TypeScript 与 Tailwind 构建。',
      rhythm: '为了慢读而写，也适合反复回看。'
    },
    labels: {
      essay: '文章',
      note: '笔记',
      readingList: '书单',
      chars: '字',
      pieces: '篇',
      books: '本书',
      years: '年',
      recurringThemes: '个持续主题',
      slowReadingSessions: '次慢读',
      readingSessions: '次阅读',
      totalPieces: '篇总计',
      sectionsMapped: '节结构',
      source: '来源',
      archiveYear: '归档年份',
      bestEntryPoints: '推荐入口',
      thisPage: '本页目录'
    },
    post: {
      readingTime: (minutes: number) => `${minutes} 分钟阅读`,
      bookCount: (count: number) => `${count} 本书`,
      bookCountRecorded: (count: number) => `收录 ${count} 本书`,
      piecesCount: (count: number) => `${count} 篇`,
      yearsCount: (count: number) => `${count} 年`,
      recurringThemesCount: (count: number) => `${count} 个持续主题`,
      slowReadingSessionsCount: (count: number) => `${count} 次慢读`,
      totalPiecesCount: (count: number) => `${count} 篇总计`,
      readingSessionsCount: (count: number) => `${count} 次阅读`,
      sectionsMappedCount: (count: number) => `${count} 节结构`,
      typeCount: {
        essay: (count: number) => `${count} 篇文章`,
        note: (count: number) => `${count} 则笔记`,
        readingList: (count: number) => `${count} 份书单`
      },
      typeDescription: {
        essay: '一篇适合慢慢展开阅读的长文，保留结构、例子与思考的层次。',
        note: '一则更短、更凝练的记录，适合一口气读完，再在日后反复回来。',
        readingList: '把书目、参考资料和短评整理成书架式页面，便于并排观看影响来源。'
      }
    },
    cards: {
      openShelf: '打开书架 →',
      readEssay: '阅读文章 →',
      readPiece: '阅读全文 →'
    },
    toc: {
      title: '本页目录',
      description: '一个轻量的章节地图，方便慢慢阅读。'
    },
    home: {
      title: '首页',
      description: 'Ludwig Shen 关于学习、工作、克制，以及长期成长过程的文章与札记。',
      eyebrow: '雨沐苍树 · Ludwig 的文章与札记',
      heading: '在时间中训练自我',
      intro: '这里的作品经过时间打磨后的保留：学习方法、技术工作中的笔记，以及关于如何建立更安静、更稳定内在生活的思考。',
      note: '这不是一个追求频繁更新的信息流，而是一组可以从不同角度进入的中文写作档案。',
      browseWriting: '浏览写作',
      aboutLudwig: '关于 Ludwig',
      editorialNote: '编辑说明',
      editorialTitle: '这是一本有明确视角的个人札记。',
      editorialBody: '它并不是泛化的自我提升内容，而是明显带有 Ludwig 气质的档案：技术取向、语调耐心，并持续回到方法、克制与重读这些主题。',
      themes: [
        {
          title: '把学习当作长期手艺',
          body: '这里很少把学习写成速度游戏。Ludwig 更关心方法、重复，以及严肃练习如何缓慢累积。'
        },
        {
          title: '把克制当作结构',
          body: '极简、习惯与注意力在这里不是外观上的审美，而是让生活更平静、更可持续的结构。'
        },
        {
          title: '技术工作也有内在生活',
          body: '这些文字在技术、纪律与反思之间来回移动，持续追问工作正在把人塑造成什么样子。'
        }
      ],
      entryPaths: [
        '想先进入方法论，可以从学习相关文章开始。',
        '想看影响来源而不只是结论，可以打开一份书单。',
        '想看主题如何逐年加深，可以按年份浏览归档。'
      ],
      featuredEyebrow: '精选导读',
      featuredTitle: '进入 Ludwig 档案的三种方式',
      featuredIntro: '这些并不只是“最近更新”，而是从不同角度呈现这份档案核心关切的稳定入口。',
      viewArchive: '查看归档 →',
      latestEyebrow: '最近',
      latestTitle: '近期内容',
      latestIntro: '较新的几篇内容，更像一张阅读桌，而不是一排排资讯卡片。',
      browseAllWriting: '查看全部写作 →',
      whyExists: '为什么要做这个档案',
      whyExistsBody: '不是为了追赶信息流，而是为了反复回到那些值得长期思考的问题，让它们慢慢沉淀成方法、品味与立场。',
      howToUse: '如何使用它',
      howToUseBody: '可以从上面的精选文章开始，也可以按年份浏览；如果你更想看影响来源而不只是结论，就去打开一份书架。'
    },
    writingPage: {
      title: '写作',
      description: '进入 Ludwig Shen 的文章、笔记与书单的精选入口。',
      eyebrow: '写作',
      heading: '这是一张经过整理的写作阅读桌，不只是倒序列表。',
      intro: '当内容按阅读姿态归类时，这个档案会更容易进入：长文适合想看完整论述的时候，笔记适合快速回返，书架则更适合看影响来源而不只是结论。',
      howToBrowseEyebrow: '浏览方式',
      howToBrowseTitle: '三种进入习惯',
      howToBrowseBody: '先从与你当下精力匹配的内容形态进入，熟悉声音之后，再按年份或主题向外展开。',
      habits: [
        '想看完整方法与节奏时，先读文章。',
        '想快速回看学习、工作或生活问题时，用笔记。',
        '想知道这些文字读了什么、受了什么影响时，打开书单。'
      ],
      startHereEyebrow: '从这里开始',
      startHereTitle: '进入档案的精选入口',
      startHereIntro: '这些内容被挑出来，不是因为它们恰好较新，而是因为它们能更好地代表 Ludwig 长期关心的问题。',
      browseArchiveByYear: '按年份浏览归档 →',
      essaySectionTitle: '适合慢读的文章',
      essaySectionIntro: '这里是最具结构感的长文：方法、克制、技术工作与内在姿态，会在章节之间逐步展开。',
      noteSectionTitle: '适合反复回看的笔记',
      noteSectionIntro: '更短的条目与压缩后的思考。适合想读一个清晰立场，或想在一次坐读中完成回顾的时候。',
      readingListSectionTitle: '书单与书架',
      readingListSectionIntro: '把书与简短评论当作影响、批注与品味快照来陈列，而不是传统书评。'
    },
    archivePage: {
      title: '归档',
      description: 'Ludwig Shen 的文章、笔记与书单的按年归档。',
      eyebrow: '归档',
      heading: '按年份查看：哪些内容值得留下来。',
      intro: '它不是把一切压扁成一条信息流，而是让你看到某些关切在什么时间出现、聚集、加深。',
      usePageEyebrow: '使用方式',
      usePageTitle: '先扫年份，再进入某个簇',
      usePageBody: '每一张年份卡片都会收集那个时期写下的内容，并给你一个快速判断：那一年主要在写什么。',
      entriesPreserved: (count: number, categories: string) => `这一年保留下来 ${count} 篇内容，涉及 ${categories}。`
    },
    aboutPage: {
      title: '关于',
      description: '关于雨沐苍树、它关心的问题，以及在这里写作的人。',
      eyebrow: '关于',
      heading: '一个为耐久想法、认真学习与安静生活结构而建立的个人档案',
      intro: '雨沐苍树被做成一个适合反复回来的地方：它不是要你追更新的信息流，而是一组在慢慢重读时会更有用的文章、笔记与影响线索。',
      principlesEyebrow: '工作原则',
      principles: [
        {
          title: '为了理解而写',
          body: '目标不是持续高频输出，而是把一时的感受整理成真正值得保留下来的原则。'
        },
        {
          title: '偏爱耐久的方法',
          body: '学习、工作与自我驱动，在被整理成可重复实践之后，才会真正变得有用。'
        },
        {
          title: '让界面保持安静',
          body: '个人档案应该帮助文字呼吸，而不是和文字竞争注意力。'
        }
      ],
      sections: [
        {
          heading: '这个网站是做什么的',
          text: '雨沐苍树是一个围绕学习、工作、生活，以及更从容成长技艺而建立的个人写作档案。有些内容像文章，有些像现场笔记，有些像一排影响来源的书架。把它们连在一起的，是一种筛选原则：只留下那些在最初兴奋感过去之后，仍然有用的东西。'
        },
        {
          heading: '在这里写作的是怎样的人',
          text: '这个网站背后的气质是技术性的，但不是狭义的技术性。它更重方法而非噪音，更重反思而非即时反应，更关心那些能让生活真正变得更可过的系统，而不只是更高产。这里的写作持续围绕注意力、学习、个人纪律，以及支撑长期成长的小结构展开。'
        },
        {
          heading: '这个档案应该如何继续生长',
          text: '新的内容应该易于添加，也应该易于维护。这就是为什么网站会被重建为结构化内容、更清晰的页面类型与更平静的编辑系统：不只是为了更好看，更是为了让未来的写作更容易长期活下去。'
        }
      ]
    },
    sitesPage: {
      title: '站点库',
      description: '把备忘录里的高价值网址整理成可长期维护的专业导航页。',
      eyebrow: '站点库',
      heading: '一个经过整理的高质量网址导航页，服务学习、研究、工具与长期工作流。',
      intro: '这不是随手堆链接的收藏夹，而是从备忘录《【站点库】网址合集》里提炼出来的站点库：按主题分区、强调可用性，也保留后续扩充的空间。',
      noteTitle: '收录原则',
      noteBody: '优先保留能直接提高效率、扩展信息入口，或适合作为长期工具底座的网站。页面风格刻意保持克制、专业与可浏览。',
      jumpTitle: '快速跳转',
      sourceTitle: '来源',
      sourceBody: '内容整理自 Apple Notes 备忘录《【站点库】网址合集》，并把“需要新增”的网址一并纳入。',
      stats: {
        sections: '主题分区',
        sites: '精选站点',
        memo: '来源备忘录'
      },
      actions: {
        visitSite: '打开网站 ↗',
        viewBackup: '备用地址',
        jumpToSection: '跳到分区 →'
      },
      badges: {
        newlyAdded: '新增',
        backup: '备用'
      },
      meta: {
        siteCount: (count: number) => `${count} 个站点`,
        backupCount: (count: number) => `${count} 个备用地址`
      }
    },
    postLayout: {
      backToWriting: '← 返回写作',
      atAGlance: '一眼概览',
      published: '发布于',
      shape: '篇幅',
      archive: '归档',
      shelf: '书架',
      shelfCount: (count: number) => `这份书单共收录 ${count} 本书。`,
      archiveFiled: (year: string, category: string) => `${year} 年，归入 ${category}。`,
      readingNote: '阅读提示',
      readingPrompt: {
        essay: '这是一篇长文：可以顺着标题慢慢往下读，边栏里的提示只作为安静的辅助。',
        note: '这是一则短笔记：适合一口气读完，等问题再次出现时再回来重读。',
        'reading-list': '这是一份书架式页面：先浏览整份书单，再把其中的短评当作批注来看。'
      },
      sectionMap: '章节地图',
      editorialPreface: '阅读前言',
      quieterFrame: '一个更安静的阅读框架',
      quieterFrameBody: '页面被故意安排成接近纸质长文的节奏：先给出元信息，把边栏说明压低，让正文列承担主要阅读工作。',
      thisPieceIsDoing: '这篇内容在做什么',
      bestWayIn: '最佳进入方式',
      archiveKeptAs: (label: string) => `这篇内容以「${label}」的形式被保存在档案中，适合慢慢重读，而不是信息流式扫读。`,
      continueBrowsing: '继续浏览',
      stayInsideArchive: '继续留在这个档案里',
      returnToWritingTable: '回到写作页',
      browseYearArchive: (year: string) => `查看 ${year} 年归档`
    },
    bookshelf: {
      title: '阅读书架'
    },
    featured: {
      methodLabel: '先看方法',
      methodNote: '这是进入 Ludwig 长期方法论关切的一篇清晰起点：它关心严肃学习如何变成可重复的实践。',
      restraintLabel: '关于如何克制地生活',
      restraintNote: '一篇更安静的文字，讨论减法、注意力，以及这个档案反复回到的生活结构。',
      workLabel: '工作、系统与人的姿态',
      workNote: '如果你更想看这本札记里更偏技术、也更贴近工作的部分，可以从这里进入。'
    },
    errors: {
      missingPostSlug: '缺少文章 slug。',
      postNotFound: (slug: string) => `未找到 slug 为 ${slug} 的文章。`
    }
  },
  en: {
    meta: {
      lang: 'en',
      defaultDescription: 'Warm editorial notes on study, work, life, and the quiet practice of becoming.'
    },
    nav: {
      home: 'Home',
      writing: 'Writing',
      sites: 'Directory',
      archive: 'Archive',
      about: 'About',
      primaryLabel: 'Primary'
    },
    brand: {
      subtitle: 'Ludwig’s essays on study, work, and a quieter life'
    },
    footer: {
      summary: 'A calm home for essays, notebooks, and slow-returning ideas.',
      tech: 'Built with Astro, TypeScript, and Tailwind.',
      rhythm: 'Written to be read slowly, and revisited often.'
    },
    labels: {
      essay: 'Essay',
      note: 'Note',
      readingList: 'Reading list',
      chars: 'chars',
      pieces: 'pieces',
      books: 'books',
      years: 'years',
      recurringThemes: 'recurring themes',
      slowReadingSessions: 'slow reading sessions',
      readingSessions: 'reading sessions',
      totalPieces: 'total pieces',
      sectionsMapped: 'sections mapped',
      source: 'Source',
      archiveYear: 'Archive year',
      bestEntryPoints: 'Best entry points',
      thisPage: 'On this page'
    },
    post: {
      readingTime: (minutes: number) => `${minutes} min read`,
      bookCount: (count: number) => `${count} ${count === 1 ? 'book' : 'books'}`,
      bookCountRecorded: (count: number) => `${count} ${count === 1 ? 'book' : 'books'} recorded`,
      piecesCount: (count: number) => `${count} pieces`,
      yearsCount: (count: number) => `${count} years`,
      recurringThemesCount: (count: number) => `${count} recurring themes`,
      slowReadingSessionsCount: (count: number) => `${count} slow reading sessions`,
      totalPiecesCount: (count: number) => `${count} total pieces`,
      readingSessionsCount: (count: number) => `${count} reading sessions`,
      sectionsMappedCount: (count: number) => `${count} sections mapped`,
      typeCount: {
        essay: (count: number) => `${count} essays`,
        note: (count: number) => `${count} notes`,
        readingList: (count: number) => `${count} reading lists`
      },
      typeDescription: {
        essay: 'A longer piece meant to unfold patiently, with room for structure, examples, and reflection.',
        note: 'A shorter entry, usually compact enough to read in one sitting and return to later.',
        readingList: 'Books, references, and short remarks gathered into a shelf-like page.'
      }
    },
    cards: {
      openShelf: 'Open shelf →',
      readEssay: 'Read essay →',
      readPiece: 'Read piece →'
    },
    toc: {
      title: 'On this page',
      description: 'A lightweight section map for slower reading.'
    },
    home: {
      title: 'Home',
      description: 'Ludwig Shen’s essays and notebooks on study, work, restraint, and the long practice of becoming.',
      eyebrow: '雨沐苍树 · Ludwig’s essays and notebooks',
      heading: 'A personal archive about study, work, restraint, and how a life is trained over time.',
      intro: 'Ludwig writes like someone trying to keep what survives rereading: methods for learning, notes on technical work, and reflections on building a quieter, steadier interior life.',
      note: 'The site is less a stream of updates than a shelf of durable concerns — Chinese writing, editorial pacing, and an archive meant to be entered from several angles.',
      browseWriting: 'Browse writing',
      aboutLudwig: 'About Ludwig',
      editorialNote: 'Editorial note',
      editorialTitle: 'A notebook with a recognizable point of view.',
      editorialBody: 'Not generic self-improvement writing: the archive is distinctly Ludwig’s — technical in temperament, patient in tone, and repeatedly concerned with method, restraint, and rereading.',
      themes: [
        {
          title: 'Study as a long craft',
          body: 'Learning here is rarely framed as speed. Ludwig keeps coming back to method, repetition, and the slow compounding of serious practice.'
        },
        {
          title: 'Restraint as architecture',
          body: 'Minimalism, habit, and attention are treated less as aesthetics than as structures that make a life calmer and more workable.'
        },
        {
          title: 'Technical work with an inner life',
          body: 'The writing moves between code-adjacent work, discipline, and reflection — always asking what kind of person the work is shaping.'
        }
      ],
      entryPaths: [
        'Start with the study essays if you want Ludwig’s clearest method-writing.',
        'Open a reading list when you want influences, not just conclusions.',
        'Browse the archive by year to watch concerns deepen rather than change with the feed.'
      ],
      featuredEyebrow: 'Featured curation',
      featuredTitle: 'Three strong ways into Ludwig’s archive',
      featuredIntro: 'These are not just recent posts. They are durable starting points chosen to show the archive’s main concerns from different angles.',
      viewArchive: 'View archive →',
      latestEyebrow: 'Latest',
      latestTitle: 'Recent entries',
      latestIntro: 'Newer pieces from the archive, arranged more like a reading table than a grid of boxes.',
      browseAllWriting: 'Browse all writing →',
      whyExists: 'Why this archive exists',
      whyExistsBody: 'Not to keep up with a feed, but to keep returning to the same durable questions until they become method, taste, and stance.',
      howToUse: 'How to use it',
      howToUseBody: 'Start with the curated essays above, follow the archive by year, or open a reading shelf when you want Ludwig’s influences as much as his conclusions.'
    },
    writingPage: {
      title: 'Writing',
      description: 'Curated entry points into Ludwig Shen’s essays, notes, and reading lists.',
      eyebrow: 'Writing',
      heading: 'A curated writing table, not just a reverse-chronological list.',
      intro: 'The archive is easier to enter when grouped by reading posture: long essays when you want argument, notes when you want a sharp return, and shelves when you want influences instead of conclusions.',
      howToBrowseEyebrow: 'How to browse',
      howToBrowseTitle: 'Three entry habits',
      howToBrowseBody: 'Start from the piece shape that matches your energy, then move outward by year or category once you know the voice.',
      habits: [
        'Open an essay when you want Ludwig’s full method and pacing.',
        'Use notes as revisitable fragments for study, work, and life questions.',
        'Use reading lists to see what the archive reads alongside what it claims.'
      ],
      startHereEyebrow: 'Start here',
      startHereTitle: 'Curated entry points into the archive',
      startHereIntro: 'These pieces were chosen as strong ways into Ludwig’s concerns, not merely because they happen to be recent.',
      browseArchiveByYear: 'Browse archive by year →',
      essaySectionTitle: 'Essays for slower reading',
      essaySectionIntro: 'The longer pieces where the archive is most architectural: method, restraint, technical work, and interior stance developed across sections.',
      noteSectionTitle: 'Notes for sharper return visits',
      noteSectionIntro: 'Shorter entries and compact reflections. Useful when you want a distilled stance or a piece that can be reread in one sitting.',
      readingListSectionTitle: 'Reading lists and shelves',
      readingListSectionIntro: 'Books and brief comments arranged as influences, annotations, and snapshots of taste rather than conventional reviews.'
    },
    archivePage: {
      title: 'Archive',
      description: 'Year-by-year archive of Ludwig Shen’s essays, notes, and reading lists.',
      eyebrow: 'Archive',
      heading: 'A year-by-year view of what stayed worth keeping.',
      intro: 'Instead of flattening everything into one stream, the archive lets you see when concerns emerged, clustered, and deepened.',
      usePageEyebrow: 'Use this page',
      usePageTitle: 'Scan the years, then enter a cluster',
      usePageBody: 'Each year card collects the pieces written in that period, along with a quick sense of what kinds of writing dominate it.',
      entriesPreserved: (count: number, categories: string) => `${count} entries preserved from this year, across ${categories}.`
    },
    aboutPage: {
      title: 'About',
      description: 'About 雨沐苍树, its concerns, and the person writing here.',
      eyebrow: 'About',
      heading: 'A personal archive for durable ideas, careful study, and the quieter architecture of a thoughtful life',
      intro: '雨沐苍树 is built as a place to return to: not a feed to keep up with, but an archive of essays, notes, and influences that become more useful when revisited slowly.',
      principlesEyebrow: 'Working principles',
      principles: [
        {
          title: 'Write to understand',
          body: 'The goal is not constant publication. It is to turn passing impressions into principles worth keeping.'
        },
        {
          title: 'Prefer durable methods',
          body: 'Learning, work, and self-direction become more useful when they are shaped into repeatable practices.'
        },
        {
          title: 'Keep the interface quiet',
          body: 'A personal archive should help words breathe, not compete with them.'
        }
      ],
      sections: [
        {
          heading: 'What this site is for',
          text: '雨沐苍树 is a personal writing archive built around study, work, life, and the slower craft of becoming more deliberate. Some pieces read like essays, some like field notes, some like shelves of influence. What binds them together is the attempt to keep only what remains useful after the first moment of excitement has passed.'
        },
        {
          heading: 'What kind of person is writing here',
          text: 'The sensibility behind the site is technical, but not narrowly technical. It values method over noise, reflection over immediacy, and systems that make a life more livable rather than merely more productive. The writing is interested in attention, learning, personal discipline, and the small structures that make long-term growth possible.'
        },
        {
          heading: 'How the archive should grow',
          text: 'New work should be easy to add and pleasant to maintain. That is why the site is being rebuilt around structured content, clearer page types, and a calmer editorial system: not just to look better, but to make future writing easier to keep alive.'
        }
      ]
    },
    sitesPage: {
      title: 'Directory',
      description: 'A polished directory page distilled from the websites collected in the memo.',
      eyebrow: 'Directory',
      heading: 'A curated website directory for learning, research, tools, and long-term digital workflows.',
      intro: 'This is not a loose bookmark dump. It turns the memo “【站点库】网址合集” into a structured directory page with categories, visual hierarchy, and room to grow.',
      noteTitle: 'Curation rules',
      noteBody: 'Priority goes to websites that extend capability, improve research access, or serve as durable infrastructure for recurring work. The interface stays restrained, clean, and professional.',
      jumpTitle: 'Quick jump',
      sourceTitle: 'Source',
      sourceBody: 'Curated from the Apple Notes memo “【站点库】网址合集”, including the link marked as newly added.',
      stats: {
        sections: 'Sections',
        sites: 'Selected sites',
        memo: 'Source memo'
      },
      actions: {
        visitSite: 'Open site ↗',
        viewBackup: 'Backup link',
        jumpToSection: 'Jump to section →'
      },
      badges: {
        newlyAdded: 'New',
        backup: 'Backup'
      },
      meta: {
        siteCount: (count: number) => `${count} sites`,
        backupCount: (count: number) => `${count} backup links`
      }
    },
    postLayout: {
      backToWriting: '← Back to writing',
      atAGlance: 'At a glance',
      published: 'Published',
      shape: 'Shape',
      archive: 'Archive',
      shelf: 'Shelf',
      shelfCount: (count: number) => `${count} books recorded in this list.`,
      archiveFiled: (year: string, category: string) => `${year}, filed under ${category}.`,
      readingNote: 'Reading note',
      readingPrompt: {
        essay: 'A longer-form piece: settle into the headings, let each section land, and take the links in the margin as quiet support.',
        note: 'A compact piece: best read in one pass, then returned to later when the problem reappears.',
        'reading-list': 'Open the shelf first, then move through the short remarks as annotations rather than a single linear essay.'
      },
      sectionMap: 'Section map',
      editorialPreface: 'Editorial preface',
      quieterFrame: 'A quieter reading frame',
      quieterFrameBody: 'The page is intentionally paced like a print essay: metadata up front, margin notes kept small, and the prose column left to do most of the work.',
      thisPieceIsDoing: 'This piece is doing',
      bestWayIn: 'Best way in',
      archiveKeptAs: (label: string) => `Kept in the archive as a ${label.toLowerCase()}, meant to reward slower rereading rather than feed-style skimming.`,
      continueBrowsing: 'Continue browsing',
      stayInsideArchive: 'Stay inside the archive',
      returnToWritingTable: 'Return to the writing table',
      browseYearArchive: (year: string) => `Browse the ${year} archive`
    },
    bookshelf: {
      title: 'Reading shelf'
    },
    featured: {
      methodLabel: 'Start with method',
      methodNote: 'A clear entry into Ludwig’s long-running concern with how serious study becomes repeatable practice.',
      restraintLabel: 'On living with restraint',
      restraintNote: 'A quieter piece about subtraction, attention, and the kind of life architecture this archive keeps returning to.',
      workLabel: 'Work, systems, and stance',
      workNote: 'Useful when you want the more technical, work-shaped side of the notebook rather than a purely reflective essay.'
    },
    errors: {
      missingPostSlug: 'Missing post slug.',
      postNotFound: (slug: string) => `Post not found for slug: ${slug}`
    }
  }
} as const;

export const siteCopy = uiByLanguage[siteLanguage];

export function joinPhrases(items: string[]) {
  return items.join(siteLanguage === 'zh-CN' ? '、' : ' · ');
}
