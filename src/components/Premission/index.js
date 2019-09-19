import React, { Component } from 'react'
import { connect } from 'react-redux'


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}


/**
 * 判断组件登陆者是否有权限查看此组件
 * @param {Array} roles 查看此组件所需要的权限
 */
export default function (roles) {
  return function (WrappedComponent) {

    @connect((state) => {
       return{
        user: state.user,
      }
    })
    class Premission extends Component {

      hasPremission() {
        console.log(this.props)
        let userRoles  = this.props.user && this.props.user.roles
        return Array.isArray(roles) && userRoles && roles.some((role) => userRoles.includes(role))
      }
      
      render() {
        let { dispatch, ...otherProps } = this.props
        return (
          <>
           {
             this.hasPremission() ? <WrappedComponent { ...otherProps } /> : null
           }
          </>
        )
      }
    }
    Premission.displayName = `Premission(${getDisplayName(WrappedComponent)})`
    return Premission
  }
}