import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = Boolean(process.env.VERCEL)

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/SSC/', // keep GH Pages path while allowing Vercel root
})
