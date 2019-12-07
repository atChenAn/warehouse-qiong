export interface UserItem {
  /**  (number, optional): 创建时间戳 , */
  createTime: number;
  /**  (string, optional): 用户组ID , */
  groupId: string;
  /**  (string, optional): 用户组名 , */
  groupName: string;
  /**  (string, optional): 用户id , */
  id: string;
  /**  (string, optional): 逻辑删除：1 删除 0 正常 , */
  isDel: string;
  /**  (string, optional): 用户昵称 , */
  nickName: string;
  /**  (number, optional): 账户状态：0、正常 1、受限 2、冻结 , */
  status: number;
  /**  (number, optional): 用户权限[保留字段] , */
  userAuth: number;
  /**  (string, optional): 用户名 */
  username: string;
}
