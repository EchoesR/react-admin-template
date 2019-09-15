import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import MainComponents from './main'


export default () => (
  <HashRouter>
    <Route path="/" component={MainComponents} />
  </HashRouter>
)