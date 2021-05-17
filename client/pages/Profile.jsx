import React, { useEffect } from 'react'
import { fetchFavParks } from '../actions/favParks'
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
  const name = useSelector(globalState => globalState.user.name)
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
      <div className='mt-20 flex flex-col mt-10 mx-4 lg:mx-14 page-content'>
        <h1 className='text-3xl text-green-700 mb-8'>{name}&apos;s profile</h1>
        <div>
          <h3 className='text-2xl text-gray-700 mb-4'>Favourite Parks</h3>
          {favParks.length === 0 && <p className='text-gray-500 -mt-4' >You don't have any favourite parks yet.</p>}
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8' >
            {favParks.map(favPark => < ParkListingItem key={favPark.id} parkListing={favPark} type={'favPark'} image='/icons/heart-filled.png' />)}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-gray-700 mb-4'>Parks to Visit</h3>
          {toVisit.length === 0 && <p className='text-gray-500 -mt-4' >No parks on your watchlist yet. Get exploring!</p>}
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {toVisit.map(toVisitPark => < ParkListingItem key={toVisitPark.id} parkListing={toVisitPark} type={'toVisitPark'} image='/icons/bookmark-filled.png' />)}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
