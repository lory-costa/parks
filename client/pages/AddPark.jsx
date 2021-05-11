import React from 'react'
import { useHistory } from 'react-router-dom'
import requestor from '../consume'

import { useAuth0 } from '@auth0/auth0-react'
import AdminRedirect from './AdminRedirect'
import ParkForm from '../components/ParkForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <ParkForm
        className='md:flex md:justify-center mb-6'
        action='Add Park'
        submitPark={submitPark}
      />
      <Footer />
    </div >
  )
}
