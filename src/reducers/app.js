import { handleActions } from 'redux-actions'
import {filterRoutes} from '@/utils'

/*silde开关*/
export const collapsed = handleActions({
  CHANGE_COLLAPSED: state => {
      state = !state
      return state
  }
}, false)

/*侧边栏打开的位置*/
export const openKeys = handleActions({
  SET_OPENKEYS: (state, action) => {
    return action.payload
  }
}, [])

/*面包屑*/
export const breadCrumbs = handleActions({
    ADD_BREADCRUMBS: (state,action) => {
      return action.payload
    }
}, [])

/*tabViews*/
export const tabViews = handleActions({
    GET_TAB_VIEWS: state => state || [],
    ADD_TAB_VIEWS: (state, action) => {
      let {pathname} = action.payload
      let router = filterRoutes(pathname)
      let route = router.find(route => route.path === pathname)
      if (!route) return state
      let data = state.some( tab => tab.path === pathname) ? state : [...state, {
          path: route.path,
          name: route.name
      }]
      return data
    },
    DEL_TAB_VIEWS: (state, action) => {
    	let index = state.findIndex(tab => tab.path === action.payload.path)
	  	state.splice(index, 1)
      let data = [...state]
    	return data
    }
}, [])




