import { SET_COMMENTS } from '../actions/comments'

const initialState = []

const comments = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments

    default:
      return state
  }
}

export default comments
