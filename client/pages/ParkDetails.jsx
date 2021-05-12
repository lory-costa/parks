import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import AdminRedirect from '../pages/AdminRedirect'
import Header from '../components/Header'
import Facilities from '../components/Facilities'
import Comments from '../components/Comments'
import Footer from '../components/Footer'
import ParkRating from '../components/ParkRating'

import { getPark } from './ParkDetailsHelper'
import { fetchPark } from '../actions/park'

function ParkDetails () {
  const { id } = useParams()
  const [view, setView] = useState('View Description')
  const [park, setPark] = useState([])
  const [button, setButton] = useState(false)
  const dispatch = useDispatch()

  const { name, address, description, url, image, playGround, toilets, picnicSite, sportsField, tramp, dogWalking } = park
  const rates = useSelector(globalState => globalState.comments)
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)
  const approved = useSelector(globalState => globalState.park.approved)

  useEffect(() => {
    fetchPark(dispatch, id)
    // eslint-disable-next-line promise/catch-or-return
    getPark(id)
      .then((park) => {
        setPark(park)
        return null
      })
  }, [])

  function handleButtonClick (e) {
    if (button) {
      return (
        setButton(false),
        setView('View Description')
      )
    }
    return (
      setButton(true),
      setView('Hide Description')
    )
  }

  const parkRate = rates.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0) / rates.length

  if (!approved && !isAdmin) {
    return <AdminRedirect />
  }

  return (
    <div className='flex flex-col'>
      <Header />

      <div style={{ minHeight: 'calc(100vh - 172px)' }}>
        <div className='flex flex-col flex-col-reverse lg:flex-row justify-between mt-10 mx-14'>
          <div className='lg:w-1/2  mb-4 p-4' >
            <div className='flex flex-col lg:flex-row'>
              <h1 className='text-2xl mr-4 text-green-700'>{name}</h1>
              <ParkRating rating={parkRate} />
            </div>
            <p>{address}</p>
            <div className="container">
              <button onClick={handleButtonClick} type="button" className="text-md mb-2 underline text-gray-500 focus:outline-none">{view}</button>
              <div className="dropdown mr-4 text-justify">
                {button && description}
              </div>
            </div>
            <Facilities playground={playGround} toilets={toilets} picnicSite={picnicSite} sportsField={sportsField} tramp={tramp} dogWalking={dogWalking} url={url} />
            {isAdmin && <Link to={`/edit-park/${id}`}><button className='bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded mt-4 focus:outline-none'>Edit Park</button></Link>}
          </div>
          <div className='mb-4 lg:mb-0 lg:w-1/2'>
            <img src={image} className='rounded-lg' alt="park image" width="100%" height="600" />
          </div>
        </div>
        <Comments parkId={id} />
      </div>
      <Footer />
    </div>
  )
}

export default ParkDetails
