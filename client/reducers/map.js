import { SET_MAP } from '../actions/map'

const initialState = []

const comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return action.map
    // case SET_FILTER:
    //   return action.filter
    default:
      return state
  }
}

export default comments
