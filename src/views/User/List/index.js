import React, { Component } from 'react'
import { Card, Input, Button, Select, Table, Divider, message } from 'antd'
import IForm from '_c/IForm'
import IPagination from '_c/IPagination'
import EditUser from '../EditUser'
import AddUser from '../AddUser'
import { getUserList as getUserListApi, deleteUser as deleteUserApi } from '@/api/user'

const { Option } = Select
const filterForm = {
  layout: "inline" 
}


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
    this.filterItems = [
      {
        item: {
          key: 'name',
          label: '姓名',
          required: false,
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
          required: false,
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
      },
      {
        item: {
          key: 'search',
          required: false,
          component: (
            <Button type="primary" htmlType="submit">查询</Button>
          )
        }
      },
      {
        item: {
          key: 'action',
          required: false,
          component: (
            <AddUser onSuccess={() => this.getUsers()}  />
          )
        }
      }
    ]
    this.handleSearch = this.handleSearch.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  columns = [
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
      render: (value, row, index) => {
        let { id } = row
        return <span>
          <Button type="link">查看</Button>
          <EditUser editId={id} onEditSuccess={() => this.getUsers()} />
          <Divider type="vertical" />
          <Button type="link" onClick={() => this.handleDetete(id)}>删除</Button>
        </span>
      }
    }
  ]

  handleDetete(id) {
    deleteUserApi(id).then((result) => {
      message.success('删除成功!')
      console.log(result)
    }).catch((err) => { console.log(err) });
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
            <IForm formOptions={ filterForm } formItems={this.filterItems} onSubmit={this.handleSearch} wrappedComponentRef={(filterForm) => this.filterForm = filterForm} >
            </IForm>
            
          </Card>
          <Card className="card-panel">
            <Table columns={this.columns} dataSource={userList} rowSelection={rowSelection} pagination={false}></Table>
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
