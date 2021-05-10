import { addToFavParks, deleteFavPark } from '../actions/favParks'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export default function mFavButton ({ parkId, heart, favParkId }) {
  const userId = useSelector(globalState => globalState.user.id)
  const { isAuthenticated } = useAuth0()

  const dispatch = useDispatch()

  function handleClick (heart) {
    if (!heart) {
      console.log(heart, 'I am adding', parkId, 'to my favorites')
      addToFavParks(dispatch, userId, parkId)
    } else {
      console.log(heart, 'I am deleteing', favParkId)
      deleteFavPark(dispatch, favParkId)
    }
  }

  if (heart) {
    return <>
      { isAuthenticated &&
        <div>
          <button onClick={() => handleClick(heart)}><img src='./icons/heart-filled.png' width='20'/></button>
        </div>
      }
    </>
  }

  return (
    <>
      {isAuthenticated &&
        <div>
          <button onClick={() => handleClick(heart)}><img src='./icons/heart.png' width='20'/></button>
        </div>
      }
    </>
  )
}
