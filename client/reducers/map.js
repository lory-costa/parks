import { SET_MAP, FILTER_MAP, REMOVE_FILTER } from '../actions/map'

const initialState = []

const map = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return action.map
    case FILTER_MAP:
      return state.filter(park => park.[action.filter] !== 0)
    case REMOVE_FILTER:
      return state
    default:
      return state
  }
}

export default map
