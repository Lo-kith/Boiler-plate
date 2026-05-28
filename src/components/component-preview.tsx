import { useState } from 'react'
import { motion } from 'framer-motion'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { useCopyToClipboard } from '../hooks/use-copy-to-clipboard'
import { Copy, Download, Eye, Code } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { cn } from '../lib/utils'

interface ComponentPreviewProps {
  name: string
  description: string
  component: React.ReactNode
  code: string
  tags?: string[]
}

export function ComponentPreview({
  name,
  description,
  component,
  code,
  tags = []
}: ComponentPreviewProps) {
  const previewEnabled = useFeatureFlag('previewAnimations')
  const copyCodeEnabled = useFeatureFlag('copyCode')
  const downloadEnabled = useFeatureFlag('DownloadTSX')
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const [showCode, setShowCode] = useState(false)

  if (!previewEnabled) {
    return null
  }

  const handleCopyCode = async () => {
    if (copyCodeEnabled) {
      await copyToClipboard(code)
    }
  }

  const handleDownload = () => {
    if (downloadEnabled) {
      try {
        const blob = new Blob([code], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${name}.tsx`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        console.log(`Downloaded ${name}.tsx`)
      } catch (error) {
        console.error('Error downloading file:', error)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title={showCode ? 'Hide Code' : 'Show Code'}
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            </button>
            {copyCodeEnabled && (
              <button
                onClick={handleCopyCode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Copy Code"
              >
                <Copy className={cn('w-4 h-4', isCopied && 'text-green-500')} />
              </button>
            )}
            {downloadEnabled && (
              <button
                onClick={handleDownload}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Download TSX"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 min-h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-950">
          {component}
        </div>

        {showCode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
            <div className="rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
