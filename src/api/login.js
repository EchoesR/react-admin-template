import request from '@/utils/request'

export const login = (userName, password) => {
  return request({
    url: '/login',
    method: 'GET',
    params: {
      userName,
      password
    }
  })
  // return new Promise((resolve) => {
  //   setTimeout(() => {

  //   }, 1000)
  // })
}


export const getUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}