'use client'

import { useState } from 'react'

interface PromptActionsProps {
  content: string
}

export default function PromptActions({ content }: PromptActionsProps) {
  const [copied, setCopied] = useState(false)
  const [favorited, setFavorited] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleFavorite = () => {
    setFavorited(!favorited)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleCopy}
        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
      >
        {copied ? '已复制!' : '复制提示词'}
      </button>
      <button
        onClick={handleFavorite}
        className={`flex-1 px-6 py-3 border-2 font-semibold rounded-xl transition-all ${
          favorited
            ? 'bg-pink-50 border-pink-300 text-pink-600'
            : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
        }`}
      >
        {favorited ? '已收藏 ❤️' : '收藏提示词'}
      </button>
    </div>
  )
}
