import { getFavParks } from '../apis/favParks'

export const SET_FAV_PARKS = 'SET_FAV_PARKS'

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
      return null
    })
}

// export function addComment (comment, parkId, userName, rating) {
//   return (dispatch) => {
//     return postComment(comment, parkId, userName, rating)
//       .then(() => {
//         dispatch(fetchComments(parkId))
//         return null
//       })
//   }
// }
