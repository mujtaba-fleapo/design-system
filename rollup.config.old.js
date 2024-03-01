import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcssImport from 'postcss-import';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const rollupConfig = {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    }
  ],
  plugins: [
    typescript({
      exclude: ['**/*.stories.ts*']
    }),
    peerDepsExternal(),
    json(),
    resolve({
      moduleDirectories: ['node_modules'],
      extensions: ['.mjs', '.js', '.json', '.node', '.css']
    }),
    commonjs(),
    postcss({
      extensions: ['.scss', '.css'],
      plugins: [postcssImport()],
      extract: false,
      minimize: true
    }),
    terser()
  ],
  external: ['react', 'react-dom', 'fs', '@storybook/*']
};

export default rollupConfig;
