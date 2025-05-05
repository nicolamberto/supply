import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: 'localhost', // Asegúrate de que el servidor escuche en localhost
    port: 5173,        // Puerto predeterminado de Vite
    https: false,      // Deshabilita HTTPS para evitar problemas con certificados
  },
})