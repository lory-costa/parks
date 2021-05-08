import { getUser } from '../apis/user'
import { useAuth0 } from '@auth0/auth0-react'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  console.log(user)
  return {
    type: SET_USER,
    user: {
      id: user.sub,
      name: user.name
    }
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}
