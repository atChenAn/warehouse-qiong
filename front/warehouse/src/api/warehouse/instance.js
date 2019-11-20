import { createAPI } from "../util";
import config from "../config";

const baseUrl = {
  mock: "http://localhost:7300/mock/5dc6ce36f3544c0b24fcee56/warehouse",
  dev: "/api",
  pre: "",
  prod: "/api"
}[config.env || "mock"];

export default createAPI(baseUrl);
