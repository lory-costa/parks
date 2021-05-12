import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Footer () {
  const { isAuthenticated } = useAuth0()
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)

  return (
    <div className='flex justify-between mt-4 mb-2 mx-14 text-green-700'>
      <div className='py-2 underline'>
        <Link to="/about">EDA - Kahikatea 2021</Link>
      </div>
      <div className='py-2 underline'>
        { isAuthenticated && <Link to="/add-park">
          {isAdmin ? 'Add a Park' : 'Suggest a Park'}
        </Link>}
      </div>

    </div>
  )
}

export default Footer
