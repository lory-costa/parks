import React, { useEffect } from 'react'
import { fetchFavParks, deleteFavPark } from '../actions/favParks'
import { fetchToVisit } from '../actions/toVisit'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import AdminRedirect from './AdminRedirect'
import Header from '../components/Header'
import ParkListingItem from '../components/ParkListingItem'
import Footer from '../components/Footer'

function Profile () {
  const { isAuthenticated } = useAuth0()
  const userId = useSelector(globalState => globalState.user.id)
  const favParks = useSelector(globalState => globalState.favParks)
  const toVisit = useSelector(globalState => globalState.toVisit)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchFavParks(dispatch, String(userId))
  }, [])

  useEffect(() => {
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
      <div className='mt-20 flex flex-col lg:flex-row justify-between mt-10 mx-14'>
        <div>
          <h3 className='text-2xl text-green-700 mb-2' >Favourite Parks</h3>
          <ul>
            {favParks.map(favPark => < ParkListingItem key = {favPark.id} parkListing = {favPark} type ={'favPark'}/>)}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-green-700 mb-2'>Parks I want to visit</h3>
          <ul>
            {toVisit.map(toVisitPark => < ParkListingItem key = {toVisitPark.id} parkListing = {toVisitPark} type ={'toVisitPark'}/>)}
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Profile
