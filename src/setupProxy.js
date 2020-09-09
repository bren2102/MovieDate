const { createProxyMiddleware } = require('http-proxy-middleware');
/* eslint-disable */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bren2102-moviedateapi.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};

/* eslint-enable */
