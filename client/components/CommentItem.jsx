import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function CommentItem ({ userComment }) {
  const { userName, comment, rating } = userComment
  return <div>
    <div className='flex flex-col lg:flex-row' >
      <h4 className='text-lg mr-4'>{userName}</h4>
      <ReactStars
        edit={false}
        size={14}
        value={rating}
        color='#BBB'
        activeColor='#ffd700'
      />
    </div>
    <p>{comment}</p>
  </div >
}
