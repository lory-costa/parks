import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function Nav () {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='flex w-48 justify-between'>
      <div>
        {!isAuthenticated ? <LoginButton /> : < LogoutButton />}
      </div>
      <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded'>Button</button>
    </div>
  )
}
