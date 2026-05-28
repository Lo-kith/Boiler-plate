import { motion } from 'framer-motion'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { fadeIn, slideUp, glowAnimation } from '../lib/animations'
import { Sparkles, Zap, Palette } from 'lucide-react'

export function Hero() {
  const heroEnabled = useFeatureFlag('heroSection')

  if (!heroEnabled) {
    return null
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTIgMi0yIDQgMiA0IDIgNC0yIDItMi00em0wLTMwYzAtMiAyLTQgMi00cy0yIDItMiA0IDIgNCAyIDQtMiAyLTItNHptMzAgMzBjMC0yIDItNCAyLTRzLTIgMi0yIDQgMiA0IDIgNC0yIDItMi00em0wLTMwYzAtMiAyLTQgMi00cy0yIDItMiA0IDIgNCAyIDQtMiAyLTItNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
          className="text-center"
        >
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">Beautiful React Components</span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Build Stunning UIs
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto"
          >
            A modern component library with smooth animations, beautiful designs, 
            and developer-friendly tools. Copy, customize, and ship faster.
          </motion.p>

          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              {...glowAnimation}
              className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              onClick={() => console.log('Get Started clicked')}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => console.log('View Components clicked')}
            >
              View Components
            </motion.button>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-purple-200 text-sm">Optimized components with minimal bundle size</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Palette className="w-8 h-8 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Fully Customizable</h3>
              <p className="text-purple-200 text-sm">Tailwind CSS based with theme support</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-8 h-8 text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Beautiful Animations</h3>
              <p className="text-purple-200 text-sm">Smooth Framer Motion animations included</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
