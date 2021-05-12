import React from 'react'
import FilterItem from './FilterItem'

export default function Filter () {
  return (
    <div className='flex bg-white absolute inset-x-0.5 top-24 mt-2 pt-1 ml-16 z-20 rounded' style={{ width: 275, border: '2px solid rgba(0, 0, 0, 0.2)', backgroundClip: 'padding-box' }}>
      <FilterItem facilityIcon={<img src='/icons/playGround.png' alt="playground icon" width="30" height="30"/>} facilityValue={'playground'} />
      <FilterItem facilityIcon={<img src='/icons/toilets.png' alt="toilet icon" width="30" height="30"/>} facilityValue={'toilets'} />
      <FilterItem facilityIcon={<img src='/icons/picnicSite.png' alt="picnic icon" width="30" height="30"/>} facilityValue={'picnic_site'} />
      <FilterItem facilityIcon={<img src='/icons/sportsField.png' alt="sports icon" width="30" height="30"/>} facilityValue={'sports_field'} />
      <FilterItem facilityIcon={<img src='/icons/tramp.png' alt="tramp walking icon" width="30" height="30"/>} facilityValue={'tramp'} />
      <FilterItem facilityIcon={<img src='/icons/dogWalking.png' alt="dog allowed icon" width="32" height="32"/>} facilityValue={'dog_walking'} />
    </div>
  )
}
