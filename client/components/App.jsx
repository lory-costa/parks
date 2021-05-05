import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { fetchFruits } from '../actions'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div className='app '>
        <h1 className='text-red-500'>Parks!</h1>

        {!isAuthenticated ? <LoginButton /> : < LogoutButton />}
        < Profile />
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
