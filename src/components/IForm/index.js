import React, { Component } from 'react'
import { Form, Input, message } from 'antd'
const { Item: FormItem } = Form


const renderFormItems = ({ item, otherOptions, getFieldDecorator }) => {
  const { label, key, required = true, component, options = {}, rules } = item
  return (
    <FormItem key={key} label={label} { ...otherOptions } >
      {getFieldDecorator(key, {
        ...options,
        rules: rules || [{ required, message: `${label}不能为空` }],
      })(component || <Input />)}
    </FormItem>
  )
}

class IForm extends Component {
  defaultFormOptions = {

  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        message.error('请填写相关项目！')
        return
      }
      this.props.onSubmit && this.props.onSubmit(values)
    })
  }

  render() {
    const { formItems, formOptions, form: { getFieldDecorator } } = this.props
    let formProps = { ...this.defaultFormOptions, ...formOptions}
    return (
      <Form { ...formProps } onSubmit={this.handleSubmit}>
        {
          formItems.map((formItem) => {
            const { item, ...otherOptions } = formItem
            return renderFormItems({ item, otherOptions, getFieldDecorator })
          })
        }
      </Form>
    )
  }
}

export default Form.create({})(IForm)