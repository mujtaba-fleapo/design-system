import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  define: { 'process.env': process.env },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }]
  },
  server: {
    host: 'localhost',
    port: 3004
  },
  plugins: [react()]
}));
