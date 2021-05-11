import React from 'react'
import { Link } from 'react-router-dom'

function Homepage () {
  return (
    <div className='flex flex-col items-center justify-center bg-park-image bg-cover h-screen' >
      <img src='/images/Logos/ParkWireWhite.png' alt='whiteLogo'></img>
      <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mt-10 focus:outline-none" >
        <Link to='/main'> Explore </Link>
      </button>
    </div>
  )
}

export default Homepage
