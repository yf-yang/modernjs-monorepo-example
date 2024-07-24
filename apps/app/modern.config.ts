import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import turboConsole from 'unplugin-turbo-console/rspack';

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
    rspack: (config, { appendPlugins }) => {
      appendPlugins(turboConsole.default());
    },
  },
  experiments: {
    sourceBuild: true,
  },
  // output: {
  //   disableNodePolyfill: false,
  // },
});
