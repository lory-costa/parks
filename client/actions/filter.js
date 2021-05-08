export const SET_FILTER = 'SET_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function setFilter () {
  return {
    type: SET_FILTER
  }
}

export function clearFilter () {
  return {
    type: CLEAR_FILTER
  }
}
