
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

app.use('/api', createProxyMiddleware({
  target: 'https://api.postmarkapp.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.listen(143, () => {
  console.log('Proxy server listening on port 9000');
});