import { getRating } from '../apis/rating'

export const SET_RATING = 'SET_RATING'

export function setRating (rating) {
  return {
    type: SET_RATING,
    rating
  }
}

export function fetchRating (dispatch, parkId) {
  return getRating(parkId)
    .then((result) => {
      dispatch(setRating(result))
      return null
    })
}
