import Link from 'next/link'
import { getPrompts, getCategories } from '@/lib/prompts'

export default async function PromptsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  const category = params?.category
  const search = params?.search
  const prompts = await getPrompts(category, search)
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">浏览提示词</h1>
          <p className="text-lg text-white/90">发现32+优质AI提示词，全部免费使用</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏 - 分类筛选 */}
          <aside className="lg:w-64 flex-shrink-0 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4 text-gray-900">分类筛选</h2>
              <div className="space-y-2">
                <Link
                  href="/prompts"
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    !category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  全部提示词
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/prompts?category=${cat.name}`}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      category === cat.name
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.emoji} {cat.name}</span>
                    <span className="text-xs text-gray-400">{cat.prompt_count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 姊妹站点联动 - 侧边栏小卡片 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-bold text-lg mb-4 text-gray-900">更多AI资源</h2>
              <div className="space-y-3">
                <a
                  href="https://tools.link.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl">🛠️</span>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">AI工具推荐</span>
                    <span className="text-xs text-blue-500 ml-auto">↗</span>
                  </div>
                  <p className="text-xs text-gray-600">精选国内外AI工具</p>
                </a>
                <a
                  href="https://ai.link.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl">📰</span>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">AI热点资讯</span>
                    <span className="text-xs text-purple-500 ml-auto">↗</span>
                  </div>
                  <p className="text-xs text-gray-600">追踪行业最新动态</p>
                </a>
              </div>
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="flex-1">
            {/* 搜索结果信息 */}
            {(category || search) && (
              <div className="mb-6 flex items-center gap-4">
                {category && (
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    分类: {category}
                  </span>
                )}
                {search && (
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    搜索: {search}
                  </span>
                )}
                <Link href="/prompts" className="text-sm text-gray-500 hover:text-blue-600">
                  清除筛选
                </Link>
              </div>
            )}

            {/* 提示词列表 */}
            {prompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prompts.map((prompt) => (
                  <Link
                    key={prompt.id}
                    href={`/prompt/${prompt.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={prompt.image_url}
                        alt={prompt.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                        {prompt.category}
                      </span>
                      <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold shadow-sm">
                        免费
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {prompt.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {prompt.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500 font-semibold text-sm">★ {prompt.rating}</span>
                          <span className="text-xs text-gray-400">({prompt.reviews})</span>
                        </div>
                        <span className="text-xs text-gray-500">{prompt.sales}人使用</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">未找到匹配的提示词</h3>
                <p className="text-gray-600 mb-6">试试其他分类或关键词</p>
                <Link
                  href="/prompts"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  查看全部提示词
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
