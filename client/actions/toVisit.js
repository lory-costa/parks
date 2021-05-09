import { getToVisit } from '../apis/toVisit'

export const SET_TO_VISIT = 'SET_TO_VISIT'
export const CLEAR_TO_VISIT = 'CLEAR_TO_VISIT'

export function setToVisit (toVisit) {
  return {
    type: SET_TO_VISIT,
    toVisit
  }
}

export function fetchToVisit (dispatch, id) {
  return getToVisit(id)
    .then((result) => {
      dispatch(setToVisit(result))
      return null
    })
}

export function clearToVisit () {
  return {
    type: CLEAR_TO_VISIT
  }
}
