import { combineReducers } from 'redux'

import parks from './parks'
import user from './user'

export default combineReducers({
  parks,
  user
})
