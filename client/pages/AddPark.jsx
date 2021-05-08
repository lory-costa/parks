import React from 'react'
import { useHistory } from 'react-router-dom'
import requestor from '../consume'

import ParkForm from '../components/ParkForm'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AddPark (props) {
  const history = useHistory()

  function addPark (event, navigateTo, consume = requestor) {
    const newEvent = {
      ...event
    }

    return consume('/parks', 'post', newEvent)
      .then(() => {
        navigateTo('/parks')
        return null
      })
  }

  function submitPark (event) {
    addPark(event, history.push)
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <ParkForm
        action='Create Event'
        submitPark={submitPark}
      />
      <Footer />
    </div >
  )
}
