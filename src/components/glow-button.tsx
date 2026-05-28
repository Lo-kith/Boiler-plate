import { motion } from 'framer-motion'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { cn } from '../lib/utils'

interface GlowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

export function GlowButton({ 
  children, 
  onClick, 
  className,
  variant = 'primary',
  size = 'md'
}: GlowButtonProps) {
  const glowButtonEnabled = useFeatureFlag('glowButton')

  if (!glowButtonEnabled) {
    return null
  }

  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    accent: 'bg-pink-600 hover:bg-pink-700 text-white'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 20px rgba(147, 51, 234, 0.3)',
          '0 0 40px rgba(147, 51, 234, 0.5)',
          '0 0 20px rgba(147, 51, 234, 0.3)'
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }}
      onClick={() => {
        try {
          onClick?.()
          console.log('Glow button clicked')
        } catch (error) {
          console.error('Error in glow button onClick:', error)
        }
      }}
      className={cn(
        'rounded-lg font-semibold transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  )
}
