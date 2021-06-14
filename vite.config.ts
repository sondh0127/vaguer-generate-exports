import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import GenerateExports from 'vite-plugin-generate-exports'
import ts from 'rollup-plugin-typescript2'

declare const __dirname: string

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    lib: {
      name: 'VueInteractive',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    GenerateExports({
      patterns: [
        {
          matchTokens: ['// Start_Exports', '// End_Exports'],
          path: 'src/components/**/*.vue',
        },
      ],
    }),
    WindiCSS({
      preflight: false,
    }),
    {
      apply: 'build',
      ...ts({
        useTsconfigDeclarationDir: true,
      }),
    },
  ],
})

export default ({ command }) => ({
  ...config,
  esbuild: command === 'serve',
})
