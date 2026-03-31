/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "技能与擅长",
    sites: [
      {
        title: "Vue 3 + TypeScript",
        description: "前端架构与组件化开发，熟练使用 Composition API、Pinia、路由与插件体系",
        url: "https://github.com/your-username",
        icon: "",
        color: "#42b983",
      },
      {
        title: "Node.js + Express",
        description: "搭建 API 服务、数据库交互、JWT 鉴权、中间件开发",
        url: "https://github.com/your-username/node-project",
        icon: "",
      },
      {
        title: "前端工程化",
        description: "Vite 构建、ESLint规范、GitHub Actions 持续集成、单元测试（Vitest）",
        url: "https://github.com/your-username/your-frontend-project",
        icon: "",
      },
    ],
  },
  {
    title: "项目案例",
    sites: [
      {
        title: "个人作品集网站",
        description: "展示个人简历、项目列表和技术博客，支持移动端与暗黑模式",
        url: "https://your-site.example.com",
        icon: "",
      },
      {
        title: "企业内部管理系统",
        description: "权限管理、数据看板、报表导出、实时通知模块",
        url: "https://work-demo.example.com",
        icon: "",
      },
    ],
  },
  {
    title: "开源贡献",
    sites: [
      {
        title: "Vue 组件库",
        description: "参与组件设计与性能优化，合并多次 PR",
        url: "https://github.com/your-username/open-source-lib",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "个人博客",
        description: "技术文章、架构总结、学习笔记",
        url: "https://your-blog.example.com",
        icon: "",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "张三的技术主页",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://your-blog.example.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/your-username",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "你好，我是张三，前端工程师",
    "专注 Vue + TypeScript，打造高性能页面",
    "欢迎来到我的作品展示",
    "持续精进，代码即艺术",
    "愿与你共建未来",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "张三的前端作品集",
    keywords: "前端, Vue3, TypeScript, 作品集, 技术博客",
    description: "张三的个人技术主页，展示前端项目、技能与开源贡献。",
  },
};

export default GLOBAL_CONFIG;
