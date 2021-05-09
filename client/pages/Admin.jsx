import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminParkItem from '../components/AdminParkItem'
import { getParkLocations, deletePark } from './AdminHelper'
import AdminRedirect from './AdminRedirect'

function Admin () {
  const [parks, setParks] = useState([])
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ parks }) => {
        setParks(parks)
        return null
      })
  }, [])

  function deleteItem (id) {
    // eslint-disable-next-line promise/catch-or-return
    return deletePark(id)
      .then((parks) => {
        setParks(parks)
        return null
      })
  }

  if (!isAdmin) {
    return (
      <>
        <AdminRedirect />
      </>
    )
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Parks</h3>
        <ul>
          {parks.map(park => <AdminParkItem key={park.id} parkListing={park} deleteItem={deleteItem} />)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
