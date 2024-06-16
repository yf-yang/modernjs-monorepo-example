import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    tailwindcssPlugin(),
  ],
  tools: {
    swc: {
      jsc: {
        transform: {
          decoratorVersion: '2022-03',
        },
      },
    },
  },
  experiments: {
    sourceBuild: true,
  },
  // output: {
  //   disableNodePolyfill: false,
  // },
});
