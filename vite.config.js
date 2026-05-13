import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Output to 'build/' so the gh-pages script in package.json works as the
// assignment specifies (gh-pages -d build).  Using HashRouter, so no base
// path is required for routing.
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
    },
})
