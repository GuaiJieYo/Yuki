const fs = require("fs");
const path = require("path");

const ORIG_HEAD = path.join(__dirname, "../.git/ORIG_HEAD");
const envPath = path.join(__dirname, "../.env");

try {
  // 从ORIG_HEAD文件中读取git提交的hash值
  const hash = fs.readFileSync(ORIG_HEAD, "utf-8").trim();
  // 将hash值写入.env文件
  fs.writeFileSync(envPath, `COMMIT_HASH=${hash}`);
  console.log(`执行version成功:${hash}`);
} catch (err) {
  console.error("执行version出错:", err);
}
