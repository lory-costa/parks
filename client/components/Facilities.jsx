import React from 'react'

function Facilities (props) {
    return (
        <div>
        <h3>Facilities</h3>
        <ul>
          <li>{props.playground}</li>
          <li>{props.toilets}</li>
          <li>{props.picnicSite}</li>
          <li>{props.sportsField}</li>
          <li>{props.tramp}</li>
          <li>{props.dogWalking}</li>
        </ul>
        <p>More information:{props.url}</p>
      </div>
    )
}

export default Facilities