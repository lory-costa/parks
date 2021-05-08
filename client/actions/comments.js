import { getComments, postComment } from '../apis/comments'

export const SET_COMMENTS = 'SET_COMMENTS'

export function setComments (comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function fetchComments (parkId) {
  return (dispatch) => {
    return getComments(parkId)
      .then((result) => {
        dispatch(setComments(result))
        return null
      })
  }
}

export function addComment (comment, parkId, userId, rating) {
  return (dispatch) => {
    return postComment(comment, parkId, userId, rating)
      .then(() => {
        dispatch(fetchComments(parkId))
        return null
      })
  }
}
