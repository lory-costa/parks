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

  return <><li className='mt-2' key={parkListing.id}> <Link className='text-blue-500 underline' to={`/park-details/${parkListing.parkId}`}>{parkListing.name}</Link><button onClick={(e) => deletePark(parkListing.id)}> <img src="/images/trash.png" alt="delete icon" width='25' height='25'/> </button></li></>
}
