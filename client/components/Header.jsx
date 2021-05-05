import React from 'react'

import { Link } from 'react-router-dom'

import Nav from './Nav'

function Header () {
  return (
    <>
      <Link to="/">PARKS</Link>
      <Nav />
    </>
  )
}

export default Header
