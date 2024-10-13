import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isGithub = mode === 'production.github';
  return {
    base: isGithub ? '/react-tic-tac-toe/' : '/',
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
  };
});