import { useState } from 'react'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { useCopyToClipboard } from '../hooks/use-copy-to-clipboard'
import { cliInstructions } from '../utils/cli'
import { Copy, Terminal, CheckCircle2 } from 'lucide-react'
import { cn } from '../lib/utils'

export function CliInstall() {
  const cliEnabled = useFeatureFlag('installCLI')
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const [selectedCommand, setSelectedCommand] = useState(cliInstructions.init)

  if (!cliEnabled) {
    return null
  }

  const commands = [
    { label: 'Initialize Project', command: cliInstructions.init },
    { label: 'Add Component', command: cliInstructions.install },
    { label: 'Update Library', command: cliInstructions.update }
  ]

  const handleCopy = async () => {
    await copyToClipboard(selectedCommand)
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold">CLI Installation</h3>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Install components directly in your project using our CLI tool
      </p>

      <div className="space-y-3 mb-4">
        {commands.map((cmd) => (
          <button
            key={cmd.label}
            onClick={() => setSelectedCommand(cmd.command)}
            className={cn(
              'w-full text-left px-4 py-2 rounded-lg transition-colors',
              selectedCommand === cmd.command
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{cmd.label}</span>
              <code className="text-xs opacity-75">{cmd.command}</code>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between gap-4">
        <code className="text-sm text-purple-300 font-mono flex-1 overflow-x-auto">
          {selectedCommand}
        </code>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors flex-shrink-0"
          title="Copy command"
        >
          {isCopied ? (
            <CheckCircle2 className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 mb-2">Examples:</p>
        <div className="space-y-1">
          {cliInstructions.examples.map((example, index) => (
            <code key={index} className="block text-xs text-gray-400 font-mono">
              {example}
            </code>
          ))}
        </div>
      </div>
    </div>
  )
}
