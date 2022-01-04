import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  hash: true,
  routes,
  dva: {
    hmr: true,
  },
  proxy
});
