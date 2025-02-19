import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: {
        build: true,
      },
      bundle: true,
    },
    {
      format: 'cjs',
      bundle: true,
    },
  ],
});
