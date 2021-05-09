import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from '../actions/filter'

const filter = []

export default function user (state = filter, action) {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.filter]
    case REMOVE_FILTER:
      return state.filter(item => item !== action.filter)
    case CLEAR_FILTER:
      return filter
    default:
      return state
  }
}
