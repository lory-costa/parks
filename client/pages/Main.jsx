import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

import { getParkLocations } from './MainHelper'

function Main () {
  const [parkIds, setParkIds] = useState([])
  const [parkCoordinates, setParkCoordinates] = useState([])
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ parkIds, parkCoords, addrs }) => {
        setParkIds(parkIds)
        setParkCoordinates(parkCoords)
        setAddresses(addrs)
        return null
      })
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <Map
        ids={parkIds}
        coordinates={parkCoordinates}
        addresses={addresses}
      />
      <Footer />
    </div>
  )
}

export default Main
