import { SET_USER, CLEAR_USER } from '../actions/user'
import userReducer from './user'

describe('user reducer', () => {
  it('returns new user object on "SET_USER"', () => {
    const oldState = {
      id: null,
      name: '',
      isAdmin: false
    }
    const action = {
      type: SET_USER,
      user: {
        id: 5,
        name: 'test user',
        isAdmin: false
      }
    }
    const newState = userReducer(oldState, action)
    expect(newState.name).toBe('test user')
    expect(newState).not.toBe(oldState)
  })

  it('returns default empty user object on "CLEAR_USER"', () => {
    const oldState = {
      id: 5,
      name: 'test user',
      isAdmin: false
    }
    const action = {
      type: CLEAR_USER
    }
    const newState = userReducer(oldState, action)
    expect(newState.id).toBeNull()
    expect(newState).not.toBe(oldState)
  })

  it('returns old state on unknown action type', () => {
    const oldState = {
      name: 'test user',
      isAdmin: false,
      id: 5
    }
    const action = {
      type: 'RANDOM_OTHER_ACTION'
    }
    const newState = userReducer(oldState, action)
    expect(newState).toBe(oldState)
  })
})
