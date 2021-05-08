import { getPark } from '../apis/map'

export const SET_MAP = 'SET_MAP'
export const FILTER_MAP = 'FILTER_MAP'
export const REMOVE_FILTER = 'REMOVE_FILTER'

export function setMap (map) {
  return {
    type: SET_MAP,
    map
  }
}

export function fetchMap () {
  return (dispatch) => {
    return getPark()
      .then((result) => {
        dispatch(setMap(result))
        return null
      })
  }
}

export function filterMap (filter) {
  return {
    type: FILTER_MAP,
    filter
  }
}

export function removeFilter (filter) {
  return {
    type: REMOVE_FILTER,
    filter
  }
}
