export type DirectorySite = {
  title: string;
  url: string;
  description: string;
  backups?: string[];
  note?: string;
};

export type DirectorySection = {
  id: string;
  title: string;
  intro: string;
  sourceGroup: string;
  sourceSection: string;
  sites: DirectorySite[];
};

export const directorySections: DirectorySection[] = [
  {
    "id": "paper-search",
    "title": "论文检索",
    "intro": "学术论文、期刊与开放文献入口。",
    "sourceGroup": "论文工具聚合",
    "sourceSection": "论文查询",
    "sites": [
      {
        "title": "国家哲学社会科学文献中心",
        "url": "http://www.ncpssd.org/",
        "description": "哲学社会科学相关领域文献，在线阅读、下载"
      },
      {
        "title": "文津搜索",
        "url": "http://find.nlc.cn",
        "description": "国家图书馆资源检索，汇聚了60多个资源库，图书、论文、期刊报纸、多媒体等"
      },
      {
        "title": "术语在线",
        "url": "http://www.termonline.cn",
        "description": "查询专业术语的在线网站，权威，更新及时"
      },
      {
        "title": "科塔学术",
        "url": "http://site.sciping.com",
        "description": "学术导航网站，整理了许多论文搜索网站、学术工具、科研软件、期刊出版等"
      },
      {
        "title": "iData",
        "url": "http://www.cn-ki.net",
        "description": "一个知网镜像站，免费下载论文，知网比较新的没有，每天免费下载限额"
      },
      {
        "title": "SCI-Hub",
        "url": "http://sci-hub.com",
        "description": "超棒的免费下载论文的网站，输入文献doi号即可搜索下载"
      },
      {
        "title": "OALib",
        "url": "http://www.oalib.com",
        "description": "收录570万篇学术论文，均可免费下载，是一个较为高效的论文查找网站"
      },
      {
        "title": "研享网",
        "url": "http://www.academicshare.cn",
        "description": "下载英文文献的利器，页面干净，支持关键词、题目、论文doi搜索"
      },
      {
        "title": "Medsci",
        "url": "http://www.medsci.cn/sci",
        "description": "期刊智能查询系统，支持模糊查询，每一个期刊还有对应的论坛"
      },
      {
        "title": "论文下载中心",
        "url": "http://www.hi138.com",
        "description": ""
      }
    ]
  },
  {
    "id": "paper-tools",
    "title": "写作与研究工具",
    "intro": "论文写作、翻译、术语与文献分析工具。",
    "sourceGroup": "论文工具聚合",
    "sourceSection": "论文工具",
    "sites": [
      {
        "title": "Academic Phrasebank",
        "url": "https://www.phrasebank.manchester.ac.uk",
        "description": "论文写作助手，提供模版、介绍、总结等，对非英语母语友好"
      },
      {
        "title": "Connected Papers",
        "url": "https://www.connectedpapers.com",
        "description": "文献调研神器，在线分析文献引文，了解文献引用关联，可对某领域调研"
      },
      {
        "title": "近邻词汇检索",
        "url": "https://tool.mingdawoo.com",
        "description": "可免费查找近似短语和相关术语，词穷的时候可以看看"
      },
      {
        "title": "秘塔写作猫",
        "url": "https://xiezuocat.com",
        "description": "可以校对中文字词、标点、语序、语法等问题，并给出修改建议，支持全文分析和智能排版"
      },
      {
        "title": "Grammarly",
        "url": "https://www.grammarly.com",
        "description": "英文语法错误查询助手，可以安装为word插件"
      },
      {
        "title": "知犀思维导图",
        "url": "https://www.zhixi.com",
        "description": "论文大纲整理工具，免费，同时提供思维导图模板，包括工作方法、考研考证科普知识等模板"
      },
      {
        "title": "词云统计",
        "url": "https://cloud.niucodata.com",
        "description": "在线中文词汇统计和分析工具，词性分类、词频统计并生成词云图"
      },
      {
        "title": "Linggle",
        "url": "https://www.linggle.com",
        "description": "提供英文常用语、搭配、近义词等检索，根据词性推测完整搭配，分析出更准确的英文写作建议"
      },
      {
        "title": "Netspeak",
        "url": "https://netspeak.org",
        "description": "用来查找你记不太清楚的词汇，不记得全部拼写，可以在这个网站上查"
      },
      {
        "title": "Linguee",
        "url": "https://cn.linguee.com",
        "description": "全能在线多语言互译平台，收集了数亿条译文例句，日常领域术语，专业难度偏大的词汇等"
      }
    ]
  },
  {
    "id": "general-nav",
    "title": "综合导航",
    "intro": "聚合式资源站与工具导航。",
    "sourceGroup": "多种资源导航",
    "sourceSection": "工具合集",
    "sites": [
      {
        "title": "嘻嘻导航",
        "url": "https://www.11meigui.com/nav/#term-14",
        "description": "备忘录中标记为需要新增的导航入口。",
        "note": "新增"
      },
      {
        "title": "快导航",
        "url": "https://www.hifast.cn/#term-5658",
        "description": "各类站点、工具分类合集，聚合的智能搜索"
      },
      {
        "title": "虫部落",
        "url": "https://search.chongbuluo.com/#",
        "description": "各类站点、工具分类合集，聚合的智能搜索"
      },
      {
        "title": "A姐分享",
        "url": "https://www.ahhhhfs.com",
        "description": "发布页：收集了各种电子书、模版、软件等干货",
        "backups": [
          "https://dizhi.abskoop.com"
        ]
      },
      {
        "title": "Watchtving",
        "url": "https://www.watchtving.com/sites/1534.html",
        "description": "收集各类电影电视剧站点"
      },
      {
        "title": "即时工具",
        "url": "https://www.67tool.com/",
        "description": "智能在线工具的合集"
      },
      {
        "title": "琪琪有料",
        "url": "http://77ebooks.com/",
        "description": "收集了各种电子书、模版、软件等干货"
      },
      {
        "title": "回家啦",
        "url": "https://www.huijiala.com/",
        "description": "收集了各类有趣的网站"
      },
      {
        "title": "奇迹秀",
        "url": "https://www.qijishow.com/",
        "description": "收集了设计类软件工具的合集"
      },
      {
        "title": "CC资源网",
        "url": "https://www.cdz423.com",
        "description": ""
      },
      {
        "title": "找资源",
        "url": "http://zhaoziyuan1.cc/",
        "description": ""
      }
    ]
  },
  {
    "id": "learning-video",
    "title": "学习视频",
    "intro": "课程、慕课与高质量学习视频入口。",
    "sourceGroup": "视频工具聚合",
    "sourceSection": "学习视频",
    "sites": [
      {
        "title": "B站",
        "url": "http://www.bilibili.com",
        "description": "万能的B站，不要只把它当成娱乐工具"
      },
      {
        "title": "爱课程",
        "url": "http://www.icourses.cn",
        "description": "全国各个高校的精品课程，内容质量挺高"
      },
      {
        "title": "中国高校外语慕课平台",
        "url": "http://moocs.unipus.cn",
        "description": "以外语特色为主的平台，汇聚了国内外各大高校的优质外语课程，免费"
      },
      {
        "title": "Oeasy",
        "url": "http://oeasy.org",
        "description": "高校老师做的综合视频教程网站，包括PS、Office、前端、编程等丰富资源，免费"
      },
      {
        "title": "Coursade",
        "url": "http://www.coursade.com",
        "description": "收录了5万多个在线课程资源，包括艺、体、生、化、理、计算机、金融等学科"
      },
      {
        "title": "大学资源网",
        "url": "http://www.dxzy163.com",
        "description": "小学到大学的各个科目和学科的视频，内容丰富，免费"
      },
      {
        "title": "大学生自学网",
        "url": "http://v.dxsbb.com",
        "description": "内容丰富，可直接在线观看，包括电子电气、计算机、人文哲史、医药健康、数理化生等"
      },
      {
        "title": "51VOA",
        "url": "http://www.51voa.com",
        "description": "练英语听力，内容丰富多样，包括慢速英语、常速英语、VOA视频等，在线听或直接下载"
      },
      {
        "title": "Eslbuzz",
        "url": "http://www.eslbuzz.com",
        "description": "质量很高的免费的英语学习网站，提供了1000多个英语课程，包含了英语学习的各个方面"
      },
      {
        "title": "译学馆",
        "url": "http://www.yxgapp.com",
        "description": "高质量的短视频内容，内容丰富，涵盖科普、英语、心理、计算机、职场等多个方面"
      }
    ]
  },
  {
    "id": "data-sources",
    "title": "数据查询",
    "intro": "宏观、行业与金融数据源。",
    "sourceGroup": "数据工具聚合",
    "sourceSection": "数据查询汇总",
    "sites": [
      {
        "title": "国家数据",
        "url": "https://data.stats.gov.cn",
        "description": "包含了我国经济民生等多个方面的数据，月度、季度、年度都有覆盖，权威全面"
      },
      {
        "title": "CEIC",
        "url": "https://www.ceicdata.com",
        "description": "涵盖主要宏观经济方面的数据库，能够精确查找多个国家和地区的GDP、CPI、进出口等数据"
      },
      {
        "title": "搜数",
        "url": "https://www.soshoo.com",
        "description": "汇集了中国资讯行自92年以来收集的44个行业所有统计和调查数据"
      },
      {
        "title": "中国人民银行",
        "url": "https://www.pbc.gov.cn",
        "description": "可查询社会总资规模、货币供应量、外汇储备、利率、汇率、shibor等金融领域的权威数据"
      },
      {
        "title": "CNNIC",
        "url": "https://www.cnnic.net.cn",
        "description": "可查询互联网网络相关的调查报告，如网民数量、分领域用户规模、细分互联网领域调查报告等信息"
      },
      {
        "title": "金融信息网",
        "url": "https://dc.xinhua08.com",
        "description": "提供多个国家和地区的宏观经济数据，包括CPI、GDP、外汇储备、失业率、进出口等"
      },
      {
        "title": "证监会官网",
        "url": "https://www.csrc.gov.cn",
        "description": "提供各行业的发展情况、统计数据，最新动态、相关监管政策"
      },
      {
        "title": "中国信通院",
        "url": "https://www.caict.ac.cn",
        "description": "提供互联网、通讯、手机市场等相关数据和分析报告"
      },
      {
        "title": "产业信息网",
        "url": "https://www.chyxx.com",
        "description": "主要提供实体经济数据，还包括行业分析和研究，涵盖细分领域的数据，非常全面"
      },
      {
        "title": "收视率排行",
        "url": "https://www.tvtv.hk",
        "description": "提供日/周/月/年的前25名的收视率以及市场份额数据"
      }
    ]
  },
  {
    "id": "mac-setup",
    "title": "Mac 初始化",
    "intro": "Mac 环境搭建与推荐软件清单。",
    "sourceGroup": "苹果软件工具合集",
    "sourceSection": "MAC初始化必装软件",
    "sites": [
      {
        "title": "Awesome-mac",
        "url": "https://github.com/jaywcjlove/awesome-mac",
        "description": "Mac推荐安装软件的GitHub项目"
      },
      {
        "title": "Setting-up-mac",
        "url": "https://github.com/macdao/ocds-guide-to-setting-up-mac",
        "description": "强迫症的Mac设置指南GitHub项目"
      },
      {
        "title": "Best-App",
        "url": "https://github.com/hzlzh/Best-App",
        "description": "收集推荐各种系统的APP、硬件、技巧、配置优化的GitHub项目"
      }
    ]
  },
  {
    "id": "mac-software",
    "title": "Mac 软件",
    "intro": "常用 Mac 软件资源站。",
    "sourceGroup": "苹果软件工具合集",
    "sourceSection": "MAC软件下载",
    "sites": [
      {
        "title": "MAC软件下载",
        "url": "https://macwk.cn/",
        "description": ""
      },
      {
        "title": "异次元",
        "url": "https://www.iplaysoft.com/revios.html",
        "description": "优秀的软件推荐下载站"
      },
      {
        "title": "行客",
        "url": "http://www.runker.net/?s=mac",
        "description": ""
      },
      {
        "title": "多多软件站",
        "url": "http://www.ddooo.com/apple/217_5_1.htm",
        "description": ""
      },
      {
        "title": "牛游戏",
        "url": "https://s.newyx.net/search/?wd=for+mac+",
        "description": ""
      },
      {
        "title": "See mac",
        "url": "https://www.seemac.cn/yxfl/qbyx?order=views&yxyy=zw",
        "description": ""
      }
    ]
  },
  {
    "id": "ai-tools",
    "title": "人工智能",
    "intro": "AI 工具、模型与生成式应用入口。",
    "sourceGroup": "人工智能合集",
    "sourceSection": "人工智能 AI",
    "sites": [
      {
        "title": "AI工具集",
        "url": "https://www.toolify.ai/",
        "description": ""
      },
      {
        "title": "OpenAI",
        "url": "https://video.weibo.com/show",
        "description": "OpenAI的老板"
      },
      {
        "title": "AI生图",
        "url": "https://www.liblib.ai/",
        "description": "AI文生图"
      },
      {
        "title": "GPTs",
        "url": "https://www.GPTsHunter.com",
        "description": "GPTs相关"
      },
      {
        "title": "Hayo",
        "url": "https://www.hayo.com/",
        "description": "OpenAI代理站"
      },
      {
        "title": "Poe",
        "url": "http://poe.com",
        "description": "充值付费的OpenAI代理站"
      },
      {
        "title": "Flowith",
        "url": "https://flowith.io",
        "description": "黑板形式展示聊天过程"
      },
      {
        "title": "皮克斯动画",
        "url": "https://makepixelsdance.github.io/",
        "description": "把皮克斯动画动起来的项目"
      },
      {
        "title": "AI绘图模型",
        "url": "https://www.liblibai.com",
        "description": "AI模型"
      },
      {
        "title": "stable diffusion",
        "url": "https://www.iplaysoft.com/stable-diffusion.html",
        "description": "文生图"
      }
    ]
  },
  {
    "id": "ai-github",
    "title": "AI 开源项目",
    "intro": "高价值 AI GitHub 项目与学习资源。",
    "sourceGroup": "人工智能合集",
    "sourceSection": "人工智能 AI GitHub项目",
    "sites": [
      {
        "title": "Awesome-ChatGPT",
        "url": "https://github.com/ai919/Awesome-ChatGPT",
        "description": "ChatGPT教程"
      },
      {
        "title": "GPTs",
        "url": "https://github.com/linexjlin/GPTs",
        "description": "大量GPT提示词的GitHub项目"
      },
      {
        "title": "Awesome-gptlike-shellsite",
        "url": "https://github.com/bleedline/Awesome-gptlike-shellsite",
        "description": "GPT套壳站"
      },
      {
        "title": "GPT4Free",
        "url": "https://github.com/xtekky/gpt4free",
        "description": "对接多个GPT模型的工具"
      },
      {
        "title": "Generative-ai-for-beginners",
        "url": "https://microsoft.github.io/generative-ai-for-beginners/",
        "description": "微软出品的人工智能学习"
      }
    ]
  },
  {
    "id": "cloud-search",
    "title": "云盘搜索",
    "intro": "网盘资源与聚合搜索。",
    "sourceGroup": "云盘资源搜索合集",
    "sourceSection": "云盘搜索",
    "sites": [
      {
        "title": "易搜",
        "url": "https://yiso.fun",
        "description": "网址发布页",
        "backups": [
          "https://yiso.eu.org"
        ]
      },
      {
        "title": "盘友",
        "url": "https://panyoubbs.xyz",
        "description": "备用地址",
        "backups": [
          "http://panyoubbs.com"
        ]
      },
      {
        "title": "TG喵",
        "url": "https://meow.tg/",
        "description": ""
      },
      {
        "title": "千帆搜索",
        "url": "https://tg.qianfan.app/",
        "description": ""
      },
      {
        "title": "米字型",
        "url": "https://mizixing.com/",
        "description": "阿里云盘资源"
      },
      {
        "title": "射手字幕",
        "url": "https://assrt.net/",
        "description": "经典的字幕下载网站"
      },
      {
        "title": "学霸视频",
        "url": "https://www.xbwpys.com/",
        "description": "各类电影、电视剧、纪录片的网盘资源分享"
      },
      {
        "title": "云盘搜索",
        "url": "https://ssgo.app/",
        "description": ""
      }
    ]
  },
  {
    "id": "ebooks",
    "title": "电子书下载",
    "intro": "电子书检索与下载入口。",
    "sourceGroup": "云盘资源搜索合集",
    "sourceSection": "电子书下载",
    "sites": [
      {
        "title": "Z-lib",
        "url": "https://zh.zlibrary-global.se",
        "description": "电子书搜索与下载"
      },
      {
        "title": "大学资源网",
        "url": "http://www.dxzy163.com",
        "description": ""
      },
      {
        "title": "小鲸鱼搜书",
        "url": "http://9871.org/",
        "description": ""
      },
      {
        "title": "Aibooks",
        "url": "https://www.aibooks.cc/books/8721.html",
        "description": ""
      },
      {
        "title": "Qqszz",
        "url": "https://www.qqszz.com",
        "description": ""
      },
      {
        "title": "Fast8",
        "url": "http://www.fast8.com/",
        "description": ""
      },
      {
        "title": "Mydbfx",
        "url": "http://mydbfx.com",
        "description": "诚通网盘电子资源打包下载网站"
      },
      {
        "title": "Ebooks",
        "url": "https://github.com/kska32/ebooks",
        "description": "电子书分享的GitHub项目"
      }
    ]
  },
  {
    "id": "fun-github",
    "title": "有趣项目",
    "intro": "收藏的高质量 GitHub 项目。",
    "sourceGroup": "有趣的公开项目",
    "sourceSection": "有趣的Github项目",
    "sites": [
      {
        "title": "论文研究",
        "url": "https://github.com/mli/paper-reading",
        "description": ""
      },
      {
        "title": "如何增加寿命",
        "url": "https://github.com/geekan/HowToLiveLonger",
        "description": ""
      },
      {
        "title": "免费API",
        "url": "https://github.com/public-apis/public-apis",
        "description": ""
      },
      {
        "title": "AS系列",
        "url": "https://github.com/sindresorhus/awesome",
        "description": ""
      },
      {
        "title": "如何 赚钱",
        "url": "https://github.com/bleedline/aimoneyhunter",
        "description": ""
      },
      {
        "title": "网站文章备份1",
        "url": "https://github.com/lumosix/article-backup/issues",
        "description": ""
      },
      {
        "title": "网站文章备份2",
        "url": "https://github.com/orgs/ixinzhi/repositories?page=1",
        "description": ""
      },
      {
        "title": "Idify",
        "url": "https://github.com/zhbhun/idify",
        "description": "本地抠图"
      }
    ]
  },
  {
    "id": "fun-sites",
    "title": "趣味站点",
    "intro": "值得逛的公开网站与信息入口。",
    "sourceGroup": "有趣的公开项目",
    "sourceSection": "趣味站点",
    "sites": [
      {
        "title": "免费阅读海外媒体文章",
        "url": "https://nodebe4.github.io/waimei/",
        "description": ""
      },
      {
        "title": "今日热榜",
        "url": "https://tophub.today/n/74KvxwokxM",
        "description": ""
      },
      {
        "title": "随机网址",
        "url": "https://sharkle.com",
        "description": ""
      },
      {
        "title": "世界实时景观",
        "url": "https://www.skylinewebcams.com/",
        "description": ""
      },
      {
        "title": "歪果仁信息生产",
        "url": "https://www.haoweichi.com/",
        "description": ""
      },
      {
        "title": "打假导航",
        "url": "http://www.dajiadaohang.com/",
        "description": ""
      },
      {
        "title": "价格查询",
        "url": "http://p.zwjhl.com/price.aspx",
        "description": ""
      },
      {
        "title": "OpenDocCN",
        "url": "https://gitcode.net/OpenDocCN",
        "description": "开源文件备份 Gitcode"
      },
      {
        "title": "装逼生成器",
        "url": "https://c.tianhezulin.com/",
        "description": ""
      },
      {
        "title": "对话生成器",
        "url": "https://www.ahhhhfs.com/38188/",
        "description": ""
      }
    ]
  },
  {
    "id": "pdf-tools",
    "title": "PDF 工具",
    "intro": "在线 PDF 转换、压缩与编辑工具。",
    "sourceGroup": "在线处理工具合集",
    "sourceSection": "PDF文件处理工具",
    "sites": [
      {
        "title": "iLovePDF",
        "url": "https://www.ilovepdf.com/zh-cn",
        "description": ""
      },
      {
        "title": "Smallpdf",
        "url": "https://smallpdf.com/",
        "description": ""
      },
      {
        "title": "PDF24 Tools",
        "url": "https://tools.pdf24.org/zh/",
        "description": ""
      },
      {
        "title": "超级PDF",
        "url": "https://xpdf.net/",
        "description": ""
      },
      {
        "title": "CleverPDF",
        "url": "https://www.cleverpdf.com/cn",
        "description": ""
      },
      {
        "title": "easyPDF",
        "url": "http://easypdf.com/",
        "description": ""
      },
      {
        "title": "PDF派",
        "url": "https://www.pdfpai.com/",
        "description": ""
      },
      {
        "title": "PDF2Go",
        "url": "https://www.pdf2go.com/zh",
        "description": ""
      }
    ]
  }
] as const;

export const directoryStats = {
  sectionCount: directorySections.length,
  siteCount: directorySections.reduce((sum, section) => sum + section.sites.length, 0)
};
