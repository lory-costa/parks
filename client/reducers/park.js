import { SET_PARK } from '../actions/park'

const initialState = {
  approved: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARK :
      return action.park
    default:
      return state
  }
}

export default reducer
