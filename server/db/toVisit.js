const connection = require('./connection')

module.exports = {
  addParkToVisit,
  deleteParkFromToVisit,
  getToVisitByUserId
}

function getToVisitByUserId (id, db = connection) {
  return db('toVisit')
  .select('id', 'park_id as parkId', 'user_id as userId')
  .where('user_id', id)
}

function addParkToVisit (submission, db = connection) {
  const { userId, parkId } = submission
  return db('toVisit')
    .insert({
      user_id: userId,
      park_id: parkId
    })
}

function deleteParkFromToVisit (submission, db = connection) {
  const { id } = submission
  return db('toVisit')
    .where({ id: id })
    .delete()
}
