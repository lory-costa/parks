import request from 'superagent'
import { useAuth0 } from '@auth0/auth0-react'

export function getUser () {
  const { user } = useAuth0()
  //   console.log(user)

  return user
}
