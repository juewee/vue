import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue/',
  plugins: [vue()],
  build: {
    outDir: 'docs', // 输出目录设置为 docs
  },
});