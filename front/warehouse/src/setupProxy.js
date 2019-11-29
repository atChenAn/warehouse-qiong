const proxy = require("http-proxy-middleware");

// home | company 代理的目标平台
const platform = "company";

let proxyConf = null;

if (platform === "home") {
  proxyConf = function(app) {
    app.use(
      "/api",
      proxy({
        target: "http://192.168.7.107:8086",
        changeOrigin: true
      })
    );
  };
}

if (platform === "company") {
  proxyConf = function(app) {
    app.use(
      "/api",
      proxy({
        target: "http://192.168.2.118:8086",
        changeOrigin: true
      })
    );
  };
}

module.exports = proxyConf;
