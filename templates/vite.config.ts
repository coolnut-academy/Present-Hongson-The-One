// EXAMPLE. Let the implementation agent integrate this safely with the actual project.
// GitHub Actions sets VITE_BASE_PATH in the deployment workflow.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: { outDir: 'dist' },
});
