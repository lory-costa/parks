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
      
      <div className='flex justify-between mt-10 mx-14'>
        <div className='flex justify-between w-80' >
          <div >
            <h1 className='text-2xl'>{name}</h1>
            <p>{address}</p>
            <Facilities playground={playground} toilets={toilets} picnicSite={picnicSite} sportsField={sportsField} tramp={tramp} dogWalking={dogWalking} url={url} />
          </div>
          <Rating />
        </div
        <div> 
          <img src={image} alt="park image" width="500" height="600"/> 
        </div>
      </div>
      
      <Comments />
      
      <Footer />
    </div>
  )
}

export default ParkDetails
