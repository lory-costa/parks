import { getFavParks, deleteFav, AddFav } from '../apis/favParks'

export const SET_FAV_PARKS = 'SET_FAV_PARKS'
export const DELETE_FAV_PARK = 'DELETE_FAV_PARK'
export const ADD_FAV_PARK = 'ADD_FAV_PARK'

export function setFavParks (favParks) {
  console.log(favParks)
  return {
    type: SET_FAV_PARKS,
    favParks
  }
}

export function fetchFavParks (dispatch, id) {
  return getFavParks(id)
    .then((result) => {
      dispatch(setFavParks(result))
      return result
    })
}

export function delFavParks (id) {
  return {
    type: DELETE_FAV_PARK,
    id
  }
}

export function deleteFavPark (dispatch, id) {
  return deleteFav(id)
    .then(() => {
      dispatch(delFavParks(id))
      return null
    })
}

export function addFavParks (userId, parkId) {
  return {
    type: ADD_FAV_PARK,
    favPark: {
      userId: userId,
      parkId: parkId
    }
  }
}

export function addToFavParks (dispatch, userId, parkId) {
  return AddFav(userId, parkId)
    .then(() => {
      dispatch(addFavParks(userId, parkId))
      return null
    })
}
