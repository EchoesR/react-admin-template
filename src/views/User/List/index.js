import React, { Component } from 'react'
import { Card, Input, Button, Form, Select, Table, Divider } from 'antd'
import IForm from '_c/IForm'
import IPagination from '_c/IPagination'
import { getUserList as getUserListApi } from '@/api/user'

const { Option } = Select
const { Item: FormItem } = Form
const filterForm = {
  layout: "inline" 
}
const filterItems = [
  {
    item: {
      key: 'name',
      label: '姓名',
      options: {
        initialValue: ''
      },
      component: (
        <Input placeholder="请输入姓名" />
      )
    }
  },
  {
    item: {
      key: 'status',
      label: '状态',
      options: {
        initialValue: '1'
      },
      component: (
        <Select style={{width: '100px'}}>
          <Option value="1">正常</Option>
          <Option value="0">禁用</Option>
        </Select>
      )
    }
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => {
      return <span>
        <Button type="link">查看</Button>
        <Button type="link">修改</Button>
        <Divider type="vertical" />
        <Button type="link">删除</Button>
      </span>
    }
  }
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};


export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userList: [],
      total: 0,
      currentPage: 1,
      pageSize: 10
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  

  handleSearch() {
    console.log(this.filterForm.props.form.getFieldsValue())
    this.getUsers()
  }
  handlePageChange(currentPage, pageSize) {
    // console.log(page, pageSize)
    this.setState({
      currentPage,
      pageSize
    }, () => {
      this.getUsers()
    })
  }

  getUsers() {
    let { currentPage, pageSize } = this.state
    let { name, status } = this.filterForm.props.form.getFieldsValue()
    getUserListApi(name, status, currentPage, pageSize).then((result) => {
      let { data, page } = result
      this.setState({
        userList: data.map((item, index) => {
          return { ...item, key: index }
        }),
        total: page.total
      })
    }).catch((err) => { console.log(err) })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    let { userList, pageSize, currentPage, total } = this.state
    return (
      <div>
         <Card className="card-panel">
            <IForm formOptions={ filterForm } formItems={filterItems} wrappedComponentRef={(filterForm) => this.filterForm = filterForm} >
              <FormItem>
                <Button type="primary" onClick={this.handleSearch}>查询</Button>
              </FormItem>
            </IForm>
          </Card>
          <Card className="card-panel">
            <Table columns={columns} dataSource={userList} rowSelection={rowSelection} pagination={false}></Table>
            <IPagination
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
              pageSize={pageSize}
              total={total}
            />
          </Card>
      </div>
    )
  }
}
