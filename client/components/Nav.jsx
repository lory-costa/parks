import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function Nav () {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='flex justify-between'>
      <div>
        {!isAuthenticated ? <LoginButton /> : < LogoutButton />}
      </div>
      <Link to = '/admin'><button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-4'>Admin</button></Link>
    </div>
  )
}
