import { getFavParks, deleteFav, postToFav } from '../apis/favParks'

export const SET_FAV_PARKS = 'SET_FAV_PARKS'
export const DELETE_FAV_PARK = 'DELETE_FAV_PARK'
export const ADD_TO_FAV = 'ADD_TO_FAV'

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

// export function addToFav (id) {
//   return (dispatch) => {
//     return postToFav(id)
//       .then(() => {
//         dispatch(fetchFavParks(id))
//         return null
//       })
//   }
// }

// export function addFav (id) {
//   return {
//     type: ADD_TO_FAV,
//     id: id
//   }
// }
