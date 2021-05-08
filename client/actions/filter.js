export const SET_FILTER = 'SET_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function setFilter (filter) {
  return {
    type: SET_FILTER,
    filter: filter
  }
}

export function clearFilter () {
  return {
    type: CLEAR_FILTER
  }
}
