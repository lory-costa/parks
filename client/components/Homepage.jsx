import React from 'react'
import { Link } from 'react-router-dom'

function Homepage () {
  return (
    <div className='flex flex-col items-center justify-center bg-park-image bg-cover h-screen' >
      <h1 className='text-white text-9xl'>PARKS</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded mt-10" >
        <Link to='/Main'> Explore </Link>
      </button>
    </div>
  )
}

export default Homepage
