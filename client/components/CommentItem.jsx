import React from 'react'
import ReactStars from 'react-rating-stars-component'
import CommentDelete from './CommentDelete'

export default function CommentItem ({ userComment, parkId }) {
  const { userName, comment, rating } = userComment
  return <div>
    <div className='flex flex-row' >
      <h4 className='text-lg text-green-700 mr-4'>{userName}</h4>
      <ReactStars
        edit={false}
        size={18}
        value={rating}
        color='#BBB'
        activeColor='#ffd700'
      />
    </div>
    <div className ='flex flex-row border-b-2 mb-4 justify-between pb-4'>
      <p>{comment}</p>
      <CommentDelete key={userComment.user} userComment={userComment} parkId={parkId}/>
    </div>
  </div >
}
