import axios from "axios";

import * as warehouse from "./warehouse";

axios.interceptors.response.use(
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

export { warehouse };
