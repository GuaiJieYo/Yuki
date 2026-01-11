export type themeConfig = {
  /**
   * @name 站点信息配置
   */
  site: {
    /**
     * @name 站点名称
     */
    name: string;
    /**
     * @name 站点描述
     */
    description: string;
    /**
     * @name 站点关键词
     * @example "博客,个人博客,博客网站,Yuki,Astro"
     */
    keywords: string;
    /**
     * @name 站点图标
     */
    favicon: string;
    /**
     * @name 站点作者
     */
    author: string;
    /**
     * @name 作者头像
     * @description 可选
     * @default 站点配置的favicon
     */
    avatar?: string;
    /**
     * @name 站点导航栏
     */
    nav: {
      /**
       * @name 导航栏左侧LOGO
       * @description 可选
       * @default 站点favicon
       */
      logo?: string;
      /**
       * @name 导航栏标题
       */
      title: string;
      /**
       * @name 导航栏右侧链接
       * @description 高度自定义配置项 可填写站外网站
       */
      links: {
        /**
         * @name 图标
         * @description 可选
         * @description 默认选用remixicon图标 可以前往其网站搜索图标
         * @link https://remixicon.com/
         */
        icon?: string;
        /**
         * @name 名称
         */
        name: string;
        /**
         * @name 链接
         * @description 可选
         */
        url?: string;
        /**
         * @name 子链接
         * @description 可选
         */
        child?: {
          /**
           * @name 子链名称
           */
          name: string;
          /**
           * @name 子链指向的链接
           * @description 可选
           */
          url: string;
          /**
           * @name 子链图标
           * @description 可选
           * @description 默认选用remixicon图标 可以前往其网站搜索图标
           * @link https://remixicon.com/
           */
          icon?: string;
        }[];
      }[];
    };
    /**
     * @name 站点社交信息
     * @description 可选
     */
    social: {
      /**
       * @name 社交名称
       */
      name: string;
      /**
       * @name 社交链接
       */
      url: string;
      /**
       * @name 社交图标
       * @description 默认选用remixicon图标 可以前往其网站搜索图标
       * @link https://remixicon.com/
       */
      icon: string;
    }[];
    /**
     * @name 站点页尾信息
     */
    footer: {
      /**
       * @name 页尾信息(想说的骚话罢了XD)
       * @description 可选
       * @default "感谢你的漂流至此，希望这里的文字能为你带来片刻的宁静或思考。"
       */
      note?: string;
      /**
       * @name 页尾探索链接
       * @description 可选用social的链接 可继承social的图标
       */
      seek: (
        | number
        | {
            /**
             * @name 链接名称
             */
            name: string;
            /**
             * @name 链接
             * @description 可选
             */
            url?: string;
            /**
             * @name 链接图标
             * @description 可选
             * @description 默认选用remixicon图标 可以前往其网站搜索图标
             * @link https://remixicon.com/
             */
            icon?: string;
          }
      )[];
      /**
       * @name ICP信息
       * @description 可选
       */
      icp?: {
        /**
         * @name 信息
         * @description ICP备案信息
         * @example "萌ICP备20261145号"
         */
        info: string;
        /**
         * @name 图标 (可选)
         * @description 备案网站的图标
         * @example "https://icp.gov.moe/favicon.ico"
         */
        icon?: string;
        /**
         * @name 链接
         * @description 点击链接后的跳转地址
         * @example "https://icp.gov.moe/?keyword=20261145"
         */
        url: string;
      };
      /**
       * @name 页尾版权信息
       */
      copyright: {
        /**
         * @name 开始日期
         * @default "© 2022-2023 Yuki. All rights reserved."
         */
        start: string;
      };
    };
  };
};
