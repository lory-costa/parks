import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from '../components/Header'
import Facilities from '../components/Facilities'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import ParkRating from '../components/ParkRating'

import { getPark } from './ParkDetailsHelper'

function ParkDetails () {
  const { id } = useParams()
  const [park, setPark] = useState([])
  const [button, setButton] = useState(false)


  const { name, address, description, url, image, playGround, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = park
  const rates = useSelector(globalState => globalState.rating)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getPark(id)
      .then((park) => {
        setPark(park)
        return null
      })
  }, [])

  useEffect(() => {
    fetchRating(dispatch, id)
  }, [])

  function handleButtonClick (e) {
    if (button) {
      return (
        setButton(false)
      )
    }
    return (
      setButton(true)
    )
  }

  const parkRate = rates.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0) / rates.length

  return (
    <div className='flex flex-col'>
      <Header />

      <div style={{ minHeight: 'calc(100vh - 172px)' }}>
        <div className='flex flex-col flex-col-reverse lg:flex-row justify-between mt-10 mx-14'>
          <div className='w-full lg:w-1/2' >
            <div className='flex flex-col lg:flex-row'>
              <h1 className='text-2xl mr-4 text-green-700'>{name}</h1>
              <ParkRating rating = {parkRate} />
            </div>
            <p>{address}</p>
            <Facilities playground={playGround} toilets={toilets} picnicSite={picnicSite} sportsField={sportsField} tramp={tramp} dogWalking={dogWalking} url={url} />
            <div className="container">
              <button onClick={handleButtonClick} type="button" className="button">Description</button>
              <div className="dropdown">
                {button && description }
              </div>
            </div>
          </div>
          <div className='mb-4 lg:mb-0 lg:w-1/2'>
            <img src={image} alt="park image" width="100%" height="600" />
          </div>
        </div>
        <Comments parkId={id} />
      </div>
      <Footer />
    </div>
  )
}

export default ParkDetails
