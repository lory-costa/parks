import { combineReducers } from 'redux'

import user from './user'
import map from './map'
import parks from './parks'
import filter from './filter'
import comments from './comments'

export default combineReducers({
  user,
  map,
  parks,
  filter,
  comments
})
