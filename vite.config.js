import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@redux', replacement: '/src/app/redux' },
      { find: '@components', replacement: '/src/components' },
      { find: '@commons', replacement: '/src/components/commons' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@svgs', replacement: '/src/assets/svgs' },
      { find: '@images', replacement: '/src/assets/images' },
    ],
  },
});
