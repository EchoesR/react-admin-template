import { handleActions } from 'redux-actions'
import { getToken } from '@/utils/cookie'
import { constantRouterMap } from '@/router/config'

export const user = handleActions({
  SAVE_USER: (state, action) => {
    return action.payload
  },
  CLEAR_USER: state => null
}, null) 


export const token = handleActions({
  SAVE_TOKEN: (state, action) => {
    return action.payload
  },
  CLEAR_TOKEN: (state) => ''
}, getToken() || '')

/*routes*/
export const routes = handleActions({
  SET_ROUTES: (state, action) => [...constantRouterMap,...action.payload]
}, constantRouterMap)