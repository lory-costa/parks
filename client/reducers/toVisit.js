import { SET_TO_VISIT, CLEAR_TO_VISIT } from '../actions/toVisit'

const initialState = []

const toVisit = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_VISIT:
      return action.toVisit
      
    case CLEAR_TO_VISIT:
      return null

    default:
      return state
  }
}

export default toVisit
