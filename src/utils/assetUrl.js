// Resolves a public asset path against Vite's base URL.
// Handles both '/audio/file.wav' and 'audio/file.wav' forms.
export const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
