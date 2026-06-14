export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">帮助文档</h1>
          <p className="text-lg text-white/90">快速上手使用PromptMarket</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏导航 */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4 text-gray-900">目录</h2>
              <nav className="space-y-2">
                <a href="#getting-started" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  快速开始
                </a>
                <a href="#how-to-use" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  如何使用
                </a>
                <a href="#categories" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  分类说明
                </a>
                <a href="#submit-prompt" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  提交提示词
                </a>
                <a href="#faq" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  常见问题
                </a>
                <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                  联系我们
                </a>
              </nav>
            </div>
          </aside>

          {/* 主内容 */}
          <main className="lg:col-span-3 space-y-8">
            {/* 快速开始 */}
            <section id="getting-started" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">快速开始</h2>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  PromptMarket 是一个免费的AI提示词分享平台，无需注册即可使用所有提示词。
                  只需几步，你就能找到并使用心仪的提示词：
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>浏览首页或分类页面，找到感兴趣的提示词</li>
                  <li>点击提示词卡片进入详情页</li>
                  <li>复制提示词内容</li>
                  <li>粘贴到ChatGPT、Claude等AI工具中使用</li>
                </ol>
              </div>
            </section>

            {/* 如何使用 */}
            <section id="how-to-use" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">如何使用提示词</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">选择合适的提示词</h3>
                    <p>根据你的需求，在分类或搜索中找到最适合的提示词。</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-green-50 rounded-xl">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">复制提示词</h3>
                    <p>点击"复制提示词"按钮，一键复制到剪贴板。</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-purple-50 rounded-xl">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">粘贴使用</h3>
                    <p>将提示词粘贴到你使用的AI工具中，根据需要调整参数。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 分类说明 */}
            <section id="categories" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">分类说明</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">✍️</div>
                  <h3 className="font-semibold text-gray-900">写作</h3>
                  <p className="text-sm text-gray-600">博客、文案、论文</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">💻</div>
                  <h3 className="font-semibold text-gray-900">编程</h3>
                  <p className="text-sm text-gray-600">代码、调试、架构</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🎨</div>
                  <h3 className="font-semibold text-gray-900">设计</h3>
                  <p className="text-sm text-gray-600">UI、图像、视觉</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">📢</div>
                  <h3 className="font-semibold text-gray-900">营销</h3>
                  <p className="text-sm text-gray-600">推广、社交、品牌</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">📚</div>
                  <h3 className="font-semibold text-gray-900">教育</h3>
                  <p className="text-sm text-gray-600">学习、解题、教学</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-2">🏃</div>
                  <h3 className="font-semibold text-gray-900">生活</h3>
                  <p className="text-sm text-gray-600">健康、旅行、规划</p>
                </div>
              </div>
            </section>

            {/* 常见问题 */}
            <section id="faq" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">常见问题</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold text-gray-900 cursor-pointer p-4 bg-gray-50 rounded-lg">
                    Q: 这些提示词收费吗？
                  </summary>
                  <p className="mt-2 text-gray-600 p-4">
                    A: 目前平台所有提示词均免费使用，内测期间不限量。
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-gray-900 cursor-pointer p-4 bg-gray-50 rounded-lg">
                    Q: 可以提交自己创作的提示词吗？
                  </summary>
                  <p className="mt-2 text-gray-600 p-4">
                    A: 可以！点击"提交提示词"页面，填写相关信息即可。我们会在审核后发布。
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold text-gray-900 cursor-pointer p-4 bg-gray-50 rounded-lg">
                    Q: 提示词适用于哪些AI工具？
                  </summary>
                  <p className="mt-2 text-gray-600 p-4">
                    A: 大部分提示词适用于ChatGPT、Claude等主流AI聊天工具，图像类提示词适用于Midjourney、DALL-E等。
                  </p>
                </details>
              </div>
            </section>

            {/* 联系我们 */}
            <section id="contact" className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
              <p className="text-gray-600 mb-4">
                如果你有任何问题或建议，欢迎通过以下方式联系我们：
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 邮箱: support@promptmarket.com</p>
                <p>💬 微信: PromptMarket</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
