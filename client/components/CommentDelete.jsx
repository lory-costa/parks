import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments, deleteParkComment } from '../actions/comments'

export default function CommentDelete ({ userComment, parkId }) {
  const { id } = userComment
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)
  const dispatch = useDispatch()

  if (!isAdmin) {
    return <></>
  }

  return <button onClick={() => deleteParkComment(dispatch, id, parkId)}>X</button>
}
