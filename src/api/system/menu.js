import request from '../../utils/request'

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: '/api/system/menu/list',
    method: 'get',
    params: query
  })
}

// 查询菜单下拉树结构
export function menuTreeSelect() {
  return request({
    url: '/api/system/menu/menuTreeSelect',
    method: 'get'
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/system/menu/' + menuId,
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeSelect(roleId) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}
