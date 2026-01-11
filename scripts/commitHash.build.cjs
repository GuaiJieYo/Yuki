const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

const configPath = path.join(__dirname, "../.env");

// 获取当前git提交的hash值
exec("git rev-parse HEAD", async (error, stdout, stderr) => {
  const hash = error || stderr ? "" : stdout.trim();
  const logMsg = hash
    ? `执行version成功:${hash}`
    : `执行version出错:${error || stderr}`;

  console.log(logMsg);
  try {
    await fs.writeFile(configPath, `COMMIT_HASH=${hash}`);
  } catch (err) {
    console.error("写入文件失败:", err);
  }
});
