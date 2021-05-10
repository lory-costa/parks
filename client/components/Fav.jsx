import { addToFavParks, deleteFavPark } from '../actions/favParks'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export default function Fav ({ parkId, heart }) {
  const userId = useSelector(globalState => globalState.user.id)
  // const [heart, setHeart] = useState(false)
  const { isAuthenticated } = useAuth0()

  const dispatch = useDispatch()

  const handleClick = (e) => {
    addToFavParks(dispatch, userId, parkId)
  }

  if (heart) {
    return <>
      { isAuthenticated &&
        <div>
          <button onClick={handleClick}><img src='./icons/heart.png'></img></button>
        </div>
      }
    </>
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <button onClick={handleClick}><img src='./icons/heartWhite.png'></img></button>
        </div>
      }
    </>
  )
}
