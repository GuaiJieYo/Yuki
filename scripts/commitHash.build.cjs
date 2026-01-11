const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

// 获取git版本号
exec("git rev-parse HEAD", async (error, stdout, stderr) => {
  let configPath = path.join(__dirname, "../src/versionHash.config.ts");

  try {
    if (error || stderr || !stdout) {
      console.log(`执行version出错:${error || stderr}`);
      await fs.writeFile(
        configPath,
        `// 请勿修改此文件\nexport default false;`
      );
    } else {
      console.log(`执行version成功:${stdout.trim()}`);
      await fs.writeFile(
        configPath,
        `// 请勿修改此文件\nexport default "${stdout.trim()}";`
      );
    }
  } catch (err) {
    console.error("写入文件失败:", err);
  }
});
