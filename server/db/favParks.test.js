const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./favParks')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

function getTestFavourites (id) {
  if (id) {
    return testDb('favParks')
      .where({ id: id })
      .select()
  }
  return testDb('favParks').select()
}

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getFavByUserId', () => {
  it('returns the chosen favourite, with the correct information', () => {
    return db.getFavByUserId('auth0|60931e425f2168006b5bbaba', testDb)
      .then(favParks => {
        expect(favParks[0].id).toBe(5)
        expect(favParks[0].parkId).toBe(1)
        expect(favParks[0].userId).toMatch('auth0|60931e425f2168006b5bbaba')
        expect(favParks[0].name).toMatch('Dove-Myer Robinson Park')
        expect(favParks[0].image).toMatch('https://res.cloudinary.com/dvsikj1gh/image/upload/v1620789885/Public/parkImages/cj6cbnq97yprvqno2l2s.jpg')
        return null
      })
  })
})

describe('addFavPark', () => {
  it('inserts favourite park correctly', () => {
    const newFav = {
      userId: 'auth0|60931e425f2168006b5bbaba',
      parkId: 5
    }
    return db.addFavPark(newFav, testDb)
      .then((favParks) => {
        expect(favParks).toHaveLength(5)
        expect(favParks[4].parkId).toBe(5)
        expect(favParks[4].userId).toMatch('2')
        return null
      })
  })
})

describe('deleteFavPark', () => {
  it('deletes correct favourite entry', () => {
    const test = {
      id: 3
    }
    return db.deleteFavPark(test, testDb)
      .then(() => getTestFavourites())
      .then((info) => {
        expect(info).toHaveLength(8)
        return null
      })
  })
})
