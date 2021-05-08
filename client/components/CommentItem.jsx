import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function CommentItem ({ userComment }) {
  const { userId, comment, rating } = userComment
  return <div>
    <div className='flex flex-col lg:flex-row' >
      <h4 className='text-lg mr-4'>{userId}</h4>
      <ReactStars
        edit={false}
        size={20}
        value={rating}
        activeColor="#ffd700"
      />
    </div>
    <p className='mb-3' >{comment}</p>
  </div >
}
