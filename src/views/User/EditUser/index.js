import React, { Component } from 'react'
import { Modal, Button, message } from 'antd'
import EForm from '../EForm'
import { getUser as getUserApi, saveUser as saveUserApi } from '@/api/user'



export default class Editor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      user: {}
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleCancelEdit = this.handleCancelEdit.bind(this)
  }
  
  
  getUser() {
    this.setState({
      visible: true
    })
    this.editId = this.props.editId
    getUserApi(this.editId).then((result) => {
      console.log(result)
      let { data } = result
      this.setState({
        user: data
      })
    }).catch((err) => { console.log(err) })
  }


  handleSaveEdit() {
    const { form } = this.formInst.userForm.props
    form.validateFields((err, values) => {
      if (err) {
        message.error('请填写相关项目!')
        return
      }
      let formData = form.getFieldsValue()
      console.log(this.editId)
      saveUserApi(this.editId, formData.name, formData.age, formData.address).then((result) => {
        this.handleHide()
        message.success('保存成功!')
        this.props.onEditSuccess()
      }).catch((err) => { console.log(err) })
    })
  }

  handleCancelEdit() {
    
    this.formInst.userForm.props.form.resetFields()
    this.handleHide()
    
  }

  handleHide() {
    this.setState({
      visible: false
    })
  }

  handleEdit() {
    this.getUser()
  }

  render() {
    let { user, visible } = this.state
    return (
      <>
      <Button type="link" onClick={this.handleEdit}>修改</Button>
      <Modal
        title="修改用户信息"
        visible={visible}
        onOk={this.handleSaveEdit}
        onCancel={this.handleCancelEdit}
      >
        <EForm initialData={user} ref={(form) => this.formInst = form} />
      </Modal>
      </>
    )
  }
}
