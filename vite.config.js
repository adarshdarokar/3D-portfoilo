import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ⚙️ Increase warning limit (default 500kb → now 1500kb)
    chunkSizeWarningLimit: 1500,

    // 🧠 Optimize build for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate big libraries for faster loading
          react: ['react', 'react-dom'],
          three: ['three'],
        },
      },
    },
  },
  // 🚀 Optional: Faster dev mode performance
  server: {
    open: true, // auto-open browser
    port: 5173, // change port if needed
  },
})
