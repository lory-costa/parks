import React from 'react'

import { Link } from 'react-router-dom'

import Nav from './Nav'

function Header () {
  return (
    <div className='flex justify-between mt-8 mx-14' >
      <div className='text-2xl py-2 px-4' >
        <Link to="/">PARKS</Link>
      </div>
      <Nav />
    </div>
  )
}

export default Header
