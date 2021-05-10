import React from 'react'
import FilterItem from './FilterItem'

export default function Filter () {
  return(
    <div className='flex absolute inset-x-0.5 top-24 mt-2 ml-16 z-20'>
      <div className='flex bg-white border-solid border-black border-opacity-25 rounded pt-2' >
        <FilterItem facilityIcon={<img src='/icons/playground.png' alt="playground icon" width="30" height="30"/>} facilityValue={'playground'} />
        <FilterItem facilityIcon={<img src='/icons/toilets.png' alt="toilet icon" width="30" height="30"/>} facilityValue={'toilets'} />
        <FilterItem facilityIcon={<img src='/icons/picnicSite.png' alt="picnic icon" width="30" height="30"/>} facilityValue={'picnic_site'} />
        <FilterItem facilityIcon={<img src='/icons/sportsField.png' alt="sports icon" width="30" height="30"/>} facilityValue={'sports_field'} />
        <FilterItem facilityIcon={<img src='/icons/tramp.png' alt="tramp walking icon" width="30" height="30"/>} facilityValue={'tramp'} />
        <FilterItem facilityIcon={<img src='/icons/dogAllowed.png' alt="dog allowed icon" width="32" height="32"/>} facilityValue={'dog_walking'} />
      </div>
    </div>
  )
}
