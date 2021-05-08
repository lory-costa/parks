import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { setFilter } from '../actions/filter'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

import { getParkLocations, signInUser } from './MainHelper'

function Main () {
  const [parkIds, setParkIds] = useState([])
  const [parkCoordinates, setParkCoordinates] = useState([])
  const [addresses, setAddresses] = useState([])
  const dispatch = useDispatch()

  const [filterItem] = useSelector(globalState => globalState.filter)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations(filterItem)
      .then(({ parkIds, parkCoords, addrs }) => {
        setParkIds(parkIds)
        setParkCoordinates(parkCoords)
        setAddresses(addrs)
        return null
      })
  }, [])

  function handleChange () {
    dispatch(setFilter((document.getElementById('parkFilter').value)))
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <select id='parkFilter' onChange={() => handleChange()}>
        <option value='playground'>playground</option>
        <option value='toilets'>toilets</option>
        <option value='picnic_site'>picnic site</option>
        <option value='sports_field'> sports field</option>
        <option value='tramp'> tramp</option>
        <option value='dog_walking'> dog walking</option>
      </select>
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
