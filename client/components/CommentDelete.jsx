import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteParkComment } from '../actions/comments'

export default function CommentDelete ({ userComment, parkId }) {
  const { id } = userComment
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)
  const dispatch = useDispatch()

  if (!isAdmin) {
    return <></>
  }

  return <button onClick={() => deleteParkComment(dispatch, id, parkId)}><img src='/icons/delete.png' width ="20px" /></button>
}
