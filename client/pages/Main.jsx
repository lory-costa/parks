import React from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

function Main () {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <Map />
      <Footer />
    </div>
  )
}

export default Main
