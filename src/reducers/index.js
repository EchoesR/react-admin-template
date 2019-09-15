import { combineReducers } from 'redux'
import * as user from './user'
import * as app from './app'

// //redux todo
// import todo from 'views/Knowledge/Redux/reducers'

export default combineReducers({
  ...app,
  ...user
})
