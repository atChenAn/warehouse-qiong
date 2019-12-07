/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-13 15:57:44
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-02 15:40:37
 * @Description: Nothing
 */
import { ValueType, PickerValue, ValueStatus } from './SingleDatePicker.d';

export interface RangePickerValue {
  [ValueStatus.Start]: ValueType | undefined;
  [ValueStatus.End]: ValueType | undefined;
}
