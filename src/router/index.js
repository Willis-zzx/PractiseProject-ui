import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 登录
import login from '@/views/login'
// index
import index from '@/views/index'
// user
import user from '@/views/system/user/user'
// 角色管理
import role from '@/views/system/role'
// 菜单管理
import menu from '@/views/system/menu'
// 组织架构
import organization from '../views/system/organization'

Vue.use(Router)

export const constantRoutes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
},
  {
    path: '/login',
    name: '登录',
    component: login
  }, {
    path: '/index',
    name: 'index',
    component: index,
    children: [{
      path: '/system/user',
      name: '用户管理',
      component: user,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/system/role',
      name: '角色',
      component: role
    }, {
      path: '/system/organization',
      name: '组织架构',
      component: organization
    }, {
      path: '/system/menu',
      name: '菜单管理',
      component: menu
    }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
