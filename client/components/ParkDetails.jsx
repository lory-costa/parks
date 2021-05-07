import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import Header from './Header'
import Rating from './Rating'
import Facilities from './Facilities'
import Comments from './Comments'
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
      
      <div className='park-details' >
        <h1>{name}</h1>
        <p>Address: {address}</p>
      </div>
      
      <Rating />
      
      <Facilities playground={playground} toilets={toilets} picnicSite={picnicSite} sportsField={sportsField} tramp={tramp} dogWalking={dogWalking} />
     
      <div> 
        <img src={image} alt="park image" width="500" height="600"/> 
      </div>
      
      <Comments />
      
      <Footer />
    </div>
  )
}

export default ParkDetails
