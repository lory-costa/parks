import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

import { getParkLocations, signInUser } from './MainHelper'

function Main () {
  const [parkIds, setParkIds] = useState([])
  const [parkCoordinates, setParkCoordinates] = useState([])
  const [addresses, setAddresses] = useState([])
  const [parkNames, setParkNames] = useState([])
  const [parkImages, setParkImages] = useState([])
  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ parkIds, parkCoords, addrs, prkNames, prkImages }) => {
        setParkIds(parkIds)
        setParkCoordinates(parkCoords)
        setAddresses(addrs)
        setParkNames(prkNames)
        setParkImages(prkImages)
        return null
      })
  }, [])

  // const { isLoading, user } = useAuth0()

  // if (isLoading) {
  //   return <p>Loading..</p>
  // }

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
        names={parkNames}
        images={parkImages}
      />
      <Footer />
    </div>
  )
}

export default Main
