import { useState } from 'react'

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      console.log('Text copied to clipboard successfully')
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy text:', error)
      setIsCopied(false)
    }
  }

  return { isCopied, copyToClipboard }
}
