import React from 'react'

function Facilities ({ url, playground, toilets, picnicSite, sportsField, tramp, dogWalking }) {
  return (
    <div>
      <h2 className='mt-4 text-xl mb-2 text-green-700'>Facilities</h2>
      <div className='flex'>
        {!!playground && <img className='mr-3' src='/icons/playGround.png' alt="playground icon" width="35" height="35" />}
        {!!toilets && <img className='mr-3' src='/icons/toilets.png' alt="toilet icon" width="35" height="35" />}
        {!!picnicSite && <img className='mr-3' src='/icons/picnicSite.png' alt="picnic icon" width="35" height="35" />}
        {!!sportsField && <img className='mr-3' src='/icons/sportsField.png' alt="sports icon" width="35" height="35" />}
        {!!tramp && <img className='mr-3' src='/icons/tramp.png' alt="tramp walking icon" width="35" height="35" />}
        {!!dogWalking && <img src='/icons/dogWalking.png' alt="dog allowed icon" width="35" height="35" />}
      </div>
      <p className='mt-4' >For more information, visit the <a className='underline' target='_blank' href={url}>council website</a>.</p>
    </div>
  )
}

export default Facilities
