import ThemeConfig from "@/config.theme";
import commitHash from "@/commitHash.config";
import type { themeConfig } from "@/types";

/**
 * 获取主题配置的函数
 * @returns 返回处理后的主题配置对象
 */
export const getThemeConfig = (): themeConfig => {
  const config = { ...ThemeConfig, commitHash };
  const { site } = config;

  // 设置默认值
  site.avatar ||= site.favicon;
  site.nav.logo ||= site.favicon;
  site.footer.note ||=
    "感谢你的漂流至此，希望这里的文字能为你带来片刻的宁静或思考。";

  return config;
};
