const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./parkComment')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

// function getTestParks (id) {
//   if (id) {
//     return testDb('parks')
//       .where({ id: id })
//       .select()
//   }
//   return testDb('parks').select()
// }

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getCommentsByParkId', () => {
  it('returns the chosen comment, with the correct information', () => {
    return db.getCommentsByParkId(1, testDb)
      .then(park => {
        expect(park.id).toBe(1)
        expect(park.name).toBe('Dove-Myer Robinson Park')
        expect(park.address).toMatch('Gladstone Road')
        expect(park.lat).toBe(-36.85024591664261)
        expect(park.lon).toBe(174.78678568198526)
        expect(park.url).toMatch('https')
        expect(park.description).toMatch('Sir')
        expect(park.image).toMatch('.jpg')
        expect(park.playGround).toBe(0)
        expect(park.toilets).toBe(1)
        expect(park.picnicSite).toBe(1)
        expect(park.sportsField).toBe(0)
        expect(park.tramp).toBe(0)
        expect(park.dogWalking).toBe(1)
        expect(park.approved).toBe(1)
        return null
      })
  })
})
