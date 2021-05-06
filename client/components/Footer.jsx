import React from 'react'

import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='flex justify-between mt-8 mx-14'>
      <div className='py-2 px-4'>
      <Link to="/">Kahikatea Dev Academy</Link>
      </div>
      <div className='py-2 px-4'>
      <Link to="/">About</Link>
      </div>
    </div>
  )
}

export default Footer
