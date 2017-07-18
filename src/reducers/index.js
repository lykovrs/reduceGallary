// eslint-disable-next-line
import { combineReducers } from 'redux'
import page from './page'
import user from './user'

export default combineReducers({
  page,
  user
})