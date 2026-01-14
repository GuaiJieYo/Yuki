import ThemeConfig from "@/config.theme";
import type { themeConfig } from "@/types";

import npmPackage from "@/../package.json";

/**
 * 获取主题版本号
 * @description 通过读取 package.json 文件中的 version 字段获取主题版本号
 * @returns {string} 返回主题版本号
 */
function _getThemeVersion() {
  return npmPackage.version;
}

/**
 * 获取主题配置的函数
 * @returns 返回处理后的主题配置对象
 */
export const getThemeConfig = () => {
  const config: themeConfig = {
    ...ThemeConfig,
    theme: {
      version: _getThemeVersion(), // 主题版本号
      commitHash:
        import.meta.env.PUBLIC_VERCEL_GIT_COMMIT_SHA || // Vercel 自带的环境变量
        import.meta.env.COMMIT_HASH ||
        "", // 当前提交的 hash 值
    },
  };
  const { site } = config;

  // 设置默认值
  site.avatar ||= site.favicon;
  site.nav.logo ||= site.favicon;
  site.footer.note ||=
    "感谢你的漂流至此，希望这里的文字能为你带来片刻的宁静或思考。";

  return config;
};
