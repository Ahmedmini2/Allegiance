import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://webto.salesforce.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000003VHZr'),
      },
    },
  },
});