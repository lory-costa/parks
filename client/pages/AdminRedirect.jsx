import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function AdminRedirect () {
  return (
    <div className='flex flex-col'>
      <Header />

      <div style={{ minHeight: 'calc(100vh - 172px)' }}>

        <div className='grid grid-rows-3 grid-flow-col gap-4 mt-20'>
          <div className='row-span-3 w-full lg:w-1/2'></div>
          <div className='col-span-2 lg:flex-row text-2xl mr-4 text-green-700'>
            <img className='row-span-2 col-span-2 mr-3' src='/icons/mapMarker.png' alt="map marker icon" width="150" height="150"/>
            <div>
              <br></br>
              <p>Exploring is great!</p><br></br>
              <p>This section is for authorised users only.</p><br></br>
              <p>Find more parks to explore <Link to='/main' style={{ textDecoration: 'underline black' }} >here</Link></p>
            </div>
            <div className='row-span-2 c</div>ol-span-2 mb-4 '>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminRedirect
