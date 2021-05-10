import React from 'react'
import FilterItem from './FilterItem'

export default function Filter () {
  return(
    <div className='flex absolute inset-x-0.5 top-28 ml-20 z-20'>
      <FilterItem facilityIcon={<img src='/icons/playground.png' alt="playground icon" width="35" height="35"/>} facilityValue={'playground'} />
      <FilterItem facilityIcon={<img src='/icons/toilets.png' alt="toilet icon" width="35" height="35"/>} facilityValue={'playground'} />
      <FilterItem facilityIcon={<img src='/icons/picnicSite.png' alt="picnic icon" width="35" height="35"/>} facilityValue={'picnic_site'} />
      <FilterItem facilityIcon={<img src='/icons/sportsField.png' alt="sports icon" width="35" height="35"/>} facilityValue={'sports_field'} />
      <FilterItem facilityIcon={<img src='/icons/tramp.png' alt="tramp walking icon" width="35" height="35"/>} facilityValue={'tramping'} />
      <FilterItem facilityIcon={<img src='/icons/dogAllowed.png' alt="dog allowed icon" width="35" height="35"/>} facilityValue={'dog_walking'} />
    </div>
  )
}
