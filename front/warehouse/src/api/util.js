import axios from "axios";
import { PopNotification } from "@/utils/popup";
import { get } from "lodash";
import history from "@/utils/history";

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
    const responseStatus = error.response.status;
    switch (responseStatus) {
      case 400:
        break;
      case 401:
        PopNotification.error("您尚未登录，或登录信息已失效，请重新登陆！");
        history.push("/login");
        break;
      case 403:
        PopNotification.error("对不起，您无权访问本页面！");
        break;
      case 404:
        PopNotification.error("对不起，当前页面不存在！");
        break;
      case 500:
        // 服务器通用错误，由应用本身接管
        error.message = get(error.response, "data.message") || error.message;
        break;
      case 503:
        PopNotification.error("服务器错误：" + error.message);
        break;
      default:
        PopNotification.error("未知错误：" + error.message);
    }

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
