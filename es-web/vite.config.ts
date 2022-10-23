/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import createReactPlugin from '@vitejs/plugin-react';
import createReScriptPlugin from '@jihchi/vite-plugin-rescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createReactPlugin(), createReScriptPlugin()],
  test: {
    include: [
      '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', // Vitest default
      '**/*_{test,spec}.{bs.js,bs.mjs}' // built by Rescript
    ],
    globals: true,
    deps: {
      inline: ['rescript-vitest']
    }
  }
})
