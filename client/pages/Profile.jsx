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
  console.log(favParks)

  function checkFavs (favParks) {
    const favyPark = favParks.map(favPark => < ParkListingItem key={favPark.id} parkListing={favPark} type={'favPark'} image='/icons/heart-filled.png' />)
    if (favParks.length === 0) {
      console.log('Favourite parks', favParks)
      return 'No favourite parks yet'
    } else {
      return favyPark
    }
  }

  function checkVisit (toVisit) {
    const toVisitParks = toVisit.map(toVisitPark => < ParkListingItem key={toVisitPark.id} parkListing={toVisitPark} type={'toVisitPark'} image='/icons/bookmark-filled.png' />)
    if (toVisit.length === 0) {
      return 'No parks on your watch list yet. Get exploring!'
    } else {
      return toVisitParks
    }
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='mt-20 flex flex-col mt-10 mx-14 page-content'>
        <h1 className='text-4xl text-green-700 mb-8'>{name}'s profile</h1>
        <div>
          <h3 className='text-2xl text-gray-700 mb-4'>Favourite Parks</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8' >
            {checkFavs(favParks)}
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-gray-700 mb-4'>Parks to Visit</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {checkVisit(toVisit)}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
