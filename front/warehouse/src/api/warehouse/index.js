import instance from './instance';
import { convertRESTAPI } from '../util';

/** 库存盘存单添加 */
function warehouse_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/warehouse/add',
    opts: opts
  });
}

/** 库存盘存单删除 */
function warehouse_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/warehouse/delete',
    opts: opts
  });
}

/** 库存盘存单导出 */
function warehouse_export_get(opts) {
  return instance({
    method: 'get',
    url:  '/warehouse/export',
    opts: opts
  });
}

/** 库存盘存单导入 */
function warehouse_import_post(opts) {
  return instance({
    method: 'post',
    url:  '/warehouse/import',
    opts: opts
  });
}

/** 库存盘存单查询 */
function warehouse_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/warehouse/list',
    opts: opts
  });
}

/** 修改盘存与PM数据 */
function warehouse_update_patch(opts) {
  return instance({
    method: 'patch',
    url:  '/warehouse/update',
    opts: opts
  });
}

/** 获取用户信息 */
function login_me_get(opts) {
  return instance({
    method: 'get',
    url:  '/login/me',
    opts: opts
  });
}

/** 添加用户 */
function user_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/user/add',
    opts: opts
  });
}

/** 删除用户信息 */
function user_delete_id_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/user/delete/{id}', opts),
    opts: opts
  });
}

/** 获取用户详细信息 */
function user_get_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/user/get/{id}', opts),
    opts: opts
  });
}

/** 获取用户组 */
function user_group_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/user/group/list',
    opts: opts
  });
}

/** 批量导入用户列表[暂未实现] */
function user_import_post(opts) {
  return instance({
    method: 'post',
    url:  '/user/import',
    opts: opts
  });
}

/** 获取用户列表信息 */
function user_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/user/list',
    opts: opts
  });
}

/** 修改用户信息 */
function user_update_id_patch(opts) {
  return instance({
    method: 'patch',
    url: convertRESTAPI('/user/update/{id}', opts),
    opts: opts
  });
}

/** 日志清理 */
function log_clear_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/log/clear',
    opts: opts
  });
}

/** 日志查询 */
function log_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/log/list',
    opts: opts
  });
}

/** 登陆 */
function login_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/login/login',
    opts: opts
  });
}

/** 退出登录 */
function login_logout_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/login/logout',
    opts: opts
  });
}

export {
  warehouse_add_post,
  warehouse_delete_delete,
  warehouse_export_get,
  warehouse_import_post,
  warehouse_list_get,
  warehouse_update_patch,
  login_me_get,
  user_add_post,
  user_delete_id_delete,
  user_get_id_get,
  user_group_list_get,
  user_import_post,
  user_list_get,
  user_update_id_patch,
  log_clear_delete,
  log_list_get,
  login_login_post,
  login_logout_delete
};
