import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.js'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.js': 'jsx', 
  },
});
