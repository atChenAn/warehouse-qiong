import axios from "axios";

/* 添加响应拦截器 */

const instance = axios.create({
  withCredentials: true
});

instance.interceptors.response.use(
  function(response) {
    // 在接收响应做些什么，例如跳转到登录页
    console.log("响应拦截器：SUCCESS HOOK");
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    console.log("响应拦截器：FAILED HOOK " + error);
    return Promise.reject(error);
  }
);

function createAPI(baseURL) {
  return function(conf) {
    conf = conf || {};
    return instance(
      Object.assign(
        {},
        {
          url: conf.url,
          baseURL: baseURL,
          method: conf.method
        },
        conf.opts
      )
    );
  };
}

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach(key => {
    const r = new RegExp("(:" + key + "|{" + key + "})", "g");
    url = url.replace(r, opts.path[key]);
  });

  return url;
}

export { createAPI, convertRESTAPI };
