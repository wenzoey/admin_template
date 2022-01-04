export default {
  proxy: {
    '/api': {
      'target': 'http://localhost:816',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
}
