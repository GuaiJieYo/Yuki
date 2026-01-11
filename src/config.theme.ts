import type { themeConfig } from "@/types";

const ThemeConfig: themeConfig = {
  site: {
    name: "Yuki Blog",
    description: "A blog about life, tech and more",
    keywords: "blog,life,tech",
    favicon: "/Yuki.png",
    author: "Yuki",
    avatar: "/Yuki.png",
    nav: {
      logo: "/Yuki.png",
      title: "Yuki Blog",
      links: [
        {
          name: "主页",
          icon: "ri-home-4-line",
          url: "/",
        },
        {
          name: "文章",
          icon: "ri-article-line",
          url: "/post",
          child: [
            {
              name: "随笔",
              icon: "ri-pencil-line",
              url: "/post/?c=随笔",
            },
            {
              name: "博文",
              icon: "ri-bookmark-line",
              url: "/post/?c=博文",
            },
          ],
        },
        {
          name: "朋友们",
          icon: "ri-group-2-line",
          url: "/friends",
        },
        {
          name: "留言",
          icon: "ri-chat-3-line",
          url: "/message",
        },
        {
          name: "关于我",
          icon: "ri-emotion-line",
          url: "/about",
        },
      ],
    },
    social: [
      {
        name: "Github",
        icon: "ri-github-line",
        url: "https://github.com/Yiki-0x0",
      },
      {
        name: "BiliBili",
        icon: "ri-bilibili-line",
        url: "https://space.bilibili.com/392464717",
      },
    ],
    footer: {
      note: "",
      seek: [
        0,
        1,
        {
          name: "开往",
          icon: "ri-subway-line",
          url: "https://www.travellings.cn/typewriter.html",
        },
      ],
      icp: {
        info: "萌ICP备20261145号",
        icon: "https://icp.gov.moe/favicon.ico",
        url: "https://icp.gov.moe/?keyword=20261145",
      },
      copyright: {
        start: "2022",
      }
    },
  },
};

export default ThemeConfig;
