import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './Header'
import Footer from './Footer'

import { fetchParks } from './ParkDetailsHelper'

function ParkDetails () {
  const { id } = useParams()
  // const park = useSelector(globalState => globalState.park)

  useEffect(() => {
    fetchParks(id)
  }, [])

  // const { name } = park

  return (
    <div className='flex flex-col'>
      <Header />
      <div>
        <p className='text-xl' >Name o Park</p>
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
