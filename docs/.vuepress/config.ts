import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { searchPlugin } from '@vuepress-plume/plugin-search'

// 调整字体样式
export default defineUserConfig({

  plugins: [
    searchPlugin()
  ],

  
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      title: "兮和Forever",
      lang: "zh-CN",
      description: "这里是兮和的个人博客",
    },
    "/en/": {
      title: "兮和Forever",
      lang: "en-US",
      description: "这里是兮和的个人博客",
    },
  },

  bundler: viteBundler(),



  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',

    // https://docsearch.algolia.com/apply/
    /**部署域名成功之后可以进行使用 */

    plugins: {
      // 服务器端搜索


      // docsearch: {
      //   appId: 'YOUR_APP_ID', 
      //   apiKey: 'YOUR_API_KEY', 
      //   indexName: 'YOUR_INDEX_NAME', 
      // },
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */

      // https://shiki.style/themes
      

      shiki: {
        theme: {
          light: "snazzy-light",
          dark: "material-theme-ocean",
        },

        languages: [
          "bash", // Shell/Bash
          "shell", // Shell
          "typescript", // TypeScript
          "javascript", // JavaScript
          "java", // Java
          "python", // Python
          "html", // HTML
          "css", // CSS
          "json", // JSON
          "yaml", // YAML
          "markdown", // Markdown
          "php", // PHP
          "cpp", // C++
          "csharp", // C#
          "go", // Go
          "rust", // Rust
          "ruby", // Ruby
          "kotlin", // Kotlin
          "swift", // Swift
          "perl", // Perl
          "r", // R
          "dart", // Dart
          "scala", // Scala
          "lua", // Lua
          "objective-c", // Objective-C
        ],
        twoslash: true, // 启用 TypeScript Twoslash 功能
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // 如何使用？
      markdownEnhance: {
        demo: true,
        include: true,
        chart: true,
        echarts: true,
        mermaid: true,
        flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        caniuse: true,
        plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        codepen: true,
        replit: true,
        codeSandbox: true,
        jsfiddle: true,
        repl: {
          go: true,
          rust: true,
          kotlin: true,
        },
      },

      /**
       * comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },

      /**
       * 开启水印 */

      watermark: {
        enabled: false,
        watermarkOptions: {
          content: "兮和Foever",
        },
      },
    },
  }),


})

