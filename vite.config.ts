import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker
    port: 5173,
    watch: {
      usePolling: true, // Needed for hot reload in Docker
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
