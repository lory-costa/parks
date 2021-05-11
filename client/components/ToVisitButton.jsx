import { addToVisitPark, deleteToVisitPark } from '../actions/toVisit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export default function ToVisitButton ({ parkId, toVisit, toVisitParkId }) {
  const userId = useSelector(globalState => globalState.user.id)
  const { isAuthenticated } = useAuth0()

  const dispatch = useDispatch()

  function handleClick (toVisit) {
    if (!toVisit) {
      console.log(toVisit, 'I am adding', parkId, 'to my To Visit')
      addToVisitPark(dispatch, userId, parkId)
    } else {
      console.log(toVisit, 'I am deleteing', toVisitParkId)
      deleteToVisitPark(dispatch, toVisitParkId)
    }
  }

  if (toVisit) {
    return <>
      { isAuthenticated &&
        <div className='flex items-center' >
          <button onClick={() => handleClick(toVisit)}><img src='./icons/bookmark-filled.png' width='20'/></button><span className='ml-2' >Remove from watchlist</span>
        </div>
      }
    </>
  }

  return (
    <>
      {isAuthenticated &&
        <div className='flex items-center'>
          <button onClick={() => handleClick(toVisit)}><img src='./icons/bookmark.png' width='20'/></button><span className='ml-2' >Add to watchlist</span>
        </div>
      }
    </>
  )
}
