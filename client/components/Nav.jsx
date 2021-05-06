import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <>
      <Link to="/" onClick >
              Log out
      </Link>
      <Link to="/">Home</Link>
    </>
  )
}
