import React from 'react'
import NProgress from 'nprogress'
export default (loadComponent) => (
  class AsyncComponent extends React.Component {
    
    state = {
      Component: null,
    }

    componentDidMount() {
      if (this.state.Component !== null) {
        NProgress.done()
        return
      }
      
      loadComponent().then((result) => {
        const {default: Component} = result
        this.setState({ Component })
      }).catch((err) => {
        console.error(`Cannot load component in <AsyncComponent />`);
        throw err
      }).finally(() => {
        NProgress.done()
        console.log('AsyncComponent----componentDidMount')
      })
      
    }

    componentDidUpdate() {
      NProgress.done()
      console.log('AsyncComponent----componentDidUpdate')
    }

    render() {
      const { Component } = this.state
      return (Component) ? <Component {...this.props} /> : null
    }
  }
)
