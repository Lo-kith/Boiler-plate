import { ComponentType } from 'react'

export interface ComponentRegistry {
  name: string
  description: string
  category: string
  component: ComponentType
  code: string
  dependencies?: string[]
  preview?: boolean
  tags?: string[]
}

export const componentRegistry: ComponentRegistry[] = []

export function registerComponent(component: ComponentRegistry) {
  try {
    componentRegistry.push(component)
    console.log(`Registered component: ${component.name}`)
  } catch (error) {
    console.error(`Error registering component ${component.name}:`, error)
  }
}

export function getComponent(name: string): ComponentRegistry | undefined {
  try {
    return componentRegistry.find(c => c.name === name)
  } catch (error) {
    console.error(`Error getting component ${name}:`, error)
    return undefined
  }
}

export function getComponentsByCategory(category: string): ComponentRegistry[] {
  try {
    return componentRegistry.filter(c => c.category === category)
  } catch (error) {
    console.error(`Error getting components by category ${category}:`, error)
    return []
  }
}

export function getAllComponents(): ComponentRegistry[] {
  try {
    return componentRegistry
  } catch (error) {
    console.error('Error getting all components:', error)
    return []
  }
}
