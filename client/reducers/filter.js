// import { getUser } from '../auth-utils'
import { SET_FILTER, CLEAR_FILTER } from '../actions/filter'

const filter = ['']

export default function user (state = filter, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    case CLEAR_FILTER:
      return filter
    default:
      return state
  }
}
