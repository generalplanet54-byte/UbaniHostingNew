import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ✅ Set base to '/' for custom domain deployment
  base: '/',

  build: {
    outDir: 'dist',  // default build folder
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
})
