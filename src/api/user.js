
export const getUserList = (name, status, currentPage, pageSize) => {
  console.log('name:',name, 'status:', status, 'currentPage:', currentPage, 'pageSize:', pageSize)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: [
          {
            id: 1,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },
          {
            id: 2,
            name: '李四',
            age: 19,
            address: '山东省德州市'
          },{
            id: 3,
            name: '王五',
            age: 21,
            address: '山东省济南市'
          },{
            id: 4,
            name: '赵四',
            age: 20,
            address: '山东省青岛市'
          },{
            id: 5,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 6,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 7,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 8,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 9,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 10,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            id: 11,
            name: '张三',
            age: 15,
            address: '山东省日照市'
          }
        ],
        page: {
          total: 20
        }
      })
    }, 1000);
  })
}


export const getUser = (id) => {
  console.log('getUser:', id)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          id: 1,
          name: '张三',
          age: 21,
          address: '山东省济南市'
        }
      })
    }, 500)
  })
}


export const addUser = (name, age, address) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {}
      })
    }, 500)
  })
}

export const saveUser = (id, name, age, address) => {
  console.log('saveUser:', id, name, age, address)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {}
      })
    }, 500);
  })
}

export const deleteUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {}
      })
    }, 500);
  })
}