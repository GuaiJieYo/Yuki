# Yuki - 一个简单 轻量的 Astro 主题

## 简介

Yuki 是一个简单 轻量的 Astro 主题，基于 Astro 0.8.0 开发  
**目前仍在开发之中 README 都是临时写的**

## 预览

[预览地址 https://yuki-inky-one.vercel.app/](https://yuki-inky-one.vercel.app/)

## 功能(开发中)

- [x] 首页
- [x] 文章页
- [x] 标签页
- [x] 分类页
- [x] 友链页
- [x] 关于页
- [x] 评论系统
- [x] 文章目录

## 部署

## 部署到 Vercel

推荐使用 **Vercel** 部署，简单易用，无需服务器。

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/GuaiJieYo/Yuki)

### 手动部署

推荐使用 **PNPM** 进行安装，安装命令如下：

```bash
# 克隆项目
git clone https://github.com/GuaiJieYo/Yuki.git

# 进入项目目录
cd Yuki

# 安装依赖
pnpm install

# 启动项目
pnpm dev

# 打包项目
pnpm build
# 构建后的文件在 dist 目录中
```

## Q&A

1. Q：为什么叫 Yuki？  
   A：希望这个主题能像雪一样简单，轻量。

2. Q：为什么用 Astro？  
   A：Astro 是一个轻量级的静态网站生成器，非常适合个人博客使用，之前使用过 valaxy 进行开发，但是开发体验不是特别好，功能不是特别完善。

3. Q：为啥不用 tailwindcss  
   A：没用过 tailwindcss 开发项目，没有开发经验，或许下一个项目将会使用。

## 小声 bb

Astro 默认使用 TS 来开发,但是我又不经常使用 TS,所以属性一类的东西写的很烂。

## 关于开源和版权

这个项目是开源的，代码托管在 GitHub 上，使用的是 **Apache License 2.0** 协议。
这是一个友好且宽容的开源许可证，这意味着：

- 你可以自由查看、学习、修改代码，并用于任何目的，包括商业用途；
- 你必须在你的分发中保留我的原始版权声明和许可证文件；
- 如果你修改了代码文件，需要在修改处注明你的变更。
- 你可以将本项目代码融入到你的专有软件中，无需开源你的私有代码。

换句话说：**你可以用，甚至不用开源你的改动，但你要保留我的版权声明**

完整的许可证文本见项目根目录下的 `LICENSE` 文件。
