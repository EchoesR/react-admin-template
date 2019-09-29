import React, { Component } from 'react'
import { Input } from 'antd'
import IForm from '_c/IForm'

const { TextArea } = Input


const formItemLayout = {
  labelCol: {
    span: 3
  },
  wrapperCol: {
    span: 21
  },
};



export default class EForm extends Component {

  render() {
    let { initialData } = this.props
    const formItems = [
      {
        item: {
          key: 'name',
          label: '姓名',
          options: {
            initialValue: initialData.name || ''
          },
          rules: [
            { required: true, message: '请输入姓名', }
          ],
          component: (
            <Input placeholder="请输入姓名" />
          )
        }
      },
      {
        item: {
          key: 'age',
          label: '年龄',
          options: {
            initialValue: initialData.age || ''
          },
          rules: [
            { required: true, message: '请输入年龄', }
          ],
          component: (
            <Input placeholder="请输入年龄" type="number" />
          )
        }
      },
      {
        item: {
          key: 'address',
          label: '地址',
          options: {
            initialValue: initialData.address || ''
          },
          component: (
            <TextArea placeholder="地址" />
          )
        }
      }
    ]
    return (
      <IForm formOptions={formItemLayout} formItems={formItems} wrappedComponentRef={(userForm) => this.userForm = userForm}></IForm>
    )
  }
}
