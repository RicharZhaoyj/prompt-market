import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPromptById, getRelatedPrompts, SAMPLE_PROMPTS } from '@/lib/prompts'

export async function generateStaticParams() {
  return SAMPLE_PROMPTS.map((prompt) => ({
    id: prompt.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const prompt = await getPromptById(id)
  if (!prompt) return { title: '提示词未找到' }

  return {
    title: `${prompt.title} - 免费AI提示词`,
    description: prompt.description,
    keywords: prompt.tags?.join(', '),
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      images: [prompt.image_url],
    },
  }
}

// 根据提示词分类推荐配套工具
const getRecommendedTools = (category: string) => {
  const tools: Record<string, Array<{ name: string; description: string; icon: string }>> = {
    '写作': [
      { name: 'ChatGPT', description: '强大的AI对话模型，适合各类文案创作', icon: '💬' },
      { name: 'Claude', description: 'Anthropic推出的AI助手，擅长长文本分析', icon: '🖋️' },
      { name: '文心一言', description: '百度推出的中文大语言模型', icon: '📝' },
      { name: 'Kimi', description: '月之暗面推出的超长上下文AI助手', icon: '🌙' },
    ],
    '编程': [
      { name: 'GitHub Copilot', description: 'AI编程助手，实时代码补全', icon: '🤖' },
      { name: 'Cursor', description: '专为AI编程设计的代码编辑器', icon: '⚡' },
      { name: 'ChatGPT + Code Interpreter', description: '代码执行和调试的强大工具', icon: '🔧' },
      { name: 'JetBrains AI', description: 'IDE内置编程AI助手', icon: '💡' },
    ],
    '设计': [
      { name: 'Midjourney', description: '高质量AI图像生成工具', icon: '🎨' },
      { name: 'DALL-E', description: 'OpenAI推出的图像生成模型', icon: '🖼️' },
      { name: 'Stable Diffusion', description: '开源的图像生成模型', icon: '✨' },
      { name: 'Figma AI', description: 'UI设计工具内置AI功能', icon: '🎯' },
    ],
    '营销': [
      { name: 'ChatGPT', description: '营销文案创作和策略分析', icon: '📢' },
      { name: 'Jasper', description: '专注营销的AI内容创作平台', icon: '🎯' },
      { name: 'Canva Magic', description: 'AI驱动的设计和营销工具', icon: '🎨' },
    ],
    '教育': [
      { name: 'ChatGPT', description: '学习辅助和知识讲解', icon: '📚' },
      { name: 'Khan Academy AI', description: '个性化学习辅导', icon: '🎓' },
      { name: 'Wolfram Alpha', description: '数学和科学计算的强大工具', icon: '🧮' },
    ],
    '生活': [
      { name: 'ChatGPT', description: '生活建议和规划辅助', icon: '🌱' },
      { name: 'Claude', description: '心理健康和生活方式建议', icon: '💚' },
    ],
    '商业': [
      { name: 'ChatGPT', description: '商业分析和策略制定', icon: '💼' },
      { name: 'Notion AI', description: '笔记和文档创作AI助手', icon: '📋' },
      { name: 'Grammarly', description: 'AI驱动的写作优化工具', icon: '✍️' },
    ],
    '游戏': [
      { name: 'ChatGPT', description: '游戏剧情和角色设定', icon: '🎮' },
      { name: 'Midjourney', description: '游戏素材和概念图生成', icon: '🎨' },
      { name: 'Inworld AI', description: 'AI游戏角色创建平台', icon: '👾' },
    ],
    '音乐': [
      { name: 'ChatGPT', description: '歌词创作和音乐灵感', icon: '🎵' },
      { name: 'Suno AI', description: 'AI音乐创作和演唱', icon: '🎤' },
      { name: 'Udio', description: '高质量AI音乐生成', icon: '🎼' },
    ],
    '其他': [
      { name: 'ChatGPT', description: '全能型AI对话助手', icon: '💬' },
      { name: 'Claude', description: '长文本分析和创意写作', icon: '🖋️' },
      { name: 'Gemini', description: 'Google推出的多模态AI', icon: '🌟' },
    ],
  }

  return tools[category] || tools['其他']
}

// 根据提示词分类获取相关AI新闻关键词
const getRelatedNewsKeywords = (category: string) => {
  const keywords: Record<string, string> = {
    '写作': '内容创作,大模型,生成式AI',
    '编程': '编程AI,GitHub,Copilot,代码生成',
    '设计': '图像生成,Midjourney,AI设计,视觉创作',
    '营销': 'AI营销,内容营销,转化率,增长',
    '教育': 'AI教育,学习工具,个性化学习',
    '生活': 'AI生活,效率工具,时间管理',
    '商业': '商业智能,AI创业,自动化',
    '游戏': 'AI游戏,游戏开发,NPC',
    '音乐': 'AI音乐,音频生成,创作工具',
    '其他': 'AI新闻,人工智能',
  }
  return keywords[category] || keywords['其他']
}

export default async function PromptDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const prompt = await getPromptById(id)
  if (!prompt) notFound()

  const relatedPrompts = await getRelatedPrompts(id)
  const recommendedTools = getRecommendedTools(prompt.category)
  const newsKeywords = getRelatedNewsKeywords(prompt.category)

  // 模拟评论数据
  const comments = [
    { id: 1, user: '用户甲', avatar: '👤', content: '非常好用！帮我写文章效率提高了很多', rating: 5, date: '2026-06-10' },
    { id: 2, user: '用户乙', avatar: '👤', content: '很实用的提示词，已经推荐给朋友了', rating: 5, date: '2026-06-08' },
    { id: 3, user: '用户丙', avatar: '👤', content: '效果不错，希望能出更多类似的', rating: 4, date: '2026-06-05' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部信息栏 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">首页</Link>
            <span>/</span>
            <Link href="/prompts" className="hover:text-blue-600">提示词</Link>
            <span>/</span>
            <Link href={`/prompts?category=${prompt.category}`} className="hover:text-blue-600">
              {prompt.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{prompt.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧主内容 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 提示词卡片 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-72 md:h-96">
                <img
                  src={prompt.image_url}
                  alt={prompt.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-3">
                    {prompt.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{prompt.title}</h1>
                  <p className="text-white/90 text-lg">{prompt.description}</p>
                </div>
              </div>

              <div className="p-6">
                {/* 统计信息 */}
                <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 font-bold text-lg">★ {prompt.rating}</span>
                    <span className="text-gray-500">({prompt.reviews}评价)</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">{prompt.sales}</span> 人使用
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {prompt.author_name[0]}
                    </span>
                    <span className="text-gray-700">{prompt.author_name}</span>
                  </div>
                  <div className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    免费使用
                  </div>
                </div>

                {/* 提示词内容 */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">提示词内容</h2>
                  <div className="bg-gray-50 rounded-xl p-6 text-gray-700 whitespace-pre-wrap leading-relaxed border">
                    {prompt.content}
                  </div>
                </div>

                {/* 标签 */}
                {prompt.tags && prompt.tags.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">相关标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/prompts?search=${tag}`}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 操作按钮 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigator.clipboard.writeText(prompt.content)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                  >
                    复制提示词
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all">
                    收藏提示词
                  </button>
                </div>
              </div>
            </div>

            {/* 用户评价 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">用户评价</h2>
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 pb-6 border-b last:border-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{comment.user}</span>
                        <div className="text-yellow-500 text-sm">
                          {'★'.repeat(comment.rating)}
                        </div>
                        <span className="text-xs text-gray-400">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="space-y-6">
            {/* 相关提示词 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">相关提示词</h3>
              <div className="space-y-4">
                {relatedPrompts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/prompt/${related.id}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={related.image_url}
                      alt={related.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">★ {related.rating} · {related.sales}人使用</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 推荐配套工具 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">推荐配套工具</h3>
              <p className="text-xs text-gray-500 mb-4">搭配使用以下工具，效果更佳</p>
              <div className="space-y-3">
                {recommendedTools.slice(0, 4).map((tool) => (
                  <a
                    key={tool.name}
                    href="https://tools.link.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                    <span className="text-xs text-blue-500 flex-shrink-0 mt-1">↗</span>
                  </a>
                ))}
              </div>
              <a
                href="https://tools.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 pt-4 border-t border-gray-100 text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                查看更多AI工具 →
              </a>
            </div>

            {/* 相关AI新闻 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-1">相关AI新闻</h3>
              <p className="text-xs text-white/80 mb-4">了解行业最新动态</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                <p className="text-sm leading-relaxed">
                  关注 {newsKeywords} 等领域的最新进展，获取第一手资讯和深度分析。
                </p>
              </div>
              <a
                href="https://ai.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm text-center"
              >
                浏览AI热点资讯 →
              </a>
            </div>

            {/* 分享 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">分享给朋友</h3>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  微信
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm">
                  微博
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  复制链接
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
