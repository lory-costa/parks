import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className='bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded focus:outline-none' onClick={() => loginWithRedirect()}>
    Login
  </button>
}

export default LoginButton
