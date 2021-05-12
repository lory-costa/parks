import React from 'react'
import { Link } from 'react-router-dom'

function Homepage () {
  return (
    <div className='flex flex-col items-center justify-center bg-park-image bg-cover h-screen' >
      <img src='/images/logos/ParkWireWhite.png' alt='whiteLogo'></img>
      <Link className="bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded mt-10 focus:outline-none" to='/main'> Explore </Link>
    </div>
  )
}

export default Homepage
