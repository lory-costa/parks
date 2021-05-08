import React, { useState } from 'react'
import { toggleParkApprovedStatus } from './ParkListingItemHelper'

export default function ParkListingItem ({ parkListing }) {
  const { name, id, approved } = parkListing

  const [isApprovedStatus, setIsApproved] = useState(approved)

  function clickHandler () {
    return toggleParkApprovedStatus(id, true)
      .then((wasSuccessful) => {
        if (wasSuccessful) {
          setIsApproved(isApprovedStatus)
        }
        return null
      })
  }

  return <li>{name}------<button onClick={clickHandler}>Toggle Approved</button></li>
}
