import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer () {
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)

  return (
    <div className='flex justify-between mt-4 mx-14 text-green-700'>
      <div className='py-2'>
        <Link to="/">Kahikatea Dev Academy</Link>
      </div>
      <div className='py-2'>
        <Link to="/add-park">
          {isAdmin ? 'Add a Park' : 'Suggest a Park' }
        </Link>
      </div>
    </div>
  )
}

export default Footer
