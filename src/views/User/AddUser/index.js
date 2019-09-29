import React, { Component } from 'react'
import { Modal, Button, message } from 'antd'
import EForm from '../EForm'
import { addUser as addUserApi } from '@/api/user'

export default class AddUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      visible: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleAdd() {
    this.setState({
      visible: true
    })
  }
  handleSave() {
    const { form } = this.formInst.userForm.props
    form.validateFields((err, values) => {
      if (err) {
        message.error('请填写相关项目!')
        return
      }
      let formData = form.getFieldsValue()
      addUserApi(formData.name, formData.age, formData.address).then((result) => {
        this.setState({
          visible: false
        })
        message.success('添加成功!')
        form.resetFields()
        this.props.onSuccess()
      }).catch((err) => { console.log(err) })
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  render() {
    let { visible } = this.state
    return (
      <>
        <Button type="primary" icon="user-add" onClick={this.handleAdd}>添加用户</Button>
        <Modal
          title="添加用户"
          visible={visible}
          onOk={this.handleSave}
          onCancel={this.handleCancel}
        >
          <EForm initialData={{}} ref={(form) => this.formInst = form} />
        </Modal>
      </>
    )
  }
}
