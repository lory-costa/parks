import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toggleParkApprovedStatus } from './AdminParktemHelper'

export default function AdminParkItem ({ parkListing, deleteItem }) {
  const { name, id, approved } = parkListing
  const [isApprovedStatus, setIsApproved] = useState(approved)

  function toggleClick () {
    setIsApproved(!isApprovedStatus)
    return toggleParkApprovedStatus(id, !isApprovedStatus)
  }

  return (

    <div
      className='border-gray-200 border-2 rounded-lg'
      key={id}>
      <Link to={`/edit-park/${id}`}>
        <img src={parkListing.image} alt="park image" className='object-cover h-36 w-full rounded-t-lg mb-2' />
      </Link>
      <p className='ml-2'>{name}</p>
      <div className='flex justify-between ml-2 items-center' >
        <button className='focus:outline-none' onClick={toggleClick}>
          {isApprovedStatus ? <img src='/icons/activeMarker.gif' alt="Active Park" width='25' />
            : <img src='/icons/dormantMarker.png' alt="Dormant Park" width='25' />}
        </button>
        <button className='focus:outline-none mr-2' onClick={() => { if (window.confirm('Are you sure you wish to delete this park?')) deleteItem(id) }}>
          <img src='/icons/delete.png' alt="Remove Park" width='25' />
        </button>
      </div>
    </div>
  )
}
