import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
});
