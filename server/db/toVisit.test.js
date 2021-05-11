const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./toVisit')

jest.setTimeout(10000)

function getTesttoVisit (id) {
    if (id) {
        return testDb('toVisit')
          .where({ id: id })
          .select
    }
    return testDb('toVisit').select()
}

beforeAll(() => {
    return testDb.migrate.latest()
})

beforeEach(() => {
    return testDb.seed.run()
})

describe('getToVisitByUserId', () => {
    it('returns info on the parks visited by userID and is correct', () => {
      return db.getToVisitByUserId(1, testDb)
        .then(toVisit => {
            console.log(toVisit)
          expect(toVisit[0].id).toBe(2)
          expect(toVisit[0].parkId).toBe(2)
          expect(toVisit[0].userId).toBe(1)
          expect(toVisit[0].name).toMatch('Mt Hobson Path')
          expect(toVisit[0].image).toMatch('mtHobsonPath')
          return null
        })
    })
  })
  