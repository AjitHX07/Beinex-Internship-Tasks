// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        include: ['d3']
    },
    build: {
        commonjsOptions: {
            include: [/d3/]
        }
    }
});