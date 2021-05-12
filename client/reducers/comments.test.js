import { SET_COMMENTS } from '../actions/comments'
import commentsReducer from './comments'

describe('location reducer', () => {
  it('returns new comment object on "SET_COMMENTS"', () => {
    const oldState = {
      comments: 'looool'
    }
    const action = {
      type: SET_COMMENTS,
      comments: {
        comment: 'lol'
      }
    }
    const newState = commentsReducer(oldState, action)
    expect(newState.comment).toBe('lol')
    expect(newState).not.toBe(oldState)
  })

  it('returns old state on unknown action type', () => {
    const oldState = {
      comments: 'looool'
    }
    const action = {
      type: 'RANDOM_OTHER_ACTION'
    }
    const newState = commentsReducer(oldState, action)
    expect(newState).toBe(oldState)
  })
})
