import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        react(),
        dts({include: ['lib']}),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
            output: {
                entryFileNames: 'index.js',
                assetFileNames: (assetInfo) =>
                    assetInfo.name?.endsWith('.css') ? 'styles.css' : 'assets/[name][extname]',
            },
        },
        cssCodeSplit: false,
    },
})
