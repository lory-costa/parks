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
    getParkLocations()
      .then(({ parks }) => {
        setParks(parks)
        return null
      })
  }, [])

  function deleteItem (id) {
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
      <div className='mt-20 flex flex-col mx-14 page-content'>
        <h3 className='text-3xl text-green-700 mb-4'>Added Parks</h3>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8' >
          {parks.map(park => <AdminParkItem key={park.id} parkListing={park} deleteItem={deleteItem} />)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
