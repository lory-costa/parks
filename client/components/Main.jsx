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
      <div className='mt-20 mb-8 flex justify-center' >
        <p className='text-xl'>Select a park for details</p>
      </div>
      <Map
        coordinates={parkCoordinates}
        addresses={addresses}
      />
      <div className='flex justify-center'>
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded mt-10" >
          Suggest a Park
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Main
