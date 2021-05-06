import React from 'react'
import Header from './Header'
import Footer from './Footer'

function ParkDetails () {
  return (
    <div className='flex flex-col'>
      <Header />
      <div>
        <p className='text-xl' >Name of Park</p>
        <p>Address of Park</p>
      </div>
      <div>
        <h3>Facilities</h3>
      </div>
      <div>Images placeholder</div>
      <div>
        <h3>Comments</h3>
      </div>
      <Footer />
    </div>
  )
}

export default ParkDetails
