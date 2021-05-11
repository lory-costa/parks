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

// describe('addFavPark', () => {
//   it('inserts comment correctly', () => {
//     const newComment = {
//       parkId: 2,
//       userName: 'test user',
//       comment: 'test comment',
//       rating: 5
//     }
//     return db.addComment(newComment, testDb)
//       .then((parkComments) => {
//         expect(parkComments).toHaveLength(3)
//         expect(parkComments[2].parkId).toBe(2)
//         expect(parkComments[2].userName).toMatch('test user')
//         expect(parkComments[2].comment).toMatch('test comment')
//         expect(parkComments[2].rating).toBe(5)
//         return null
//       })
//   })
// })

// describe('deleteComment', () => {
//   it('deletes correct comment entry', () => {
//     const test = {
//       id: 3
//     }
//     return db.deleteComment(test, testDb)
//       .then(() => getTestComment())
//       .then((info) => {
//         expect(info).toHaveLength(7)
//         return null
//       })
//   })
// })
