import React, { Component } from 'react'
import { Form, Input } from 'antd'


const renderFormItem = ({ item, layout, getFieldDecorator }) => {
  const { label, key, required, component, options = {}, rules } = item
  return (
    <FormItem key={key} label={label} {...layout}>
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

  render() {
    const { formItems, formOptions, form: { getFieldDecorator } } = this.props
    let formProps = { ...this.defaultFormOptions, ...formOptions}
    return (
      <Form { ...formProps }>
        {formItems.map(item => renderFormItem({ item, layout, getFieldDecorator }))}
      </Form>
    )
  }
}

export default Form.create({})(IForm)