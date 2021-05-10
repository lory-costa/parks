import { SET_FAV_PARKS, DELETE_FAV_PARK, ADD_FAV_PARK } from '../actions/favParks'

const initialState = []

const favParks = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV_PARKS:
      return action.favParks

    case DELETE_FAV_PARK:
      return state.filter(favPark => favPark.id !== action.id)

    case ADD_FAV_PARK:
      return [...state, action.favPark]

    default:
      return state
  }
}

export default favParks
