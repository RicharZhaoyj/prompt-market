import { MetadataRoute } from 'next'
import { SAMPLE_PROMPTS, CATEGORIES } from '../lib/prompts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prompts.link.cn'
  const now = new Date()

  // 静态页面路由
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/prompts`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/submit`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/docs`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  // 分类页面路由
  // TODO: 待新增 /category/[name] 路由后，将下方 URL 从查询参数形式（/prompts?category=xxx）
  // 改为路径形式（/category/xxx），以获得更友好的 SEO 结构。当前因未建立对应路由，暂保持现状。
  const categoryRoutes = CATEGORIES.map((category) => ({
    url: `${baseUrl}/prompts?category=${encodeURIComponent(category.name)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 提示词详情页路由
  const promptRoutes = SAMPLE_PROMPTS.map((prompt) => ({
    url: `${baseUrl}/prompt/${prompt.id}`,
    lastModified: new Date(prompt.updated_at || now),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...categoryRoutes, ...promptRoutes]
}
