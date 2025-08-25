import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Resume/',
  server: {
    host: true, // Needed for Docker
    port: 5173,
    watch: {
      usePolling: true, // Needed for hot reload in Docker
    },
  },
  build: {
    // Aggressive cache busting with timestamp
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        chunkFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        assetFileNames: `assets/[name]-[hash]-${Date.now()}.[ext]`,
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
