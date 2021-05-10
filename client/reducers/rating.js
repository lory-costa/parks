import { SET_RATING } from '../actions/rating'

const initialState = []

const rating = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      return action.rating

    default:
      return state
  }
}

export default rating
