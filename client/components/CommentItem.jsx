import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function CommentItem ({ userComment }) {
  const { userId, comment } = userComment
  return <div className='border-b mb-4' >
    <div className='flex flex-col lg:flex-row' >
      <h4 className='text-lg mr-4'>{userId}</h4>
      <ReactStars
        edit={false}
        size={14}
        value={4}
        color='#BBB'
        activeColor='#ffd700'
      />
    </div>
    <p>{comment}</p>
  </div >
}
