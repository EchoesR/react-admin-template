import {allRoutes} from '@/router/config'

/*
    当前路径的路由信息
 */
export const filterRoutes = pathname => {
  let pathSnippets = pathname.split('/').filter(path => path)
  let paths = pathSnippets.map((path, index) => `/${pathSnippets.slice(0, index + 1).join('/')}`)
  let filter = (arr, index) => {
    if (index < paths.length) {
      let p = paths[index]
      index ++
      let route = arr.find(route => route.path === p)
      return route ? [route].concat(route.children ? filter(route.children, index) : []) : []
    }
    return []
  }
  return [allRoutes.find( route => route.path === '/')].concat(filter(allRoutes, 0))
}