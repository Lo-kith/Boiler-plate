export const cliInstructions = {
  install: `npx component-library-ui@latest add [component-name]`,
  init: `npx component-library-ui@latest init`,
  update: `npx component-library-ui@latest update`,
  examples: [
    `npx component-library-ui@latest add button`,
    `npx component-library-ui@latest add card`,
    `npx component-library-ui@latest add dialog`
  ]
}

export function generateInstallCommand(componentName: string): string {
  try {
    return `npx component-library-ui@latest add ${componentName}`
  } catch (error) {
    console.error('Error generating install command:', error)
    return cliInstructions.install
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Command copied to clipboard')
      return true
    })
    .catch((error) => {
      console.error('Failed to copy to clipboard:', error)
      return false
    })
}
