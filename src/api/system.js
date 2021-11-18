import {req} from './axiosFun'

/**
 * 角色管理
 **/
// 角色管理-获取角色列表
export const roleList = (params) => {
  return req('get', '/api/system/role/getRoleList')
}
