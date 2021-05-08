import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toggleParkApprovedStatus } from './AdminHelper'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { getParkLocations } from './AdminHelper'

function Admin () {
  const [approvedParks, setApprovedParks] = useState([])
  const [pendingParks, setPendingParks] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ approvedParks, pendingParks }) => {
        setApprovedParks(approvedParks)
        setPendingParks(pendingParks)
        return null
      })
  }, [])

  const { id } = useParams()

  function clickHandler () {
    return toggleParkApprovedStatus(id, isApproved)
      .then((wasSuccessful) => {
        if (wasSuccessful) {
          setApprovedParks(!isApproved)
        }
        return null
      })
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Approved Parks</h3>
        <ul>
          {approvedParks.map(park => <li>{park.name}------<button onClick={clickHandler}>Toggle Approved</button></li>)}
        </ul>

        <h3>Pending Parks</h3>
        <ul>

          {pendingParks.map(park => <li>{park.name}------<button onClick={clickHandler}>Toggle Approved</button></li>)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
