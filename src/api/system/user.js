import request from '../../utils/request'
import {praseStrEmpty} from '../../utils/general'

// 查询用户列表
export function listUser(params) {
  return request({
    url: '/api/system/user/list',
    method: 'get',
    params: params
  })
}

// 查询用户详细
export function getUser(userId) {
  return request({
    url: '/api/system/user/getUserById/' + praseStrEmpty(userId),
    method: 'get'
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/api/system/user/add',
    method: 'post',
    data: data
  })
}

// 更新用户信息
export function updateUser(data) {
  return request({
    url: '/api/system/user/edit',
    method: 'post',
    data: data
  })
}

// 删除用户
export function deleteUser(userId) {
  return request({
    url: '/api/system/user/' + userId,
    method: 'delete'
  })
}

// 导出用户
export function exportUser(query) {
  return request({
    url: '/api/system/user/export',
    method: 'get',
    params: query
  })
}

// 下载用户导入模板
export function importTemplate() {
  return request({
    url: '/api/system/user/importTemplate',
    method: 'get'
  })
}

// 用户密码重置
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return request({
    url: '/api/system/user/resetPwd',
    method: 'put',
    data: data
  })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/api/system/user/changeStatus',
    method: 'put',
    data: data
  })
}
