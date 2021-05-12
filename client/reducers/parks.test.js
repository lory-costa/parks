import { SET_PARK } from '../actions/park'
import parkReducer from './park'

describe('park reducer', () => {
  it('returns new park object on "SET_PARKS"', () => {
    const oldPark = {
      id: 1,
      park_name: 'cool park'
    }

    const action = {
      type: SET_PARK,
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
