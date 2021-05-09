import { SET_MAP } from '../actions/map'

const initialState = []

const map = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return action.map
    default:
      return state
  }
}

export default map
