import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Homepage from './Homepage'
import Main from './Main'

function App (props) {
  useEffect(() => {}, [])

  return (
    <>
    <Route exact path='/' component={Homepage} />
    <Route path='/main' component={Main} />
    {/* <Route path='/park-details' component={ParkDetails} /> */}
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
