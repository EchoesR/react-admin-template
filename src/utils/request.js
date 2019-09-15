import axios from 'axios'
import { getToken, removeToken } from './cookie'
import { message } from 'antd'
const instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5d7b4980fe3cb42ae532aa8c/react',
  timeout: 5000 // request timeout
})

const failHandle = (code, msg) => {
  switch(code) {
    case 401:             // token过期
      message.error(msg, 5)
      // 删除token跟社团id信息
      removeToken()
      setTimeout(() => {
        window.location.reload()
      }, 1500)
      break
    case 403:           // 无权限
      window.location.replace({
        path: '/403'
      })
      break
    case 404:         // 404
      window.location.replace({
        path: '/404'
      })
      break
    case 500:         // 未知异常
      message.error(msg, 5)
      break
    default:
      console.log('other code and msg:', code, msg)
  }
}

instance.interceptors.request.use((config) => {
  const token = getToken()
  token && (config.headers.Authorization = token)
  return config
})

instance.interceptors.response.use((res) => {
  let {data} = res
  if(data.code === 0){
    return Promise.resolve(data)
  }else{
    failHandle(data.code, data.msg)
    return Promise.reject(data.msg)
  }
}, (error) => {
  console.log('err' + error) // for debug
  message.error(error.message, 6)
  return Promise.reject(error)
})

export default instance