/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-13 15:57:44
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-02 15:40:25
 * @Description: Nothing
 */
import { Moment as StatementMoment } from 'moment/moment';

export enum ValueType {
  TimeStamp = 'timeStamp', // 时间戳
  TimeString = 'timeString', // 字符串时间
  Moment = 'moment', // moment对象
}

export enum ValueStatus {
  Start = 'start', // 开始时间
  End = 'end', // 结束时间
}

export type PickerValue = string | number | StatementMoment | null;
