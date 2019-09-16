import React from 'react'
import SideBar from './Sidebar'
import BreadCrumbs from './BreadCrumbs'
// import TabViews from './TabViews'
import Hamburger from './Hamburger'
import Account from './Account'
import Screenfull from '_c/Screenfull'
import './index.less'
import connect from '@/utils/connect'
@connect
class Layout extends React.Component {
  render() {
    const { children, state } = this.props
    return (
      <>
        <SideBar />
        <div id="container" className={state.collapsed ? 'collapsed' : ''}>
          <header className="layout-header">
            <div className="layout-header-bar">
              <Hamburger/>
              <BreadCrumbs />
              
              <Account />
              <Screenfull />
            </div>
            {/* <div className="layout-header-tabs"><TabViews /></div> */}
          </header>
          <main className="app-main">
            {children}
          </main>
        </div>
      </>
    )
  }
}

export default Layout
