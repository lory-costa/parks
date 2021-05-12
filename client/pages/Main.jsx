import React from 'react'

import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'

function Main () {
  return (
    <div className='flex flex-col'>
      <Header />
      <Map />
      <Footer />
    </div>
  )
}

export default Main
