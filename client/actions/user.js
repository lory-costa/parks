export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  const role = user['https://parkwise/roles'] || false
  const isAdminValue = role && role[0] === 'Admin'
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
