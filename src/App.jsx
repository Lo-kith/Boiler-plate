import { useState } from 'react'
import { Hero } from './components/hero'
import { GlowButton } from './components/glow-button'
import { ComponentBrowser } from './components/component-browser'
import { ComponentPreview } from './components/component-preview'
import { ThemeSwitcher } from './components/theme-switcher'
import { CliInstall } from './components/cli-install'
import { LandingPageTemplate } from './templates/landing-page'
import { DashboardTemplate } from './templates/dashboard'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const sampleComponents = [
    {
      name: 'Glow Button',
      description: 'Animated button with glowing effect',
      component: <GlowButton>Click Me</GlowButton>,
      code: `import { GlowButton } from './components/glow-button'

export default function Example() {
  return <GlowButton>Click Me</GlowButton>
}`,
      category: 'buttons',
      tags: ['animation', 'interactive']
    },
    {
      name: 'Hero Section',
      description: 'Beautiful hero with animations',
      component: <div className="p-4 bg-purple-100 rounded">Hero Preview</div>,
      code: `import { Hero } from './components/hero'

export default function Example() {
  return <Hero />
}`,
      category: 'layout',
      tags: ['layout', 'animation']
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Component Library
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'home' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'components' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'templates' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              Templates
            </button>
            <button
              onClick={() => setActiveTab('cli')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'cli' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              CLI
            </button>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <div>
          <Hero />
          <section className="py-20 container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sampleComponents.map((comp) => (
                <ComponentPreview
                  key={comp.name}
                  name={comp.name}
                  description={comp.description}
                  component={comp.component}
                  code={comp.code}
                  tags={comp.tags}
                />
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'components' && (
        <ComponentBrowser components={sampleComponents} />
      )}

      {activeTab === 'templates' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Templates</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-card border-b border-border">
                <h3 className="text-xl font-semibold">Landing Page</h3>
                <p className="text-sm text-muted-foreground">Complete landing page template</p>
              </div>
              <div className="p-4">
                <LandingPageTemplate />
              </div>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-card border-b border-border">
                <h3 className="text-xl font-semibold">Dashboard</h3>
                <p className="text-sm text-muted-foreground">Admin dashboard template</p>
              </div>
              <div className="p-4">
                <DashboardTemplate />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cli' && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">CLI Installation</h2>
          <div className="max-w-2xl mx-auto">
            <CliInstall />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
