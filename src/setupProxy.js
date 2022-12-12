const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // API
  app.use(
    [""],
    createProxyMiddleware({
      target: "https://valley.int.rsquareon.com",
      secure: true, // disable SSL verification
      changeOrigin: true, // for vhosted sites, changes host header to match to target's host
    })
  );
};
