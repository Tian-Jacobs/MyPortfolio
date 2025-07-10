import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/si', 'react-icons/tb', 'react-icons/gr']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-icons': ['react-icons/fa', 'react-icons/si', 'react-icons/tb', 'react-icons/gr']
        }
      }
    }
  }
})