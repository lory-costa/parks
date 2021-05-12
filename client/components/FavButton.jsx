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
      addToFavParks(dispatch, userId, parkId)
    } else {
      deleteFavPark(dispatch, favParkId)
    }
  }

  if (heart) {
    return <>
      { isAuthenticated &&
        <div className='flex items-center'>
          <button className='focus:outline-none' onClick={() => handleClick(heart)}><img src='./icons/heart-filled.png' width='20'/></button><span onClick={() => handleClick(heart)} className='ml-2 cursor-pointer text-sm' >Remove from favourites</span>
        </div>
      }
    </>
  }

  return (
    <>
      {isAuthenticated &&
        <div className='flex items-center'>
          <button className='focus:outline-none' onClick={() => handleClick(heart)}><img src='./icons/heart.png' width='20'/></button><span onClick={() => handleClick(heart)} className='ml-2 cursor-pointer text-sm' >Add to favourites</span>
        </div>
      }
    </>
  )
}
