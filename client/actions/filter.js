export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function addFilter (filter) {
  return {
    type: ADD_FILTER,
    filter: filter
  }
}

export function removeFilter (filter) {
  return {
    type: REMOVE_FILTER,
    filter: filter
  }
}
export function clearFilter () {
  return {
    type: CLEAR_FILTER
  }
}
