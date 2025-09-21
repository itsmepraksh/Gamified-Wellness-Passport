import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    port: 5173, // default vite port
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Flask backend
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
