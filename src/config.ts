/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "项目与实战",
    sites: [
      {
        title: "AIops-RCA：集成电路故障诊断系统",
        description: "全栈开发：多智能体协作+LangChain ReAct工作流+结构化报表+算法分割（zscore、滑动窗口、相关性）",
        url: "https://github.com/lildengzi/aiops-rca",
        icon: "",
      },
      {
        title: "树莓派+阿里云远程温湿度控制系统",
        description: "测试与项目管理：可靠性≥99.9%，命令延迟≤5s，72小时稳定运行、命令延迟1.2s",
        url: "https://github.com/lildengzi",
        icon: "",
      },
      {
        title: "西电食堂点评系统",
        description: "后端实现与测试：Spring Boot + MyBatis + MySQL、100并发压测、缺陷定位与质量保障",
        url: "https://github.com/lildengzi/xdudianping",
        icon: "",
      },
    ],
  },
  {
    title: "课题作品",
    sites: [
      {
        title: "FPGA流水灯设计",
        description: "硬件逻辑设计与定时控制，实现可视化流水灯、可扩展模块化架构",
        icon: "",
      },
      {
        title: "图书管理系统（本地版）",
        description: "或C++实现图书借还、用户管理、查询统计功能",
        icon: "",
      },
      {
        title: "H3B网络工程管理设计",
        description: "组网方案设计与优化，覆盖策略、路由规划、性能分析",
        icon: "",
      },
    ],
  },
  {
    title: "技能与工具",
    sites: [
      {
        title: "编程语言",
        description: "C/C++、Python 熟练；Java、Go 熟悉；SQL、Shell 常用",
        icon: "",
      },
      {
        title: "后端栈",
        description: "Spring Boot、MyBatis、MySQL、REST API、MQTT、云服务",
        icon: "",
      },
      {
        title: "开发与测试",
        description: "Linux、Git、命令行工具、自动化测试、性能调优、文档与需求分析",
        icon: "",
      },
    ],
  },
] as WebsiteSort[];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "lildengzi — 后端开发岗位求职作品集",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://github.com/lildengzi",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/lildengzi",
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
    "应届生：后端开发，期望深圳 15k-18k",
    "工具：C/C++/Python 熟练，Java/Go 熟悉",
    "项目：AI 故障诊断、远程 IoT 控制、Spring Boot 食堂点评",
    "目标：快速融入后端团队，实现高可用业务服务",
    "欢迎联系：19865072944 / 2580862656@qq.com",
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
    title: "lildengzi 的后端开发作品集",
    keywords: "后端, Spring Boot, MyBatis, C++, Python, AI, 项目经历",
    description: "香港户籍应届生，西电计算机本科，求职深圳后端开发，展示AI+IoT+测试类项目。",
  },
};

export default GLOBAL_CONFIG;
