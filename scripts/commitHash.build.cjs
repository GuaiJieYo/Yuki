const { exec } = require("node:child_process");
const { promises: fs } = require("node:fs");
const path = require("node:path");

const GIT_ORIG_HEAD_PATH = path.resolve(__dirname, "../.git/ORIG_HEAD");
const ENV_FILE_PATH = path.resolve(__dirname, "../.env");

/**
 * 获取当前git提交hash
 */
async function getCommitHash() {
  // 优先从环境变量获取（Vercel环境）
  if (process.env.PUBLIC_VERCEL_GIT_COMMIT_SHA) {
    return process.env.PUBLIC_VERCEL_GIT_COMMIT_SHA;
  }

  // 尝试从 .git/ORIG_HEAD 获取
  try {
    return await fs.readFile(GIT_ORIG_HEAD_PATH, "utf-8");
  } catch {
    // 回退到git命令
    return new Promise((resolve) => {
      exec("git rev-parse HEAD", (error, stdout) => {
        resolve(error ? "" : stdout.trim());
      });
    });
  }
}

/**
 * 写入hash到.env文件
 */
async function writeHashToEnv(hash) {
  try {
    await fs.writeFile(ENV_FILE_PATH, `COMMIT_HASH=${hash}`);
    console.log("✅ 写入成功:", hash);
    return true;
  } catch (error) {
    console.error("❌ 写入文件失败:", error.message);
    return false;
  }
}

// 主执行逻辑
async function main() {
  const hash = (await getCommitHash()).trim();
  
  if (hash) {
    await writeHashToEnv(hash);
  } else {
    console.warn("⚠️  未获取到commit hash");
  }
}

// 执行并处理可能的异常
main().catch(console.error);