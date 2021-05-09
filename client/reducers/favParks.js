import { SET_FAV_PARKS } from '../actions/favParks'

const initialState = []

const favParks = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV_PARKS:
      return action.favParks
    default:
      return state
  }
}

export default favParks
