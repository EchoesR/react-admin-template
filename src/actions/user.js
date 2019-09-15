import { createAction } from 'redux-actions'
import { setToken } from '@/utils/cookie'
import { login as loginApi, getUserInfo as getUserInfoApi } from '@/api/login'

// 登录
const saveToken = createAction('SAVE_TOKEN')
export const toLogin = (userName, password) => (dispatch) => {
  return new Promise( (resolve, reject) => {
    loginApi(userName, password).then((result) => {
      // console.log(result)
      let { data } = result
      dispatch(saveToken(data.token))
      setToken(data.token)
      resolve(data)
    }).catch((err) => { console.log(err) })
  })
}


// 获取用户信息
const createSaveUser = createAction('SAVE_USER')
export const getUserInfo = (token) => (dispatch) => {
    return new Promise( (resolve, reject) => {
      getUserInfoApi().then((result) => {
        let { data } = result
        dispatch(createSaveUser(data))
        resolve(data)
      }).catch((err) => { console.log(err) })
    })
}

// 清除token
export const clearToken = createAction('CLEAR_TOKEN')
//清除用户信息
export const clearUser = createAction('CLEAR_USER')


// routes
export const setRoutes = createAction('SET_ROUTES')