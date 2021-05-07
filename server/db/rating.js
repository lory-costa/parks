
const connection = require('./connection')

function getRatingByParkId (parkId, db = connection) {
  return db('rating')
    .where('park_id', parkId)
    .select(
      'id',
      'user_id as userId',
      'park_id as parkId',
      'rating'
    )
}

function addRating (newRating, db = connection) {
  const { parkId, userId, rating } = newRating
  return db('rating')
    .insert({
      park_id: parkId,
      user_id: userId,
      rating
    })
}

function updateRating (updatedEvent, db = connection) {
  const { parkId, rating } = updatedRating
  return db('rating').where('parkId', parkId)
    .update({
      id: parkId,
      rating
    })
    .then(() => getRatingById(id, db))
}

module.exports = {
  getRatingByParkId,
  addRating,
  updateRating
}
