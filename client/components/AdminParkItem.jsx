import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toggleParkApprovedStatus } from './AdminParktemHelper'

export default function AdminParkItem ({ parkListing, deleteItem }) {
  const { name, id, approved } = parkListing
  const [isApprovedStatus, setIsApproved] = useState(approved)

  function handleInputChange (event) {
    const { target } = event
    setIsApproved(target.checked)

    return toggleParkApprovedStatus(id, !isApprovedStatus)
  }

  return(
    
    <div
    className='border-gray-200 border-2 rounded-lg'
    key={id}>
      <Link to={`/edit-park/${id}`}>
        <img src={parkListing.image} alt="park image" className='object-cover h-36 w-full rounded-t-lg mb-2' />
      </Link>
      <p className='ml-2'>{name}</p>
      <div className='flex justify-between ml-2 items-center' >
      <img src='/images/active.gif' alt="Remove Park" width='30'/>
        <input
        type="checkbox" 
        checked={isApprovedStatus} 
        onChange={(event) => handleInputChange(event)} />
        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this park?')) deleteItem(id) }}>
        <img src='/images/trash.png' alt="Remove Park" width='30'/>
        </button>
      </div>
    </div>
  )
}
