/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-09-03 14:47:02
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-03 14:47:10
 * @Description: Nothing
 */
// 分解 react路由中search参数的 字符串变为对象
export const decomposeUrl = (location: string) => {
  // 根据 & 符号分解
  const url = location.substring(1);
  const queryArray = url.split('&');
  const queryObj = queryArray.map(item => {
    const itemArray = item.split('=');
    return { [itemArray[0]]: itemArray[1] };
  });
  return queryObj.reduce((oldItem, item) => ({ ...oldItem, ...item }));
};

// 组装 search 传入一个对象
export const combinationUrl = location => {
  const keys = Object.keys(location);
  return keys.reduce((upValue, value, index) => {
    if (index === 0) {
      return `${upValue}${value}=${location[value]}`;
    }
    return `${upValue}&${value}=${location[value]}`;
  }, '?');
};
