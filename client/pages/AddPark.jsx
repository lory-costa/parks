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

    return consume('/park', 'post', newEvent)
      .then(() => {
        navigateTo('/admin')
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
        action='Add Park'
        submitPark={submitPark}
      />
      <Footer />
    </div >
  )
}
