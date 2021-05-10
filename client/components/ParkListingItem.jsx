import React from 'react'
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

  return <><li key={parkListing.id}>{parkListing.name} <button onClick={(e) => deletePark(parkListing.id)}>Delete</button></li></>
}
