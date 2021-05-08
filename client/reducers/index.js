import { combineReducers } from 'redux'

import parks from './parks'
import comments from './comments'

export default combineReducers({
  parks,
  comments
})
