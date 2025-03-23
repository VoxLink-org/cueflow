import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const base = '/cueflow/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'VITE_BASE': JSON.stringify(base),
  },
})
