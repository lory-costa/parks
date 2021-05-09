import { getFavParks, deleteFav } from '../apis/favParks'

export const SET_FAV_PARKS = 'SET_FAV_PARKS'
export const DELETE_FAV_PARK = 'DELETE_FAV_PARK'

export function setFavParks (favParks) {
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

export function deleteFavPark (dispatch, id, userId) {
  console.log(id, userId)
  return deleteFav(id)
    .then(() => {
      dispatch(fetchFavParks(userId))
      return null
    })

  // return deleteFav(id)

  //   return (dispatch) => {
  //     console.log(id)
  //     return deleteFav(id)
  //       .then(() => {
  //         dispatch(fetchFavParks(userId))
  //         return null
  //       })
  //   }
  // }
}
