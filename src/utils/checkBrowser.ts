/**
 * 简化版现代浏览器检查
 */
const isModernBrowserSimple = (): boolean => {
  try {
    // 检查ES6+核心特性
    if (!("fetch" in window)) return false;
    if (!("Promise" in window)) return false;

    // 检查Web API
    if (!("URL" in window)) return false;
    if (!("Map" in window)) return false;

    return true;
  } catch {
    return false;
  }
};

/**
 * 检查并提示
 */
export function checkBrowser(): void {
  if (!isModernBrowserSimple()) {
    if (
      window.confirm(
        "请使用现代浏览器（Chrome、Firefox、Edge、Safari等最新版本）访问本站！确认后将跳转至浏览器下载页面。"
      )
    ) {
      window.location.assign("https://browsehappy.com/?locale=zh_CN");
    }
  }
}
