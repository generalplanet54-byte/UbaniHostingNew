import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/UbaniHostingNew/', // Set base for GitHub Pages
  build: {
    outDir: 'docs', // Output to 'docs' for GitHub Pages
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
