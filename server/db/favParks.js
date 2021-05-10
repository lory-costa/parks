const connection = require('./connection')

module.exports = {
  addFavPark,
  deleteFavPark,
  getFavByUserId
}

function getFavByUserId (id, db = connection) {
  return db('favParks')
    .leftJoin('parks', 'favParks.park_id', 'parks.id')
    .select('favParks.id as id', 'park_id as parkId', 'user_id as userId', 'parks.name as name', 'parks.image as image')
    .where('user_id', id)
}

function addFavPark (submission, db = connection) {
  const { userId, parkId } = submission
  console.log(submission)
  return db('favParks')
    .insert({
      user_id: userId,
      park_id: parkId
    })
}

function deleteFavPark (submission, db = connection) {
  const id = submission
  return db('favParks')
    .where({ id: id })
    .delete()
}
