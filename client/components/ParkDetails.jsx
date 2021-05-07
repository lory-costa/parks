import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import Header from './Header'
import Footer from './Footer'

import { getPark } from './ParkDetailsHelper'

function ParkDetails () {
  const { id } = useParams()
  const [park, setPark] = useState([])

  useEffect(() => {
    getPark(id)
      .then((park) => {
        setPark(park)
        return null
      })
  }, [])

  const { name, address, url, image, playground, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = park

  return (
    <div className='flex flex-col'>
      <Header />
      <div>
        <h1> {name}</h1>
        <p>Address: {address}</p>
      </div>
      <div>
        Ratings
      </div>
      <div>
        <h3>Facilities</h3>
        <ul>
          <li>{playground}</li>
          <li>{toilets}</li>
          <li>{picnicSite}</li>
          <li>{sportsField}</li>
          <li>{tramp}</li>
          <li>{dogWalking}</li>
        </ul>
        <p>More information: {url}</p>
      </div>
      <div> <img src={image} alt="park image" width="500" height="600"/> </div>
      <div>
        <div>

        </div>
        <div>

          <h3>Comments</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParkDetails
