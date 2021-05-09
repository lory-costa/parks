import { getPark } from '../apis/map'

export const SET_MAP = 'SET_MAP'

export function setMap (map) {
  return {
    type: SET_MAP,
    map
  }
}

export function fetchMap (dispatch) {
  return getPark()
    .then((result) => {
      dispatch(setMap(result))
      return result
    })
}
