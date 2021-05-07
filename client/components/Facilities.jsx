import React from 'react'

function Facilities (props) {
  const playground = props.playground
  const toilets = props.toilets
  const picnic = props.picnicSite
  const sports = props.sportsField
  const tramp = props.tramp
  const dogs = props.dogWalking

  return (
    <div>
      <h2 className='mt-4 text-xl mb-2 text-green-700'>Facilities</h2>
      <div className='flex'>
        {!!playground && <img className='mr-3' src='/icons/playground.svg.png' alt="playground icon" width="35" height="35"/>}
        {!!toilets && <img className='mr-3' src='/icons/icon-toilets.svg' alt="toilet icon" width="35" height="35"/>}
        {!!picnic && <img className='mr-3' src='/icons/icon-picnic-area.svg' alt="picnic icon" width="35" height="35"/> }
        {!!sports && <img className='mr-3' src='/icons/icon-sports-field.svg' alt="sports icon" width="35" height="35"/> }
        {!!tramp && <img className='mr-3' src='/icons/icon-walking.svg' alt="tramp walking icon" width="35" height="35"/>}
        {!!dogs && <img src='/icons/dogAllowed.png' alt="dog allowed icon" width="35" height="35"/>}
      </div>
        <p className='mt-4' >For more information, visit the <a className='text-blue-500 underline' href={props.url}>council website</a>.</p>
    </div>
  )
}

export default Facilities
