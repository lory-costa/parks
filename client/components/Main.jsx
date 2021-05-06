import React, { useEffect, useState } from 'react'
import Header from './Header'
import Map from './Map'
import Footer from './Footer'

import { fetchParkLocations } from './MainHelper'

function Main () {
  const [parkCoordinates, setParkCoordinates] = useState([])
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    fetchParkLocations()
      .then(({ parkCoords, addrs }) => {
        setParkCoordinates(parkCoords)
        setAddresses(addrs)
        return null
      })
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-16 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <Map
        coordinates={parkCoordinates}
        addresses={addresses}
      />
      {/* <div className='flex justify-center'>
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mt-4" >
          Suggest a Park
        </button>
      </div> */}
      <Footer />
    </div>
  )
}

export default Main
