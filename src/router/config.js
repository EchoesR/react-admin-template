// react-router-config
import LoadableComponent from '@/utils/LoadableComponent'
const _import_views = (path) => LoadableComponent(() => import(`@/views/${path}`))
// 需要权限访问的路由
export const asyncRouterMap = [
  {
    path: '/editor',
    login: true,
    layout: true,
    icon: 'edit',
    title: '编辑器',
    roles: ['editor'],
    redirect: '/editor/markdown',
    children: [
      { path: '/editor/markdown', component: _import_views('Editor/Markdown'), roles: ['editor'], title: 'Markdown'},
      { path: '/editor/trch', component: _import_views('Editor/Trch'), roles: ['editor'], title: 'Trch'}
    ]
  },
  {
    path: '/user',
    login: true,
    layout: true,
    icon: 'user',
    title: '用户管理',
    roles: [
      'admin', 
      'user'
    ],
    redirect: '/user/list',
    children:[
      {
        path: '/user/list',
        component: _import_views('User/List'),
        roles: [
          'admin', 
          'user'
        ],
        title: '用户列表'
      }
    ]
  }
]

/**
 * 不需要权限访问的路由
 */
export const constantRouterMap = [
  {
    path: '/login',
    login: false,
    hidden: true,
    title: '登陆',
    component: _import_views('Login')
  },
  {
    path: '/',
    exact: true,
    login: true,
    layout: true,
    icon: 'home',
    title: '首页',
    component: _import_views('Home')
  },
  {
    path: '/404',
    login: true,
    hidden: true,
    title: '404',
    component: _import_views('Error/NotFound')
  }
]

export const allRoutes = constantRouterMap.concat(asyncRouterMap)
export const routes = constantRouterMap
