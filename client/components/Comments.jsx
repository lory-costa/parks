import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-rating-stars-component'
import { addComment, fetchComments } from '../actions/comments'
import { useAuth0 } from '@auth0/auth0-react'

import CommentItem from './CommentItem'

function Comments (props) {
  const comments = useSelector(globalState => globalState.comments)
  const user = useSelector(globalState => globalState.user)
  const parkId = props.parkId
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState(0)
  const dispatch = useDispatch()
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    dispatch(fetchComments(parkId))
  }, [])

  const handleChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(newComment, parkId, user.name, newRating))
    setNewComment('')
  }

  const handleRatingChange = (rating) => {
    setNewRating(rating)
  }

  return (
    <div className='mt-8 mx-14'>
      <h3 className='text-xl mb-4 text-green-700'>Comments</h3>
      {isAuthenticated && <div className='bg-gray-100 mb-4 p-4 rounded' >
        <ReactStars
          count={5}
          onChange={handleRatingChange}
          size={24}
          color='#BBB'
          activeColor="#ffd700"
        />
        <div className='flex flex-col lg:flex-row justify-between items-center mt-2' >
          <input className='border rounded py-2 px-4 w-full' type="text" placeholder="Add a comment" value={newComment} onChange={handleChange} />
          <button className='border rounded py-2 px-4 mt-2 ml-0 lg:ml-2 lg:mt-0 bg-white' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      }
      <ul>
        {comments.map(comment => (
          <CommentItem key={comment.id} userComment={comment} />
        ))}
      </ul>
    </div>
  )
}

export default Comments
