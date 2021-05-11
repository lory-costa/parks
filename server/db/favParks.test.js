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
    return db.getFavByUserId(1, testDb)
      .then(favParks => {
        expect(favParks[0].id).toBe(2)
        expect(favParks[0].parkId).toBe(2)
        expect(favParks[0].userId).toMatch('1')
        expect(favParks[0].name).toMatch('Mt Hobson Path')
        expect(favParks[0].image).toMatch('mtHobsonPath')
        return null
      })
  })
})

describe('addFavPark', () => {
  it('inserts favourite park correctly', () => {
    const newFav = {
      userId: 2,
      parkId: 5
    }
    return db.addFavPark(newFav, testDb)
      .then((favParks) => {
        expect(favParks).toHaveLength(3)
        expect(favParks[2].parkId).toBe(5)
        expect(favParks[2].userId).toMatch('2')
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
        expect(info).toHaveLength(12)
        return null
      })
  })
})
