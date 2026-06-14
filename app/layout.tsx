import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PromptMarket - AI提示词免费库 | ChatGPT Midjourney提示词',
    template: '%s | PromptMarket',
  },
  description: '发现、免费使用高质量AI提示词！支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。全部免费，内测期间不限量使用！',
  keywords: 'AI提示词, ChatGPT提示词, Midjourney提示词, Stable Diffusion提示词, Claude提示词, 提示词免费, AI工具, 提示词模板, AI写作, AI绘画',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">PromptMarket</span>
              </a>

              {/* 主导航 */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">首页</a>
                <a href="/prompts" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">浏览提示词</a>
                <a href="/submit" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">提交提示词</a>
                <span className="h-4 w-px bg-gray-200" />
                <a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  🛠️ AI工具推荐
                </a>
                <a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  📰 AI热点
                </a>
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <a
                  href="/prompts"
                  className="px-6 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                >
                  免费开始使用
                </a>
              </div>

              {/* 移动端菜单按钮 */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* 品牌介绍 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <span className="font-bold text-gray-900">PromptMarket</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI提示词免费库，发现、分享、使用优质AI提示词，提升你的工作效率。
                  </p>
                </div>

                {/* 产品 */}
                <div>
                  <h3 className="font-semibold mb-4 text-gray-900">产品</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="/prompts" className="text-gray-600 hover:text-blue-600 transition-colors">浏览提示词</a></li>
                    <li><a href="/submit" className="text-gray-600 hover:text-blue-600 transition-colors">提交提示词</a></li>
                    <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">使用教程</a></li>
                  </ul>
                </div>

                {/* 资源 */}
                <div>
                  <h3 className="font-semibold mb-4 text-gray-900">资源</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="/docs" className="text-gray-600 hover:text-blue-600 transition-colors">帮助文档</a></li>
                    <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">博客文章</a></li>
                    <li><a href="/prompts" className="text-gray-600 hover:text-blue-600 transition-colors">全部提示词</a></li>
                  </ul>
                </div>

                {/* 姊妹站点 */}
                <div>
                  <h3 className="font-semibold mb-4 text-gray-900">姊妹站点</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                        <span className="text-lg">🛠️</span>
                        <span>AI工具推荐</span>
                        <span className="text-xs text-blue-500">↗</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                        <span className="text-lg">📰</span>
                        <span>AI热点资讯</span>
                        <span className="text-xs text-blue-500">↗</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  © 2026 PromptMarket. All rights reserved. | AI提示词免费库
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    tools.link.cn
                  </a>
                  <span className="text-gray-300">·</span>
                  <a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    ai.link.cn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
