import React from 'react'
import { Icon } from 'antd'
import './index.less'
import connect from '@/utils/connect'

@connect
class Hamburger extends React.Component {
  render() {
    return (
      <div className="hamburger-wrap">
        <Icon type={this.props.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.changeCollapsed} className="hamburger" />
      </div>
    )
  }
}

export default Hamburger