import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Light-dark-mode-digital-clock",
  plugins: [react()],
})
