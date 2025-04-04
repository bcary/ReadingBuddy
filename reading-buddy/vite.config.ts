import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true, // ensures public directory is copied to dist
  },
  publicDir: 'public', // specify the public directory
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});