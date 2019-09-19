import React, { Component } from 'react'
import { Card, Button } from 'antd'
import Premission from '_c/Premission'

const PremitButton = Premission(['user'])(Button)

export default class Premit extends Component {
  render() {
    return (
      <div>
        <Card title="权限">
          <PremitButton and="123" style={{marginRight: '15px'}}>只有权限为user的用户能看到</PremitButton>
          <Button type="primary">按钮</Button>
        </Card>
      </div>
    )
  }
}
