import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown, Avatar } from 'antd'
import connect from '@/utils/connect'
import './index.less'
import { removeToken } from '@/utils/cookie'
const Item = Menu.Item
const menu = (user = {}, history, clearUser, clearToken) => (
  <Menu>
    <Item>{user && user.userName}</Item>
    <Item><a href="https://github.com/cd-dongzi">Github</a></Item>
    <Item><span onClick={e => {
      removeToken()
      clearToken()
      clearUser()
      history.push('/login')
    }}>退出</span></Item>
  </Menu>
)
@connect
@withRouter
class Account extends React.Component {
  render() {
    let { state: { user }, history, clearUser, clearToken } = this.props
    return (
      <div className="account-wrap">
        <Dropdown overlay={menu(user, history, clearUser, clearToken)} placement="bottomLeft">
          <Avatar shape="square" icon="user" />
        </Dropdown>
      </div>
    )
  }
}
export default Account