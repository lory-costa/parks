import React, { useState } from 'react'
import { toggleParkApprovedStatus } from './ParkListingItemHelper'

export default function ParkListingItem ({ parkListing }) {
  const { name, id, isApproved } = parkListing

  const [isApprovedStatus, setIsApproved] = useState(isApproved)

  function clickHandler () {
    return toggleParkApprovedStatus(id, isApprovedStatus)
      .then((wasSuccessful) => {
        if (wasSuccessful) {
          setIsApproved(!isApprovedStatus)
        }
        return null
      })
  }

  return <li>{name}------<button onClick={clickHandler}>Toggle Approved</button></li>
}
