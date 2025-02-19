import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: true,
      bundle: true,
    },
    {
      format: 'cjs',
      bundle: true,
    },
  ],
});
