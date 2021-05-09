import React, { useState } from 'react'
import { toggleParkApprovedStatus } from './ParkListingItemHelper'

export default function ParkListingItem ({ parkListing, deleteItem }) {
  const { name, id, approved } = parkListing
  const [isApprovedStatus, setIsApproved] = useState(approved)

  function handleInputChange (event) {
    const { target } = event
    setIsApproved(target.checked)

    return toggleParkApprovedStatus(id, !isApprovedStatus)
  }

  return <li>{name}------<input type="checkbox" checked={isApprovedStatus} onChange={(event) => handleInputChange(event)} /><button onClick={() => { if (window.confirm('Are you sure you wish to delete this park?')) deleteItem(id) } }>Delete</button></li>
}
