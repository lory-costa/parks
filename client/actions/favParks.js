import { getFavParks, deleteFav } from '../apis/favParks'

export const SET_FAV_PARKS = 'SET_FAV_PARKS'
export const DELETE_FAV_PARK = 'DELETE_FAV_PARK'

export function setFavParks (favParks) {
  return {
    type: SET_FAV_PARKS,
    favParks
  }
}

export function delFavParks (id) {
  return {
    type: DELETE_FAV_PARK,
    id
  }
}

export function fetchFavParks (dispatch, id) {
  return getFavParks(id)
    .then((result) => {
      dispatch(setFavParks(result))
      return result
    })
}

export function deleteFavPark (dispatch, id, userId) {
  console.log(id, userId)
  return deleteFav(id)
    .then(() => {
      dispatch(delFavParks(id))
      return null
    })
}
