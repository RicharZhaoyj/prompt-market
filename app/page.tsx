import Link from 'next/link'
import { getFeaturedPrompts, getCategories, getTrendingPrompts } from '@/lib/prompts'

export default async function Home() {
  const featuredPrompts = await getFeaturedPrompts()
  const categories = await getCategories()
  const trendingPrompts = await getTrendingPrompts(6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PromptMarket',
    url: 'https://prompts.link.cn',
    description: '发现、免费使用高质量AI提示词。支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prompts.link.cn/prompts?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Beta Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-white">
            <span>🔥</span>
            <span className="font-medium">内测期间全部免费！</span>
            <span className="text-white/80">无需注册，即可使用所有提示词</span>
          </div>
        </div>
      </div>

      {/* Update Time Banner */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span>最后更新: 2026年6月12日 · 精选32+优质提示词</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span>✨</span>
            收录精选AI提示词库
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            发现完美的
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI提示词</span>
            <br />
            提升你的效率
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            全部免费使用！涵盖写作、编程、图像生成、营销等多个场景。
            <br />
            无需注册，直接使用。帮助用户提升工作效率。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              免费浏览提示词
            </Link>
            <Link
              href="/submit"
              className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-gray-700"
            >
              成为创作者
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">32+</div>
              <div className="text-sm text-gray-600 mt-2">精选提示词</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10</div>
              <div className="text-sm text-gray-600 mt-2">分类场景</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600 mt-2">免费使用</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">100% 免费</div>
                <div className="text-sm text-gray-600">内测期间全部免费</div>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">已验证质量</div>
                <div className="text-sm text-gray-600">每个提示词经过测试</div>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">用户信赖</div>
                <div className="text-sm text-gray-600">正在使用我们的提示词</div>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">每日更新</div>
                <div className="text-sm text-gray-600">持续新增优质内容</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">按分类浏览</h2>
            <p className="text-lg text-gray-600">探索不同领域的专业AI提示词</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/prompts?category=${category.name}`}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.prompt_count} 个提示词</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">精选提示词</h2>
              <p className="text-gray-600">最受欢迎的高质量提示词</p>
            </div>
            <Link href="/prompts" className="text-blue-600 font-semibold hover:underline text-lg">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={prompt.image_url}
                    alt={prompt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    {prompt.category}
                  </span>
                  <span className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold shadow-sm">
                    免费
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{prompt.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {prompt.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 font-semibold text-sm">★ {prompt.rating}</span>
                      <span className="text-sm text-gray-500">({prompt.reviews}评价)</span>
                    </div>
                    <span className="text-sm text-gray-500">by {prompt.author_name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Prompts Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">🔥 热门提示词</h2>
            <p className="text-lg text-gray-600">大家都在使用的优质提示词</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {trendingPrompts.map((prompt, index) => (
              <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {prompt.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
                    <span className="text-yellow-600 font-medium">★ {prompt.rating}</span>
                    <span>{prompt.sales}人使用</span>
                    <span className="text-blue-600 font-medium">{prompt.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 姊妹站点联动卡片 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">探索更多AI资源</h2>
            <p className="text-lg text-gray-600">发现精选工具和最新行业动态，助力你的AI之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* AI工具推荐卡片 */}
            <a
              href="https://tools.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">AI工具推荐</h3>
                    <span className="text-xs text-blue-500 font-medium">↗</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    精选国内外优秀AI工具，涵盖内容创作、图像生成、编程辅助等多场景
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-white rounded-full border border-gray-200">tools.link.cn</span>
                    <span className="text-blue-600 font-medium group-hover:underline">立即浏览 →</span>
                  </div>
                </div>
              </div>
            </a>

            {/* AI热点资讯卡片 */}
            <a
              href="https://ai.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📰</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">AI热点资讯</h3>
                    <span className="text-xs text-purple-500 font-medium">↗</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    追踪AI行业最新动态，解读重大技术突破，让你时刻把握行业脉搏
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-white rounded-full border border-gray-200">ai.link.cn</span>
                    <span className="text-purple-600 font-medium group-hover:underline">查看资讯 →</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">订阅我们的更新</h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              第一时间获取最新的优质提示词，帮助你保持高效工作。我们承诺不会发送垃圾邮件。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                立即订阅
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">成为提示词创作者</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            分享你的专业知识，获得用户反馈，未来还能获得收益
          </p>
          <Link
            href="/submit"
            className="inline-block px-12 py-4 bg-white text-gray-900 font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-lg"
          >
            提交你的第一个提示词
          </Link>
        </div>
      </section>
    </>
  )
}
