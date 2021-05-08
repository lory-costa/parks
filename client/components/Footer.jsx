import React from 'react'

import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='flex justify-between mt-4 mx-14 text-green-700'>
      <div className='py-2'>
        <Link to="/">Kahikatea Dev Academy</Link>
      </div>
      <div className='py-2'>
        <Link to="/add-park">Suggest a Park</Link>
      </div>
    </div>
  )
}

export default Footer
