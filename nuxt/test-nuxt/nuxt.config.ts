import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  ssr: false, // SSR無効
  target: 'static',
  compilerOptions: {
    isCustomElement: (tag: string) => tag.startsWith('nuxt-')
  },

  pages: {
    index: {
      entry: 'pages/index.ts',
      // その他のオプション設定
    },
    // 他のページの設定
  },

  layout: 'default-layout', // ここに layout の設定を追加

  // その他の設定...
};

export default config;