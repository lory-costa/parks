import React from 'react'
import { deleteFavPark } from '../actions/favParks'
import { useDispatch } from 'react-redux'

export default function ParkListingItem ({ parkListing }) {
  const dispatch = useDispatch()
  function favParksDelete (id) {
    deleteFavPark(dispatch, id)
  }

  return <><li key={parkListing.id}>{parkListing.name} <button onClick={(e) => favParksDelete(parkListing.id)}>Delete</button></li></>
}
