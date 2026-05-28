import { useState, useEffect } from 'react'
import featureFlags from '../feature-flags.json'

export function useFeatureFlag(flag: keyof typeof featureFlags): boolean {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    try {
      const flagValue = featureFlags[flag]
      setIsEnabled(flagValue)
      console.log(`Feature flag "${flag}": ${flagValue}`)
    } catch (error) {
      console.error(`Error loading feature flag "${flag}":`, error)
      setIsEnabled(false)
    }
  }, [flag])

  return isEnabled
}

export function useAllFeatureFlags() {
  const [flags, setFlags] = useState<typeof featureFlags>(featureFlags)

  const toggleFlag = (flag: keyof typeof featureFlags) => {
    try {
      const newValue = !flags[flag]
      setFlags(prev => ({ ...prev, [flag]: newValue }))
      console.log(`Toggled feature flag "${flag}" to: ${newValue}`)
    } catch (error) {
      console.error(`Error toggling feature flag "${flag}":`, error)
    }
  }

  return { flags, toggleFlag }
}
