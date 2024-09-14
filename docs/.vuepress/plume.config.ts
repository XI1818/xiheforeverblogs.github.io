import { defineThemeConfig } from "vuepress-theme-plume";
import { enNavbar, zhNavbar } from "./navbar";
import { enNotes, zhNotes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "https://img.picui.cn/free/2024/09/11/66e10a7bf2e4e.png",
  // your git repo url
  docsRepo: "",
  docsDir: "docs",

  appearance: true,

  social: [{ icon: "github", link: "/" }],

  


  locales: {
    "/": {
      profile: {
        avatar: "https://img.picui.cn/free/2024/09/11/66e10a7bf2e4e.png",
        name: "兮和Forever",
        description: "兮和的个人博客",
        circle: true,
        location: "中国 北京",
        organization: "China",
      },
      notes: zhNotes,
      navbar: zhNavbar,
      social: [
        {
          icon: "github",
          link: "https://github.com/pengzhanbo/vuepress-theme-plume",
        },
        { icon: "gitlab", link: "https://pengzhanbo.cn" },
        { icon: "npm", link: "https://pengzhanbo.cn" },
        { icon: "docker", link: "https://pengzhanbo.cn" },
        { icon: "bilibili", link: "https://pengzhanbo.cn" },
        { icon: "juejin", link: "https://pengzhanbo.cn" },
        { icon: "zhihu", link: "https://pengzhanbo.cn" },
      ],
    },
    "/en/": {
      profile: {
        avatar: "https://img.picui.cn/free/2024/09/10/66dfd15194ea5.png",
        name: "兮和Forever",
        description: "兮和的个人博客",
        circle: true,
        location: "China",
        organization: "China",
      },
      notes: enNotes,
      navbar: enNavbar,
      social: [
        {
          icon: "github",
          link: "https://github.com/pengzhanbo/vuepress-theme-plume",
        },
        { icon: "twitter", link: "https://pengzhanbo.cn" },
        { icon: "linkedin", link: "https://pengzhanbo.cn" },
        { icon: "steam", link: "https://pengzhanbo.cn" },
      ],
    },
  },

  footer: { copyright: "Copyright © 2024-present 兮和Forever" },

  // 页面加密配置
  encrypt: {
    rules: {
      "/article/ow6et79u/": "123456", // 加密文章路径和密码"
      // "notes/快速开始/2w607uyr/":"1234567",
    },
  },
});
