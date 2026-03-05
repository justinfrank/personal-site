import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        // Prepended to every SCSS file — only vars/mixins, never output-generating rules
        silenceDeprecations: ['color-functions', 'global-builtin', 'slash-div'],
        additionalData: `
          @use '${path.resolve('src/lib/styles/tokens/_breakpoints')}' as *;
          @use '${path.resolve('src/lib/styles/_mixins')}' as *;
        `,
      },
    },
  },
});
