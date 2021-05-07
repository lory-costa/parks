import React from 'react'

function Facilities (props) {
  const playground = props.playground
  const toilets = props.toilets
  const picnic = props.picnicSite
  const sports = props.sportsField
  const tramp = props.tramp
  const dogs = props.dogWalking
  console.log(props)
  return (
    <div>
      <h3>Facilities</h3>

      {playground && <img src='/icons/playground.svg.png' alt="playground icon" width="50" height="50"/>}
      {toilets && <img src='/icons/icon-toilets.svg' alt="toilet icon" width="50" height="50"/>}
      {picnic && <img src='/icons/icon-picnic-area.svg' alt="picnic icon" width="50" height="50"/> }
      {sports && <img src='/icons/icon-sports-field.svg' alt="sports icon" width="50" height="50"/> }
      {tramp && <img src='/icons/icon-walking.svg' alt="tramp walking icon" width="50" height="50"/>}

      {dogs && <img src='/icons/dogAllowed.png' alt="dog allowed icon" width="50" height="50"/>}

      <p>More information:{props.url}</p>
    </div>
  )
}

export default Facilities
