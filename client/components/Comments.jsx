import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, fetchComments } from '../actions/comments'

import CommentItem from './CommentItem'
import Rating from './Rating'

function Comments (props) {
  const comments = useSelector(globalState => globalState.comments)
  const user = useSelector(globalState => globalState.user)
  const parkId = props.parkId
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments(parkId))
  }, [])

  const handleChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(newComment, parkId, user.id, 5)) // TODO: 1. Johann - Pass a real userId (this will be from auth0) 2.Lory - Pass a real rating from the react stars component
    setNewComment('')
  }

  return (
    <div className='mt-8 mx-14'>
      <h3 className='text-xl mb-4 text-green-700'>Comments</h3>
      <div className='bg-gray-100 mb-4 p-4 rounded' >
        <Rating />
        <div className='flex flex-col lg:flex-row justify-between items-center mt-2' >
          <input className='border rounded py-2 px-4 w-full' type="text" placeholder="Add a comment" value={newComment} onChange={handleChange} />
          <button className='border rounded py-2 px-4 mt-2 ml-0 lg:ml-2 lg:mt-0 bg-white' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {comments.map(comment => (
          <CommentItem key={comment.id} userComment={comment} />
        ))}
      </ul>
    </div>
  )
}

export default Comments
