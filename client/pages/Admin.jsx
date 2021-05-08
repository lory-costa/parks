import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ParkListingItem from '../components/ParkListingItem'

import { getParkLocations } from './AdminHelper'

function Admin () {
  const [approvedParks, setApprovedParks] = useState([])
  const [pendingParks, setPendingParks] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ approvedParks, pendingParks }) => {
        setApprovedParks(approvedParks)
        console.log(approvedParks)
        setPendingParks(pendingParks)
        return null
      })
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Approved Parks</h3>
        <ul>
          {approvedParks.map(park => <ParkListingItem key = {park.id} parkListing={park}/>)}
        </ul>

        <h3>Pending Parks</h3>
        <ul>

          {/* {pendingParks.map(park => <li>{park.name}------<button onClick={clickHandler}>Toggle Approved</button></li>)} */}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
