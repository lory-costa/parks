import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
// import ParkListingItem from '../components/ParkListingItem'
import { getFavParks, deleteFavParks } from './MemberHelper'
import { getToVisitParks, deleteToVisit } from './MemberHelper'

function Member() {
  const [favParks, setFavParks] = useState([])
  const [toVisit, setToVisit] = useState([])
  console.log(favParks)

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getFavParks()
      .then(( favParks ) => {
        setFavParks(favparks)
        return null
      })
  }, [])

  // useEffect(() => {
  //   // eslint-disable-next-line promise/catch-or-return
  //   getToVisitParks()
  //     .then(({ toVisit }) => {
  //       setToVisit(toVisit)
  //       return null
  //     })
  // }, [])

  function deleteItemFav(id) {
    return deleteFavParks(id)
      .then((favParks) => {
        setFavParks(favParks)
      })
  }

  function deleteItemVisit(id) {
    return deleteToVisit(id)
      .then((toVisit) => {
        setToVisit(toVisit)
      })
  }

  function ParkListingItem({ parkListing, deleteItemFav }) {
    const { name, id } = parkListing
    const [visitStatus, setIsVisited] = useState(visited)

    function handleInputChange(event) {
      const { target } = event
      setIsVisited(target.checked)

      return toggleParkVisitedStatus(id, !visitStatus)
    }

    return <li>{name}------<td><input To type="checkbox" name="To Visit" checked={visitStatus} onChange={(event) => handleInputChange(event)} /></td><td><input To type="checkbox" name="Favourite" checked={visitStatus} onChange={(event) => handleInputChange(event)} /></td></li>
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Favourite Parks</h3>
        <ul>
          {favParks.map(favPark => <ParkListingItem key={favPark.id} parkListing={park} deleteItem={deleteItem} />)}
        </ul>
        <h3>To Visit Parks</h3>
        <ul>
          {toVisit.map(toVisitPark => <ParkListingItem key={toVisitPark.id} parkListing={park} deleteItem={deleteItem} />)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Member
