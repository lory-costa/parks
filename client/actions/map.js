import { getPark } from '../apis/map'

export const SET_MAP = 'SET_MAP'

export function setMap (map) {
  return {
    type: SET_MAP,
    map
  }
}

export function fetchMap () {
  return (dispatch) => {
    return getPark()
      .then((result) => {
        dispatch(setMap(result))
        return null
      })
  }
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
