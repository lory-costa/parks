import React from 'react'
import { Link } from 'react-router-dom'
import { deleteFavPark } from '../actions/favParks'
import { deleteToVisitPark } from '../actions/toVisit'
import { useDispatch } from 'react-redux'

export default function ParkListingItem ({ parkListing, type }) {
  const dispatch = useDispatch()
  
  function deletePark (id) {
    if (type === 'favPark') {
      deleteFavPark(dispatch, id)
    } else {
      deleteToVisitPark(dispatch, id)
    }
  }

  return ( 
    <div 
    className='border-gray-200 border-2 rounded-lg' 
    key={parkListing.id}>
      <Link to={`/park-details/${parkListing.parkId}`}>
        <img src={parkListing.image} alt="park image" className='object-cover h-36 w-full rounded-t-lg mb-2' />
      </Link>
      <p className='ml-2' >{parkListing.name}</p>
      <div className='text-right mr-2 mt-1 mb-1'>
        <button onClick={(e) => deletePark(parkListing.id)}> 
          <img src="/icons/heart-filled.png" alt="Remove Park" width='20'/> 
        </button>
      </div>
    </div>
  )
}
