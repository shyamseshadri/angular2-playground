var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/api', {
                target: 'http://angular2-workshop-server.herokuapp.com',
                changeOrigin: true
            }),

            2: fallbackMiddleware({
                index: '/index.html', verbose: true
            })
        }
    }
};
