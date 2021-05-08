const connection = require('./connection')

module.exports = {
  addFavPark,
  deleteFavPark,
  getFavByUserId
}

function getFavByUserId (id, db = connection) {
  return db('favParks')
    .select('id', 'park_id as parkId', 'user_id as userId')
    .where('user_id', id)
}

function addFavPark (submission, db = connection) {
  const { userId, parkId } = submission
  return db('favParks')
    .insert({
      user_id: userId,
      park_id: parkId
    })
}

function deleteFavPark (submission, db = connection) {
  const { id } = submission
  return db('favParks')
    .where({ id: id })
    .delete()
}
