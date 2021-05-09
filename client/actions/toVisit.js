import { getToVisit, deleteVisit } from '../apis/toVisit'

export const SET_TO_VISIT = 'SET_TO_VISIT'
export const DELETE_TO_VISIT = 'DELETE_TO_VISIT'

export function setToVisit (toVisit) {
  return {
    type: SET_TO_VISIT,
    toVisit
  }
}

export function delToVisit (id) {
  return {
    type: DELETE_TO_VISIT,
    id
  }
}

export function fetchToVisit (dispatch, id) {
  return getToVisit(id)
    .then((result) => {
      dispatch(setToVisit(result))
      return null
    })
}

export function deleteToVisitPark (dispatch, id) {
  return deleteVisit(id)
    .then(() => {
      dispatch(delToVisit(id))
      return null
    })
}
