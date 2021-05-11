import React from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

function Main () {
  return (
    <div className='flex flex-col'>
      <Header />
      <p className='text-xl flex absolute inset-x-0.5 ml-96 top-32 z-20 w-72'>SELECT A PARK FOR DETAILS</p>
      <Map />
      <Footer />
    </div>
  )
}

export default Main
