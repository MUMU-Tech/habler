import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/habler/', // GitHub 仓库名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
