import { getComments, postComment, deleteComment } from '../apis/comments'

export const SET_COMMENTS = 'SET_COMMENTS'

export function setComments (comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function fetchComments (dispatch, parkId) {
  return getComments(parkId)
    .then((result) => {
      dispatch(setComments(result))
      return null
    })
}

export function addComment (dispatch, comment, parkId, userName, rating) {
  return postComment(comment, parkId, userName, rating)
    .then(() => {
      fetchComments(dispatch, parkId)
      return null
    })
}

export function deleteParkComment (dispatch, id, parkId) {
  return deleteComment(id)
    .then(() => {
      fetchComments(dispatch, parkId)
      return null
    })
}
