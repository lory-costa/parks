const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./parkComment')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

function getTestComment (id) {
  if (id) {
    return testDb('parkComment')
      .where({ id: id })
      .select()
  }
  return testDb('parkComment').select()
}

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getCommentsByParkId', () => {
  it('returns the chosen comment, with the correct information', () => {
    return db.getCommentsByParkId(1, testDb)
      .then(parkComments => {
        expect(parkComments[0].id).toBe(1)
        expect(parkComments[0].parkId).toBe(1)
        expect(parkComments[0].userName).toMatch('Anna')
        expect(parkComments[0].comment).toMatch('Nice Park')
        expect(parkComments[0].rating).toBe(4)
        return null
      })
  })
})

describe('addComment', () => {
  it('inserts comment correctly', () => {
    const newComment = {
      parkId: 2,
      userName: 'test user',
      comment: 'test comment',
      rating: 5
    }
    return db.addComment(newComment, testDb)
      .then((parkComments) => {
        expect(parkComments).toHaveLength(3)
        expect(parkComments[2].parkId).toBe(2)
        expect(parkComments[2].userName).toMatch('test user')
        expect(parkComments[2].comment).toMatch('test comment')
        expect(parkComments[2].rating).toBe(5)
        return null
      })
  })
})

describe('deleteComment', () => {
  it('deletes correct comment entry', () => {
    const test = {
      id: 3
    }
    return db.deleteComment(test, testDb)
      .then(() => getTestComment())
      .then((info) => {
        expect(info).toHaveLength(8)
        return null
      })
  })
})

describe('updateComment', () => {
  it('returns the updated Comment', () => {
    const updatedComment = {
      id: 1,
      parkId: 1,
      comment: 'Another test comment'
    }
    return db.updateComment(updatedComment, testDb)
      .then(parkComment => {
        expect(parkComment[0].comment).toMatch('Another test comment')
        return null
      })
  })
})
