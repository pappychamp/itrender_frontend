// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // テスト中でも自動JSXランタイムを有効化
  plugins: [react()],
  // import文を絶対パスで書く
  resolve: {
    alias: {
      '@/src': '/src',
    },
  },
  test: {
    // vitest のグローバル関数や変数を直接利用できるようにする設定。
    globals: true,
    // テストの実行環境
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
    },
    // テストの前に実行されるセットアップファイル
    setupFiles: './vitest.setup.ts',
  },
});
