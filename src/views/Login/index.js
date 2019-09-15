import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Icon, message } from 'antd'
import connect from '@/utils/connect'
import './index.less'
import { getToken } from '@/utils/cookie'



const { Item: FormItem } = Form

@connect
class Login extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    let { form, toLogin } = this.props
    form.validateFields((err, values) => {
      if (err) {
        message.error('请填写相关项目!')
        return
      }
      let { userName, password } = values
      toLogin(userName, password).then((user) => {
        this.props.history.push('/')
      }).catch((err) => { console.log(err) })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    if (getToken()) {
      return <Redirect to='/'/>
    }
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <h1 className="title">系统登录</h1>
          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit} className="fw">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({})(Login)
