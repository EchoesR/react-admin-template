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
      name: '编辑器',
      role: ['editor'],
      redirect: '/editor/markdown',
      children: [
        { path: '/editor/markdown', component: _import_views('Editor/Markdown'), name: 'Markdown'},
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
    name: '登陆',
    component: _import_views('Login')
  },
  {
    path: '/',
    exact: true,
    login: true,
    layout: true,
    icon: 'user',
    name: '首页',
    component: _import_views('Home')
  },
  {
    path: '/404',
    login: true,
    hidden: true,
    name: '404',
    component: _import_views('Error/NotFound')
  }
]

export const allRoutes = constantRouterMap.concat(asyncRouterMap)
export const routes = constantRouterMap
