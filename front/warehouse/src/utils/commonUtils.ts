/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-26 18:47:18
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-24 12:40:09
 * @Description: Nothing
 */
/* eslint-disable no-extra-boolean-cast */
import moment from "moment";
import { get, random, isNumber, padEnd, keys } from "lodash";
import Decimal from "decimal.js-light";
import isNil from "ramda/es/isNil";

// 将一个Unix时间戳或时间对象转换为moment对象
function time2Moment(time): moment.Moment {
  let timeObj: moment.Moment;
  if (typeof time === "number") {
    timeObj = moment(time);
  } else {
    try {
      timeObj = moment(time.valueOf());
    } catch (e) {
      throw new Error(
        "time2Moment方法需要的参数为Unix时间戳或JavaScript日期时间对象"
      );
    }
  }
  return timeObj;
}

/**
 * 格式化金钱格式
 * @param val   格式化值 文本或数字
 * @param showDef   是否显示默认占位符 -- 默认显示，不想显示传入false
 * @param showUnit  是否显示默认单位[元] 或者 传入想要显示的单位，默认显示元，不想显示传入false
 * @param renderPosition 单位渲染位置 before
 * @param precision 保留的精度位数
 * @param retainPrecision 是否启用数字精度保留，解释：当实际传入的数字精度高于precision指定的精度位数时，采用何种处理模式
 * true为保留实际值的精度位数，false时采用precision指定的精度位数（四舍五入）
 */
function formatMoney(
  val: string | number | undefined,
  showDef: boolean = true,
  showUnit: boolean | string = "￥",
  renderPosition: "before" | "after" = "before",
  precision: number = 2,
  retainPrecision = true
) {
  const oldModel = Decimal.rounding;
  // 变更舍入模式为向下舍入
  Decimal.rounding = Decimal.ROUND_DOWN;

  // 负向断言部分浏览器支持不好，测试了55 56 63 几个版本，最低63支持负向断言
  // const money = `${val}`.replace(/(?<!.*?\..*?)\B(?=(\d{3})+(?!\d))/g, ',');
  if (val) {
    // 负向断言部分浏览器支持不好，测试了55 56 63 几个版本，最低63支持负向断言
    // const money = `${val}`.replace(/(?<!.*?\..*?)\B(?=(\d{3})+(?!\d))/g, ',');
    const srcNumber = new Decimal(val);
    const int = srcNumber.toInteger();
    // 小数部分
    let decimal: Decimal | string = srcNumber.minus(int); // `${.toFixed(precision)}`.substr(2);

    if (retainPrecision) {
      // 保留实际精度
      if (decimal.toString().length < 4) {
        // 如果取得的小数部分转成精度低于两位则调用fixed进行精度补齐
        decimal = decimal.toFixed(precision).substr(2);
      } else {
        decimal = decimal.toString().substr(2);
      }
    } else {
      // 不保留实际精度
      decimal = decimal.toFixed(precision).substr(2);
    }

    let targetStr = `${int}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    targetStr = `${targetStr}${!!decimal ? "." : ""}${decimal}`;

    // 恢复舍入模式
    Decimal.rounding = oldModel;

    // 根据位置配参数渲染单位
    if (renderPosition === "before") {
      return `${showUnit}${targetStr}`;
    }
    return `${targetStr}${showUnit}`;
  }
  return showDef ? "--" : null;
}

function unix2Date(unix) {
  try {
    if (isNil(unix)) {
      throw new Error("invalid time");
    }
    const momentObj = time2Moment(unix - 0);
    return momentObj.format("YYYY-MM-DD");
  } catch (e) {
    return "--";
  }
}

// 清除对象空值属性以及指定的目标属性，返回新的对象
function clearObjectAttribute(obj, targetKeys = []) {
  const target = {};
  /* eslint-disable */
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !!obj[key]) {
      target[key] = obj[key];
    }
  }
  for (const key of targetKeys) {
    delete target[key];
  }
  /* eslint-enable */
  return target;
}

enum Model {
  /**
   * 纯小写
   * */
  EN_LOWER,
  /**
   * 纯大写
   * */
  EN_UPPER,
  /**
   * 大小写混合
   * */
  EN_LOWER_UPPER,
  /**
   * 纯数字
   * */
  NUMBER,
  /**
   * 混合模式
   * */
  MIXTURE
}

const CharTable = {
  [Model.EN_LOWER]: "abcdefghijklmnopqrstuvwxyz".split(""),
  [Model.EN_UPPER]: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  [Model.EN_LOWER_UPPER]: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  ),
  [Model.NUMBER]: "0123456789".split(""),
  [Model.MIXTURE]: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  )
};

function gernerateId(model: Model = Model.MIXTURE, len = 8) {
  let id = "";

  for (let i = 0; i < len; i++) {
    const index = random(0, CharTable[model].length - 1);
    id += CharTable[model][index];
  }

  return id;
}

// 将一个时间戳转为当前时间的起始
function UnixStartOfDay(time: number) {
  const timeObj = time2Moment(time);
  timeObj.millisecond(0);
  timeObj.seconds(0);
  timeObj.minute(0);
  timeObj.hour(0);
  timeObj.millisecond(0);
  return timeObj.valueOf();
}

// 将一个时间戳转为当天时间的结束
function UnixEndOfDay(time: number) {
  const timeObj = time2Moment(time);
  timeObj.millisecond(999);
  timeObj.seconds(59);
  timeObj.minute(59);
  timeObj.hour(23);
  return timeObj.valueOf();
}

function unix2Time(unix, seconds = false) {
  if (unix) {
    const momentObj = time2Moment(unix);
    return momentObj.format(
      seconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm"
    );
  }
  return null;
}

/**
 * 生成事件回调，闭包this和携带参数，g为generate首字母，如果为点击事件，则自动调用preventDefault
 * @param cb  回调函数
 * @param args 回调函数参数
 */
function g(cb: Function, ...args): () => void {
  return (e?: any) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    return cb(...args);
  };
}

/**
 * 根据传入的key获取对应序列的对象属性值
 * @param targetObj 目标对象
 * @param keys  目标键集合
 */
function getValuseByKeys(targetObj: any, keyGroup: Array<string>) {
  const vals: Array<any> = [];
  keyGroup.map(key => vals.push(get(targetObj, key)));
  return vals;
}

/**
 * 返回默认值
 * @param val 值
 * @param defCharacter 占位符
 * @param extraStr 额外追加的字符 默认为空
 * @param position 追加位置 before | after
 */
function def(
  val: any,
  defCharacter: string = "--",
  extraStr: string = "",
  position: "befor" | "after" = "after"
) {
  if (val !== null && val !== undefined) {
    if (position === "befor") {
      return `${extraStr}${val}`;
    }
    return `${val}${extraStr}`;
  }
  return defCharacter;
}

function getErrorMsg(e: Error) {
  const msgDetail = e.message;
  if (msgDetail.includes("Timeout")) {
    return "操作失败，请稍等片刻后重试";
  }
  if (msgDetail.includes("Service unavailable")) {
    return "服务不可用，请确认应用服务是否启动";
  }
  if (msgDetail.includes("not a function")) {
    return "函数调用异常，调用的目标属性，不是函数";
  }
  if (msgDetail.includes("undefine")) {
    return `空指针异常:${e.message}`;
  }
  return msgDetail;
}

export {
  Model,
  gernerateId,
  UnixStartOfDay,
  UnixEndOfDay,
  clearObjectAttribute,
  unix2Time,
  unix2Date,
  formatMoney,
  g,
  getValuseByKeys,
  def,
  getErrorMsg
};
