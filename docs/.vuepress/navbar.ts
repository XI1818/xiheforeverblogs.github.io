import { defineNavbarConfig } from "vuepress-theme-plume";

// 中文导航栏配置，图标地址  https://icon-sets.iconify.design/logos/
export const zhNavbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "solar:home-bold" },
  { text: "博客",  icon: "material-symbols:article-outline" ,

  items: [
    {
      text: "博客",
      items: [
        { text: "门站入口", link: "/blog/", icon: "mdi:language-html5" },
        { text: "快速开始", link: "/notes/快速开始/", icon: "mdi:language-css3" },
      ],
    },
  ],
},
  // { text: "标签", link: "/blog/tags/" ,},
  // { text: "归档", link: "/blog/archives/" },
  // {
  //   text: "笔记",
  //   items: [{ text: "示例", link: "demo/README.md" }],
  // },
  // {
  //   text: "文档库",
  //   prefix: "",
  //   items: [
  //     {
  //       text: "后端",
  //       items: [
  //         { text: "测试-1", link: "测试/" },
  //         { text: "测试-2", link: "test/" },
  //         { text: "前端学习测试", link: "前端学习/" },
  //       ],
  //     },
  //   ],
  // },
  /* =================== 前端学习 =================== */
  {
    text: "前端学习",
    prefix: "",
    icon: "mdi:web",
    items: [
      {
        text: "前端学习",
        items: [
          { text: "导航", link: "/notes/前端学习记录/index.md", icon: "mdi:language-html5" },
          { text: "HTML", link: "/notes/前端学习记录/01-HTML/01-测试.md", icon: "mdi:language-html5" },
          { text: "CSS基础", link: "/notes/前端学习记录/02-CSS基础/01-测试.md", icon: "mdi:language-css3" },
          { text: "CSS进阶", link: "/notes/前端学习记录/03-CSS进阶/01-测试.md", icon: "mdi:palette-outline" }, // 调整了图标一致性
          { text: "JavaScript基础", link: "/notes/前端学习记录/04-JavaScript基础/01-测试.md", icon: "mdi:language-javascript" },
          { text: "JavaScript基础：ES6语法", link: "/notes/前端学习记录/05-JavaScript基础：ES6语法/01-测试.md", icon: "mdi:script-outline" }, // 调整图标
          { text: "JavaScript基础：异步编程", link: "/notes/前端学习记录/06-JavaScript基础：异步编程/01-测试.md", icon: "mdi:timer-sand" }, // 调整图标
          { text: "JavaScript进阶", link: "/notes/前端学习记录/07-JavaScript进阶/01-测试.md", icon: "mdi:code-tags" }, // 调整图标
          { text: "CSS和DOM练习", link: "/notes/前端学习记录/08-CSS和DOM练习/01-测试.md", icon: "mdi:web" },
          { text: "移动Web开发", link: "/notes/前端学习记录/09-移动Web开发/01-测试.md", icon: "mdi:cellphone" },
          { text: "MySQL数据库", link: "/notes/前端学习记录/10-MySQL数据库/01-测试.md", icon: "mdi:database" },
          { text: "Node.js", link: "/notes/前端学习记录/11-Node.js/01-测试.md", icon: "mdi:nodejs" },
          { text: "Vue基础", link: "/notes/前端学习记录/12-Vue基础/01-测试.md", icon: "mdi:vuejs" },
          { text: "TypeScript", link: "/notes/前端学习记录/13-TypeScript/01-测试.md", icon: "mdi:language-typescript" },
          { text: "WebPack", link: "/notes/前端学习记录/14-WebPack/01-测试.md", icon: "mdi:webpack" },
          { text: "Electron", link: "/notes/前端学习记录/15-Electron/01-测试.md", icon: "mdi:electron-framework" },
          { text: "前端性能优化", link: "/notes/前端学习记录/16-前端性能优化/01-测试.md", icon: "mdi:chart-line" }, // 调整图标
          { text: "小程序开发", link: "/notes/前端学习记录/17-小程序开发/01-测试.md", icon: "mdi:cellphone-link" },
        ],
      },
    ],
  },
  
  {
    text: "后端学习",
    prefix: "",
    icon: "mdi:server",
    items: [
      {
        text: "后端学习",
        items: [
          { text: "导航", link: "/notes/后端学习记录/index.md", icon: "mdi:language-html5" },
          { text: "Java基础", link: "/notes/后端学习记录/01-Java基础/01-测试.md", icon: "mdi:language-java" },
          { text: "MySQL", link: "/notes/后端学习记录/02-MySQL/01-测试.md", icon: "mdi:database" },
          { text: "SSM", link: "/notes/后端学习记录/03-SSM/01-测试.md", icon: "mdi:code-braces" },
          { text: "JavaWeb", link: "/notes/后端学习记录/04-JavaWeb/01-测试.md", icon: "mdi:web" },
          { text: "Spring", link: "/notes/后端学习记录/05-Spring/01-测试.md", icon: "mdi:leaf" },
          { text: "Redis", link: "/notes/后端学习记录/06-Redis/01-测试.md", icon: "mdi:database-outline" },
          { text: "SpringBoot", link: "/notes/后端学习记录/07-SpringBoot/01-测试.md", icon: "mdi:leaf" },
          { text: "设计模式", link: "/notes/后端学习记录/08-设计模式/01-测试.md", icon: "mdi:format-list-bulleted" },
          { text: "数据结构与算法", link: "/notes/后端学习记录/09-数据结构与算法/01-测试.md", icon: "mdi:chart-timeline" },
          { text: "常见业务拆解", link: "/notes/后端学习记录/10-常见业务拆解/01-测试.md", icon: "mdi:briefcase-outline" },
          { text: "Git", link: "/notes/后端学习记录/11-Git/01-测试.md", icon: "mdi:git" },
          { text: "微服务", link: "/notes/后端学习记录/12-微服务/01-测试.md", icon: "mdi:cloud-outline" },
        ],
      },
    ],
  },
  {
    text: "项目实战",
    prefix: "",
    icon: "mdi:briefcase",
    items: [
      {
        text: "项目实战",
        items: [
          { text: "项目一", link: "/notes/项目实战/01-项目一/01-测试.md", icon: "mdi:projector-screen" },
          { text: "项目二", link: "/notes/项目实战/02-项目二/01-测试.md", icon: "mdi:projector-screen" },
          { text: "项目三", link: "/notes/项目实战/03-项目三/01-测试.md", icon: "mdi:projector-screen" },
          { text: "项目四", link: "/notes/项目实战/04-项目四/01-测试.md", icon: "mdi:projector-screen" },
          { text: "项目五", link: "/notes/项目实战/05-项目五/01-测试.md", icon: "mdi:projector-screen" },
        ],
      },
    ],
  },
  {
    text: "计算机基础",
    prefix: "",
    icon: "mdi:desktop-classic",
    items: [
      {
        text: "计算机基础",
        items: [
          { text: "操作系统", link: "/notes/计算机基础/01-操作系统/01-测试.md", icon: "mdi:monitor" },
          { text: "计算机组成原理", link: "/notes/计算机基础/02-计算机组成原理/01-测试.md", icon: "mdi:memory" },
          { text: "数据结构", link: "/notes/计算机基础/03-数据结构/01-测试.md", icon: "mdi:chart-timeline" },
          { text: "计算机网络", link: "/notes/计算机基础/04-计算机网络/01-测试.md", icon: "mdi:router-wireless" },
          { text: "Linux操作系统", link: "/notes/计算机基础/05-Linux操作系统/01-测试.md", icon: "mdi:linux" },
        ],
      },
    ],
  },
  {
    text: "商业数据分析",
    prefix: "",
    icon: "mdi:chart-areaspline",
    items: [
      {
        text: "商业数据分析",
        items: [
          { text: "Excel", link: "/notes/商业数据分析/01-Excel/01-测试.md", icon: "mdi:file-excel" },
          { text: "PowerBI", link: "/notes/商业数据分析/02-PowerBI/01-测试.md", icon: "mdi:chart-bar" },
          { text: "Python基础", link: "/notes/商业数据分析/03-Python基础/01-测试.md", icon: "mdi:language-python" },
          { text: "网络爬虫", link: "/notes/商业数据分析/04-网络爬虫/01-测试.md", icon: "mdi:spider-web" },
          { text: "数据分析与处理", link: "/notes/商业数据分析/05-数据分析与处理/01-测试.md", icon: "mdi:database" },
        ],
      },
    ],
  },
  {
    text: "关于我",
    prefix: "",
    icon: "mdi:book-account",
    items: [
      {
        text: "个人日志",
        items: [
          { text: "日志一", link: "/notes/个人日志/01-日志一/01-测试.md", icon: "mdi:note" },
          { text: "日志二", link: "/notes/个人日志/02-日志二/01-测试.md", icon: "mdi:note" },
          { text: "日志三", link: "/notes/个人日志/03-日志三/01-测试.md", icon: "mdi:note" },
          { text: "日志四", link: "/notes/个人日志/04-日志四/01-测试.md", icon: "mdi:note" },
          { text: "日志五", link: "/notes/个人日志/05-日志五/01-测试.md", icon: "mdi:note" },
        ],
      },
    ],
  },
]);

// 英文导航栏配置
export const enNavbar = defineNavbarConfig([
  { text: "Home", link: "/en/" },
  { text: "Blog", link: "/en/blog/" },
  { text: "Tags", link: "/en/blog/tags/" },
  { text: "Archives", link: "/en/blog/archives/" },
  {
    text: "Notes",
    items: [{ text: "Demo", link: "/endemo/README.md" }],
  },
]);

