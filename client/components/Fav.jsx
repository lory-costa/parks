import { addToFav, fetchFavParks } from '../actions/favParks'
import { postToFav } from '../apis/favParks'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

export default function Fav ({ parkId }) {
  const userId = useSelector(globalState => globalState.user.id)
  const { isAuthenticated } = useAuth0()
  // const [newFav, setNewFav] = useState('')
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchFavParks(id))
  // }, [])

  const handleClick = (e) => {
    // e.preventDefault()
    postToFav(userId, parkId)
    // setNewFav()
  }
  return (
    <>
      {/* {isAuthenticated && */}
      <div>
        <button onClick={handleClick}><img src='./icons/heart.png'></img></button>
      </div>
      {/* } */}
    </>
  )
}
