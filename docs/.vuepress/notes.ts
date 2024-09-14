import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== locale: zh-CN ======================= */

// 定义 demo 笔记
const zhDemoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: "auto",
});

// 定义测试笔记 1
const testNote1 = defineNoteConfig({
  text: "测试-1",
  dir: "测试/",
  link: "/notes/测试/",
  sidebar: "auto",
});

// 定义测试笔记 2
const testNote2 = defineNoteConfig({
  text: "测试-2",
  dir: "test/",
  link: "/notes/test/",
  sidebar: "auto",
});

// 定义前端学习笔记的目录和配置
const frontendNotes = defineNoteConfig({
  text: '前端学习',
  dir: '前端学习记录/',
  link: '/notes/前端学习记录/',
  sidebar: [
    {
      text: '01-HTML',
      link: '/01-HTML/01-测试.md',
      icon: 'mdi:language-html5',
    },
    {
      text: '02-CSS基础',
      link: '/notes/前端学习记录/02-CSS基础/',
      icon: 'mdi:language-css3',
    },
    {
      text: '03-CSS进阶',
      link: '/notes/前端学习记录/03-CSS进阶/',
      icon: 'mdi:palette-outline',
    },
    {
      text: '04-JavaScript基础',
      link: '/notes/前端学习记录/04-JavaScript基础/',
      icon: 'mdi:language-javascript',
    },
    {
      text: '05-JavaScript基础：ES6语法',
      link: '/notes/前端学习记录/05-JavaScript基础：ES6语法/',
      icon: 'mdi:script-outline',
    },
    {
      text: '06-JavaScript基础：异步编程',
      link: '/notes/前端学习记录/06-JavaScript基础：异步编程/',
      icon: 'mdi:timer-sand',
    },
    {
      text: '07-JavaScript进阶',
      link: '/notes/前端学习记录/07-JavaScript进阶/',
      icon: 'mdi:code-tags',
    },
    {
      text: '08-CSS和DOM练习',
      link: '/notes/前端学习记录/08-CSS和DOM练习/',
      icon: 'mdi:xml',
    },
    {
      text: '09-移动Web开发',
      link: '/notes/前端学习记录/09-移动Web开发/',
      icon: 'mdi:cellphone',
    },
    {
      text: '10-MySQL数据库',
      link: '/notes/前端学习记录/10-MySQL数据库/',
      icon: 'mdi:database',
    },
    { 
      text: '11-Node.js',
      link: '/notes/前端学习记录/11-Node.js/',
      icon: 'mdi:nodejs',
    },
    {
      text: '12-Vue基础',
      link: '/notes/前端学习记录/12-Vue基础/',
      icon: 'mdi:vuejs',
    },
    {
      text: '13-TypeScript',
      link: '/notes/前端学习记录/13-TypeScript/',
      icon: 'mdi:language-typescript',
    },
    {
      text: '13-WebPack',
      link: '/notes/前端学习记录/13-WebPack/',
      icon: 'mdi:webpack',
    },
    {
      text: '14-Electron',
      link: '/notes/前端学习记录/14-Electron/',
      icon: 'mdi:electron-framework',
    },
    {
      text: '15-前端性能优化',
      link: '/notes/前端学习记录/15-前端性能优化/',
      icon: 'mdi:chart-line',
    },
    {
      text: '16-小程序开发',
      link: '/notes/前端学习记录/16-小程序开发/',
      icon: 'mdi:application',
    }
  ],
});

// 定义后端学习笔记
const testNote3 = defineNoteConfig({
  text: "前端学习",
  dir: "前端学习记录/",
  link: "/notes/前端学习记录/",
  sidebar: "auto",
});

// 定义后端学习笔记
const testNote4 = defineNoteConfig({
  text: "后端学习",
  dir: "后端学习记录/",
  link: "/notes/后端学习/",
  sidebar: "auto",
});

// 整合所有笔记
export const zhNotes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [zhDemoNote, testNote1, testNote2, testNote3,testNote4],
});

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: "auto",
});

export const enNotes = defineNotesConfig({
  dir: "en/notes",
  link: "/en/",
  notes: [enDemoNote],
});
