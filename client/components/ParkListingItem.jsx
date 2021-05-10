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
    <Link to={`/park-details/${parkListing.parkId}`} 
    className='border-gray-200 border-2 rounded-lg' 
    key={parkListing.id}>
      <img src={parkListing.image} alt="park image" className='object-cover h-36 w-full rounded-t-lg mb-2' />
      <p className='ml-2' >{parkListing.name}</p>
      <button onClick={(e) => deletePark(parkListing.id)}> 
        <img src="/images/trash.png" alt="delete icon" width='25' height='25'/> 
      </button>
    </Link>
  )
}
