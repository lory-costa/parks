import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import Homepage from './Homepage'
import Main from './Main'


function App (props) {
  useEffect(() => {}, [])

  return (
    <>
    <Route exact path='/' component={Homepage} />
    <Route path='/main' component={Main} />
    {/* <Route path='/park-details' component={ParkDetails} /> */}

  const { isAuthenticated } = useAuth0()

  return (
    <>
    <Homepage />
    </>
  )
}

export default App
