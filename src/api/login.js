// import request from '@/utils/request'

export const login = (userName, password) => {
  // return request({
  //   url: '/login',
  //   method: 'GET',
  //   params: {
  //     userName,
  //     password
  //   }
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "code": 0,
        "data": {
          "token": "kksldf45646565dd12f"
        }
      })
    }, 1000)
  })
}


export const getUserInfo = () => {
  // return request({
  //   url: '/user/info',
  //   method: 'GET'
  // })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "code": 0,
        "data": {
          "id": 1,
          "userName": 100001,
          "name": "蔡娟",
          "roles": [
            "admin",
            "editor"
          ]
        }
      })
    }, 1000);
  })
}