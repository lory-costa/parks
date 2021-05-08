import { combineReducers } from 'redux'

import parks from './parks'
import user from './user'
import filter from './filter'

export default combineReducers({
  parks,
  user,
  filter
})
