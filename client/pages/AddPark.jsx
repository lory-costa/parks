import React from 'react'
import { useHistory } from 'react-router-dom'
import requestor from '../consume'

import { useAuth0 } from '@auth0/auth0-react'
import AdminRedirect from './AdminRedirect'
import ParkForm from '../components/ParkForm'
import Header from '../components/Header'

export default function AddPark (props) {
  const history = useHistory()

  const { isAuthenticated } = useAuth0()

  function addPark (event, navigateTo, consume = requestor) {
    const newEvent = {
      ...event
    }

    return consume('/park', 'post', newEvent)
      .then(() => {
        navigateTo('/main')
        return null
      })
  }

  function submitPark (event) {
    addPark(event, history.push)
  }

  if (!isAuthenticated) {
    return (
      <>
        <AdminRedirect />
      </>
    )
  }

  return (
    <div>
      <Header />
      <div className='flex flex-col mt-20 mb-12 mx-14'>
        <h1 className='text-green-700 text-3xl'>Add a Park</h1>
        <h4 className='text-gray-700'> *required fields</h4>
        <ParkForm
          action='Add Park'
          submitPark={submitPark}
        />
      </div>
    </div >
  )
}
