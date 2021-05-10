import { SET_FAV_PARKS, DELETE_FAV_PARK } from '../actions/favParks'

const initialState = []

const favParks = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV_PARKS:
      return action.favParks

    case DELETE_FAV_PARK:
      return state.filter(favPark => favPark.id !== action.id)

    // case ADD_TO_FAV:
    //   const newState = [...state]
    //   const fav = newState.find(favPark => favPark.id === action.id)
    //   if (fav) { fav }
    //   else {
    //     newState.push({ id: action.id })
    //   }
    //   return newState

    default:
      return state
  }
}

export default favParks
