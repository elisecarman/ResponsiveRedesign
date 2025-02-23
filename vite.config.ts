import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/elisecarman.github.io/InteractionDesign-New/",
  plugins: [react()],
})
