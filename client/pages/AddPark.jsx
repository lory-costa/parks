import React from 'react'
import { useHistory } from 'react-router-dom'

// import { addEvent } from './addEventHelper'

import ParkForm from '../components/ParkForm'

export default function AddPark (props) {
  const history = useHistory()

  function submitEvent (event) {
    addEvent(event, history.push)
  }

  return (
    <ParkForm
      action='Create Event'
      submitEvent={submitEvent}
    />
  )
}