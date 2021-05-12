import { combineReducers } from 'redux'

import user from './user'
import map from './map'
import parks from './parks'
import filter from './filter'
import comments from './comments'
import favParks from './favParks'
import toVisit from './toVisit'

export default combineReducers({
  user,
  map,
  parks,
  filter,
  comments,
  favParks,
  toVisit
})
