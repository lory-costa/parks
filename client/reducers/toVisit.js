import { SET_TO_VISIT, DELETE_TO_VISIT } from '../actions/toVisit'

const initialState = []

const toVisit = (state = initialState, action) => {
  switch (action.type) {
    case SET_TO_VISIT:
      return action.toVisit

    case DELETE_TO_VISIT:
      return state.filter(toVisitPark => toVisitPark.id !== action.id)

    default:
      return state
  }
}

export default toVisit
