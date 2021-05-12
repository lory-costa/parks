import { SET_PARKS } from '../actions/parks'
import parkReducer from './parks'

describe('park reducer', () => {
  it('returns new park object on "SET_PARKS"', () => {
    const oldPark = {
      id: 1,
      park_name: 'cool park'
    }

    const action = {
      type: SET_PARKS,
      park: {
        id: 2,
        park_name: 'very cool park'
      }
    }
    const newState = parkReducer(oldPark, action)
    expect(newState.id).toBe(2)
    expect(newState).not.toBe(oldPark)
  })

  it('returns old state on unknown action type', () => {
    const oldPark = {
      id: 1,
      name: 'cool park'
    }

    const action = {
      type: 'RANDOM_OTHER_ACTION'
    }
    const newState = parkReducer(oldPark, action)
    expect(newState).toBe(oldPark)
  })
})
