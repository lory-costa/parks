import React from 'react'
import ReactStars from 'react-rating-stars-component'

function Comments (props) {
  const comments = props.comments
  return (
    <div className='mt-8 mx-14'>
      <h3 className='text-xl mb-4 text-green-700'>Comments</h3>
      <ul>
        {comments.map(comment => (
          <div>
            <div className='flex flex-col lg:flex-row' >
              <h4 className='text-lg mr-4'>{comment.userId}</h4>
              <ReactStars
                edit={false}
                size={20}
                value={4}
                activeColor="#ffd700"
              />
            </div>
            <p className='mb-3' >{comment.comment}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Comments
