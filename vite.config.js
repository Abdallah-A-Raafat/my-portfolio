import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    host: true,
    port: 5173,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  assetsInclude: ['**/*.pdf', '**/*.jpeg', '**/*.jpg', '**/*.png']
})
