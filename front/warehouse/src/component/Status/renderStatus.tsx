import React from "react";
import { isEmpty } from "lodash";
import { getValue as get } from "gmsoft-tools";
import Status, { StatusType } from "./Status";

export interface StatusMap {
  /** 类型枚举对应的值 */
  statusVal: number;
  /** 类型对应的文案 */
  statusText: string;
  /** 类型对应的标记颜色 */
  statusType?: StatusType;
}

export function generateRenderFn<T = any>(
  statusMap: Array<StatusMap>,
  calcFn?: (data: T) => number,
  showPoint = true
) {
  function renderFunction(status: number): React.ReactNode;
  function renderFunction<T>(data: T): React.ReactNode;

  function renderFunction(...args: Array<any>) {
    let conf: StatusMap | undefined;

    if (args.length === 1) {
      switch (typeof args[0]) {
        case "string":
        case "number":
          conf = statusMap.find(item => +item.statusVal === +args[0]);
          break;
        case "object":
          if (typeof calcFn === "function" && !isEmpty(args[0])) {
            // 认为是对象+回调处理入参
            const statusVal = calcFn(args[0]);
            conf = statusMap.find(item => +item.statusVal === statusVal);
          }
          break;
        default:
      }
    } else {
      throw new Error(
        "generateRenderFn参数类型约定检验失败，请传入指定类型的参数"
      );
    }

    return showPoint ? (
      <Status status={get(conf, "statusType", StatusType.STATUS_FAILED)}>
        {get(conf, "statusText", "未知")}
      </Status>
    ) : (
      get(conf, "statusText", "未知")
    );
  }

  return renderFunction;
}
