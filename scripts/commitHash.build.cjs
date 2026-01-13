// scripts/commitHash.build.cjs
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const ORIG_HEAD = path.join(__dirname, "../.git/ORIG_HEAD/aaa");
const envPath = path.join(__dirname, "../.env");

/**
 * 通过 .git/ORIG_HEAD 获取commit hash
 */
function getByORIG_HEAD() {
  try {
    let hash = fs.readFileSync(ORIG_HEAD, "utf-8").trim();
    return hash;
  } catch {
    return "";
  }
}

/**
 * 通过 git rev-parse HEAD 获取commit hash
 */
function getByGitRevParse() {
  return new Promise((resolve, reject) => {
    exec("git rev-parse HEAD", (error, stdout, stderr) => {
      if (error || stderr) {
        resolve(""); // 错误时返回空字符串
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

// 主函数
async function main() {
  // 判断是否在vercel环境
  if (!process.env.PUBLIC_VERCEL_GIT_COMMIT_SHA) {
    // 获取当前git提交的hash值
    // 依次尝试以上两种获取方式
    const hash = getByORIG_HEAD() || (await getByGitRevParse());

    // 写入到 .env 文件中
    try {
      fs.writeFileSync(envPath, `COMMIT_HASH=${hash}`);
      console.log("写入成功:", hash);
    } catch (err) {
      console.error("写入文件失败:", err);
    }
  }
}

// 执行主函数
main();
