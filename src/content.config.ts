import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // 从./post/blog/*.md 文件中加载内容
  loader: glob({ pattern: "**/*.md", base: "./src/contents" }),
  // FrontMatter 内容解析器
  schema: z.object({
    title: z.string(), // 文章标题
    data: z.date(), // 文章日期
    tags: z.string().array(), // 文章标签
    keywords: z.string().array(), // 文章关键词
    update: z.string().datetime().optional(), // 文章更新日期 (可选)
    description: z.string().optional(), // 文章描述 (可选,默认为文章内容的前50个字符)
    author: z.string().optional(), // 文章作者 (可选,默认为主题配置中的作者)
    cover: z.string().optional(), // 文章封面 (可选)
  }),
});

export const collections = { blog };
