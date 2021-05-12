import { getToVisit, deleteVisit, AddVisit } from '../apis/toVisit'

export const SET_TO_VISIT = 'SET_TO_VISIT'
export const DELETE_TO_VISIT = 'DELETE_TO_VISIT'
export const ADD_TO_VISIT = 'ADD_TO_VISIT'

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

export function addToVisit (userId, parkId) {
  return {
    type: ADD_TO_VISIT,
    toVisit: {
      userId: userId,
      parkId: parkId
    }
  }
}
export function addToVisitPark (dispatch, userId, parkId) {
  return AddVisit(userId, parkId)
    .then(() => {
      dispatch(addToVisit(userId, parkId))
      return null
    })
    .then(() => {
      fetchToVisit(dispatch, userId)
      return null
    })
}
