import request from '../../utils/request'

// 查询部门列表
export function listDept(data) {
  return request({
    url: 'api/system/dept/list',
    method: 'post',
    data: data
  })
}

// 查询部门下拉树结构
export function treeSelect() {
  return request({
    url: '/api/system/dept/treeSelect',
    method: 'get'
  })
}

// 根据角色ID查询部门树结构
export function roleDeptTreeSelect(roleId) {
  return request({
    url: '/system/dept/roleDeptTreeSelect/' + roleId,
    method: 'get'
  })
}

// 查询部门下拉树结构
export function deptTreeSelect() {
  return request({
    url: '/system/dept/deptTreeSelect',
    method: 'get'
  })
}
