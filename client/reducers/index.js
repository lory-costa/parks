import { combineReducers } from 'redux'

import user from './user'
import parks from './parks'
import filter from './filter'
import comments from './comments'

export default combineReducers({
  user,
  parks,
  filter,
  comments
})
