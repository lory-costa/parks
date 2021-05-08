import React from 'react'
import { useHistory } from 'react-router-dom'
import requestor from '../consume'

import ParkForm from '../components/ParkForm'

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
    <ParkForm
      action='Create Event'
      submitPark={submitPark}
    />
  )
}
