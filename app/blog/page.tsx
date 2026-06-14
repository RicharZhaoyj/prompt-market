import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: '如何使用AI提示词提升写作效率',
    excerpt: '本文介绍如何利用AI提示词工具来提升内容创作效率，包括SEO博客、社交媒体文案等场景...',
    category: '使用教程',
    date: '2026-06-10',
    views: 1234,
  },
  {
    id: 2,
    title: 'ChatGPT提示词工程完整指南',
    excerpt: '深入了解提示词工程的核心理念，学习如何编写高质量的ChatGPT提示词...',
    category: '教程',
    date: '2026-06-08',
    views: 2345,
  },
  {
    id: 3,
    title: 'Midjourney提示词技巧分享',
    excerpt: '掌握Midjourney图像生成的提示词技巧，创造出令人惊艳的AI艺术作品...',
    category: '设计',
    date: '2026-06-05',
    views: 1890,
  },
  {
    id: 4,
    title: '10个提升程序员效率的AI提示词',
    excerpt: '精选10个程序员必备的AI提示词，涵盖代码审查、Bug修复、文档编写等场景...',
    category: '编程',
    date: '2026-06-01',
    views: 1567,
  },
  {
    id: 5,
    title: 'AI提示词市场发展趋势分析',
    excerpt: '分析当前AI提示词市场的发展现状和未来趋势，为内容创作者提供参考...',
    category: '行业动态',
    date: '2026-05-28',
    views: 987,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">博客文章</h1>
          <p className="text-lg text-white/90">AI提示词使用技巧、行业资讯和教程</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">👁️ {post.views} 次阅读</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-medium hover:underline text-sm"
                  >
                    阅读全文 →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分页 */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50">下一页 →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
