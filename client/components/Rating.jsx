import ReactStars from 'react-rating-stars-component'
import React from 'react'

function RatingChanged (newRating) {
  return (
    <div>
      <ReactStars
        // count={5}
        // onChange={RatingChanged}
        edit={false}
        value={3}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  )
}

export default RatingChanged
