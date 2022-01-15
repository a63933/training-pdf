import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@utils': resolve('./src/utils')
    }
  },
  base: '/'
  // css:{
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
        // modifyVars: {
        //   hack: `true; @import (reference) "${resolve('src/assets/common.less')}"`
        // },
        // additionalData: `import "${resolve(__dirname, 'src/assets/common.less')}"`
        // additionalData: `@font-color: red;`
  //     }
  //   }
  // }
})
