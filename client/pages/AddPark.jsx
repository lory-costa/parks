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
      <div className='flex flex-col mt-20 mx-14'>
        <h1 className='text-green-700 text-3xl'>Add a Park</h1>
        <ParkForm
          action='Add Park'
          submitPark={submitPark}
        />
      </div>
    </div >
  )
}
