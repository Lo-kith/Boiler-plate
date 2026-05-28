import { motion } from 'framer-motion'
import { useFeatureFlag } from '../hooks/use-feature-flag'
import { fadeIn, slideUp } from '../lib/animations'

export function DashboardTemplate() {
  const templatesEnabled = useFeatureFlag('useTemplates')

  if (!templatesEnabled) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              Overview
            </button>
            <button className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              Analytics
            </button>
            <button className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              Settings
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.main
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="container mx-auto px-4 py-8"
      >
        <motion.div variants={slideUp} className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your projects</p>
        </motion.div>

        <motion.div
          variants={slideUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { label: 'Total Projects', value: '12', change: '+2 this month' },
            { label: 'Active Users', value: '1,234', change: '+15% from last week' },
            { label: 'Revenue', value: '$4,567', change: '+8% from last month' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={slideUp} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New component added', time: '2 hours ago' },
              { action: 'Template updated', time: '5 hours ago' },
              { action: 'User registered', time: '1 day ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                <span>{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
