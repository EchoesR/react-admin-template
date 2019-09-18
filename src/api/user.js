export const getUserList = (name, status, currentPage, pageSize) => {
  console.log('name:',name, 'status:', status, 'currentPage:', currentPage, 'pageSize:', pageSize)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: [
          {
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },
          {
            name: '李四',
            age: 19,
            address: '山东省德州市'
          },{
            name: '王五',
            age: 21,
            address: '山东省济南市'
          },{
            name: '赵四',
            age: 20,
            address: '山东省青岛市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
            name: '张三',
            age: 15,
            address: '山东省日照市'
          },{
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