const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8082', // Change this if your backend runs on a different port
      changeOrigin: true,
    })
  );
};