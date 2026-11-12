import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions sets VITE_BASE_PATH in the deployment workflow.
// Default to './' or process.env.VITE_BASE_PATH for GitHub Pages compatibility.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
  },
});
