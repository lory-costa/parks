export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  const isAdminValue = user['https://parkwise/roles'][0] === 'Admin'
  return {
    type: SET_USER,
    user: {
      id: user.sub,
      name: user.name,
      isAdmin: isAdminValue
    }
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}
