import React from 'react'
import CommentItem from './CommentItem'

function Comments (props) {
  const comments = props.comments
  return (
    <div className='mt-8 mx-14'>
      <h3 className='text-xl mb-4 text-green-700'>Comments</h3>
      <ul>
        {comments.map(comment => (
          <CommentItem key={comment.id} userComment={comment} />
        ))}
      </ul>
    </div>
  )
}

export default Comments
