import { motion } from 'framer-motion'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { Hero } from '../components/hero'
import { GlowButton } from '../components/glow-button'
import { fadeIn, slideUp } from '../lib/animations'

export function LandingPageTemplate() {
  const templatesEnabled = useFeatureFlag('useTemplates')

  if (!templatesEnabled) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Hero />
      
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={slideUp}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose Our Components?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beautiful Design',
                description: 'Aesthetically pleasing components with smooth animations'
              },
              {
                title: 'Easy to Use',
                description: 'Simple API with TypeScript support for better DX'
              },
              {
                title: 'Fully Customizable',
                description: 'Tailwind CSS based with theme support'
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={slideUp}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gray-50 dark:bg-gray-950"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={slideUp}
            className="text-4xl font-bold mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 dark:text-gray-400 mb-8"
          >
            Start building beautiful interfaces with our component library
          </motion.p>
          <motion.div variants={slideUp}>
            <GlowButton>Get Started Now</GlowButton>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
