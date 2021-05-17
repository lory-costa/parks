import React from 'react'

import { Link } from 'react-router-dom'

import Nav from './Nav'

function Header () {
  return (
    <div className='flex flex-row justify-between mt-8 mx-4 lg:mx-14 items-center' >
      <div>
        <Link to="/main">
          <img className='w-68 bg-cover h-10' src='/images/logos/ProjectLogoGreen.png'/>
        </Link>
      </div>
      <Nav />
    </div>
  )
}

export default Header
