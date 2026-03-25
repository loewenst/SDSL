import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { wizardPlugin } from './vite-wizard-plugin.js'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SDSL/' : '/',
  plugins: [react(), wizardPlugin()],
})
