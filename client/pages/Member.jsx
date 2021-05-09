import React, { useEffect } from 'react'
import { fetchFavParks, deleteFavPark } from '../actions/favParks'
import { fetchToVisit } from '../actions/toVisit'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import AdminRedirect from '../pages/AdminRedirect'
import Header from '../components/Header'
import ParkListingItem from '../components/ParkListingItem'
import Footer from '../components/Footer'

function Member () {
  const { isAuthenticated } = useAuth0()
  const userId = useSelector(globalState => globalState.user.id)
  const favParks = useSelector(globalState => globalState.favParks)
  const toVisit = useSelector(globalState => globalState.toVisit)
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    fetchFavParks(dispatch, String(userId))
  }, [])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    fetchToVisit(dispatch, String(userId))
  }, [])

  if (!isAuthenticated) {
    return (
      <>
        <AdminRedirect />
      </>
    )
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Favourite Parks</h3>
        <ul>
          {favParks.map(favPark => < ParkListingItem key = {favPark.id} parkListing = {favPark} type ={'favPark'}/>)}
        </ul>
        <h3>To Visit Parks</h3>
        <ul>
          {toVisit.map(toVisitPark => < ParkListingItem key = {toVisitPark.id} parkListing = {toVisitPark} type ={'toVisitPark'}/>)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Member
