export interface LogItem {
  /** (number, optional): 创建时间 , */
  createtime: number;
  /** (string, optional): 日志附加信息 , */
  description: string;
  /** (string, optional), */
  id: string;
  /** (string, optional): 操作用户昵称 , */
  nickName: string;
  /** (number, optional): 操作结果：1、成功 2、失败 , */
  status: number;
  /** (number, optional): 日志类型：1、添加 2、修改 3、查询 4、删除 5、导入 6、其他 , */
  type: number;
  /** (string, optional): 用户id , */
  userId: string;
  /** (string, optional): 操作用户名 */
  username: string;
}
