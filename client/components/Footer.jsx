import React from 'react'

import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='flex justify-between mt-8 mx-14 absolute inset-x-0 bottom-4 text-green-700'>
      {/* THIS COULD BE THE 'ABOUT'? */}
      <div className='py-2 px-4'>
        <Link to="/">Kahikatea Dev Academy</Link>
      </div>
      {/* DONT NEED TO MAKE THIS SO BIG? */}
      <div className='py-2 px-4'>
        <Link to="/">Suggest a Park</Link>
      </div>
    </div>
  )
}

export default Footer
