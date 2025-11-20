import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// If using React Router, add this to vite.config.js to avoid 404s:

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: 'dist'
  }
})

