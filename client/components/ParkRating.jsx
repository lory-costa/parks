import ReactStars from 'react-rating-stars-component'
import React from 'react'

function ParkRating ({ rating }) {
  if (rating.isNaN) {
    rating = 0
  }

  return (
    <div>
      <ReactStars
        key={rating}
        edit={false}
        isHalf={true}
        value={rating}
        count={5}
        size={24}
        color='#BBB'
        activeColor="#ffd700"
      />
    </div>
  )
}

export default ParkRating
