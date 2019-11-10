const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app
    // .use(
    //   "/login",
    //   proxy({
    //     target: "http://localhost:8080",
    //     changeOrigin: true
    //   })
    // )
    // .use(
    //   "/user",
    //   proxy({
    //     target: "http://localhost:8080",
    //     changeOrigin: true
    //   })
    // )
    // .use(
    //   "/log",
    //   proxy({
    //     target: "http://localhost:8080",
    //     changeOrigin: true
    //   })
    // )
    .use(
      "/api",
      proxy({
        target: "http://localhost:8080",
        changeOrigin: true
      })
    );
};
