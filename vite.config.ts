import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // import文を絶対パスで書く
  resolve: {
    alias: {
      '@/src': '/src',
    },
  },
  server: {
    // デフォルトのホストはlocalhostのみを公開するようにリッスン。要はdevコンテナ内からしかアクセスできない。
    // なのでhostをtrueにすることでローカルからでもアクセス可能に。
    host: true,
    // ホットリロードに必要
    watch: {
      usePolling: true,
    },
  },
});
