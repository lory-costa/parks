import React from 'react'
import { setUser } from './actions/user'

import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Homepage from './pages/Homepage'
import Main from './pages/Main'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import ParkDetails from './pages/ParkDetails'
import AddPark from './pages/AddPark'
import EditPark from './pages/EditPark'
import About from './pages/About'

import { dispatch } from './store'

function App () {
  const { isLoading, user } = useAuth0()

  if (isLoading) {
    return <div className='relative h-screen w-screen'>
      <div className='absolute top-1/2 left-1/2' style={{ transform: 'translate(-50%, -50%)'}}>
        <img className='block mx-auto' src='/images/Loading.gif' />
      </div>
    </div>
  }

  if (user) {
    dispatch(setUser(user))
  }

  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route path='/main' component={Main} />
      <Route path='/admin' component={Admin} />
      <Route path='/profile' component={Profile} />
      <Route path='/park-details/:id' component={ParkDetails} />
      <Route path='/add-park' component={AddPark} />
      <Route path='/edit-park/:id' component={EditPark} />
      <Route path='/about' component={About} />
    </>
  )
}

export default App
