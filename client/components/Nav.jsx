import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function Nav () {
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)

  const { isAuthenticated } = useAuth0()
  return (
    <div className='flex justify-between'>
      <div>
        {!isAuthenticated ? <LoginButton /> : < LogoutButton />}
      </div>
      {!!isAdmin && <Link to = '/admin'><button className='focus:outline-none bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded ml-4'>Admin</button></Link>}
      {!!isAuthenticated && <Link to = '/profile'><button className='focus:outline-none bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded ml-4'>Profile</button></Link> }
    </div>
  )
}
