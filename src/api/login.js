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
}


export const getUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}