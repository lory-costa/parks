import ReactStars from "react-rating-stars-component";
import React from "react";

function RatingChanged (newRating) {
  console.log(newRating);
  
  return(
    <div>
    <ReactStars
      count={5}
      onChange={RatingChanged}
      size={24}
      activeColor="#ffd700"
    />
    </div> 
  )
}

export default RatingChanged