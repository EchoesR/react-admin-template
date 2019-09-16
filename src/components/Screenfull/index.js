import React from 'react'
import { message, Icon } from 'antd'
import screenfull from 'screenfull'
import './index.less'
export default class extends React.Component {
  click = () => {
    if (screenfull.enabled) {
      message.error('you browser can not work')
      return false
    }
    screenfull.toggle()
  }
  render() {
    return (
      <div className="fullscreen-wrap">
        <Icon type="fullscreen" onClick={ this.click } />
      </div>
    )
  }
}