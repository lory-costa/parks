import React from 'react'
import { useHistory } from 'react-router-dom'
import requestor from '../consume'

import Header from '../components/Header'
import ParkForm from '../components/ParkForm'

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
    <div>
      <Header />
      <ParkForm
        className='md:flex md:justify-center mb-6'
        action='Add Park'
        submitPark={submitPark}
      />
    </div >
  )
}
