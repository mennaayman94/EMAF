const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    ['/users/','/projects/'],
    createProxyMiddleware({
      target: 'http://localhost:200',
      changeOrigin: true,
    })
  );
};