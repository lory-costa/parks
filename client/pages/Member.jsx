import React, { useEffect, useState } from 'react'
import { fetchFavParks } from '../actions/favParks'
import { fetchToVisit } from '../actions/toVisit'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Member() {
  const userId = useSelector(globalState => globalState.user.id)
  const favParks = useSelector(globalState => globalState.favParks)
  const toVisit = useSelector(globalState => globalState.toVisit)
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    console.log(userId)
    fetchFavParks(dispatch, String(userId))
    // fetchToVisit(dispatch, String(userId))
  }, [])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    fetchToVisit(dispatch, String(userId))
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Favourite Parks</h3>
        <ul>
          {favParks.map(favPark => <p key={favPark.id}>{favPark.name}</p>)}
        </ul>
        <h3>To Visit Parks</h3>
        <ul>
          {toVisit.map(toVisitPark => <p key={toVisitPark.id}>{toVisitPark.name}</p>)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Member
