import React, { Component } from 'react'
import { Form, Input } from 'antd'
const { Item: FormItem } = Form


const renderFormItem = ({ item, otherOptions, getFieldDecorator }) => {
  const { label, key, required, component, options = {}, rules } = item
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

  render() {
    const { formItems, formOptions, form: { getFieldDecorator }, children } = this.props
    let formProps = { ...this.defaultFormOptions, ...formOptions}
    return (
      <Form { ...formProps }>
        {
          formItems.map((formItem) => {
            const { item, ...otherOptions } = formItem
            return renderFormItem({ item, otherOptions, getFieldDecorator })
          })
        }
        {
          children
        }
      </Form>
    )
  }
}

export default Form.create({})(IForm)