import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Homepage from './pages/Homepage'
import Main from './pages/Main'
import Admin from './pages/Admin'
import ParkDetails from './pages/ParkDetails'
import AddPark from './pages/AddPark'
import EditPark from './pages/EditPark'

function App () {
  useEffect(() => { }, [])

  // const { isLoading, user } = useAuth0()

  // if (isLoading) {
  //   return <p>Loading..</p>
  // }

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/main' component={Main} />
      <Route path='/admin' component={Admin} />
      <Route path='/park-details/:id' component={ParkDetails} />
      <Route path='/add-park' component={AddPark} />
      <Route path='/edit-park/:id' component={EditPark} />
    </>
  )
}

export default App
