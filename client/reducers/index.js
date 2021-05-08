import { combineReducers } from 'redux'

import parks from './parks'
import comments from './comments'
import user from './user'

export default combineReducers({
  parks,
  comments,
  user
})
