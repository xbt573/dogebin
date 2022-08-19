const express = require('express');
const httpProxy = require('http-proxy');

const PORT = process.env.PROXY_PORT || 8080;
const BACKEND_PORT = process.env.BACKEND_PORT || 5000;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;

const proxy = httpProxy.createProxyServer({});
const app = express();

app.all(/^\/(api|raw)\/(.*)$/, function(req, res) {
    proxy.web(req, res, { target: `http://localhost:${BACKEND_PORT}` });
});

app.all(/^\/(.*)$/, function(req, res) {
    proxy.web(req, res, { target: `http://localhost:${FRONTEND_PORT}` });
});

app.listen(PORT);
