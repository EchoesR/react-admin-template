import React, { Component } from 'react'
import { Table, Button, Input } from 'antd'


function generateData(temp, count) {
  let res = []
  for(let i = 0; i < count; i++) {
    res.push({...temp, key: i, id: i})
  }
  return res
}


export default class Notices extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list: []
    }
    props.cacheLifecycles.didCache(this.componentDidCache)
    props.cacheLifecycles.didRecover(this.componentDidCRecover)
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        publishTime: '发布时间',
        dataIndex: 'publishTime',
      },
      {
        title: '内容',
        dataIndex: 'content',
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: (text, record) => {
          return <Button type="link" onClick={this.handleClick}>跳转</Button>
        }
      }
    ]
  }
  
  componentDidCache = () => {
    console.log('didCache')
  }

  componentDidCRecover = () => {
    console.log('didRecover')
  }

  componentDidMount() {
    // console.log(this.props)
    this.getNotices()
  }

  handleClick = () => {
    this.props.history.push({
      pathname: '/user/list'
    })
  }
  getNotices() {
    const list = generateData({ id: 1, key: 1, title: '标题', publishTime: '2019-10-5 18:32:00', content: '是是是是是所' }, 50)
    setTimeout(() => {
      this.setState({
        list
      })
    }, 1000)
  }

  render() {
    let { list } = this.state
    return (
      <div>
        <Input/>
        <Table columns={this.columns} dataSource={list} pagination={false}></Table>
      </div>
    )
  }
}
