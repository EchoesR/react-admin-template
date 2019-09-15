import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import './index.less'
import connect from '@/utils/connect'
const Item = Breadcrumb.Item
@connect
class BreadCrumbs extends React.Component {
  render() {
    let { breadCrumbs } = this.props.state
    return (
      <Breadcrumb className="breadCrumbs">
        {breadCrumbs.map((route, index) => {
          return index === breadCrumbs.length - 1 ? <Item key={route.path}>{route.name}</Item> :
            (<Item key={route.path}><Link className="breadCrumb-link" to={route.path}>{route.name}</Link></Item>)
        })}
      </Breadcrumb>
    )
  }
}
export default BreadCrumbs