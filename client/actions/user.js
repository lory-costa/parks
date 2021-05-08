import { getUser } from '../apis/user'
import { useAuth0 } from '@auth0/auth0-react'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser () {
  return {
    type: SET_USER
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

// export function fetchUser (parkId) {
//   const { user } = useAuth0()

//   console.log(user)
//   // return (dispatch) => {
//   //   return getUser()
//   //     .then((result) => {
//   //       dispatch(setUser(result))
//   //       return null
//   //     })
//   // }
//   return {
//     type: SET_USER
//   }
// }