const connection = require('./connection')

module.exports = {
  getParks,
  getParkById,
  updatePark,
  addPark,
  deletePark
}

function getParks (db = connection) {
  return db('parks').select()
}

function getParkById (id, db = connection) {
  return db('parks')
    .where('parks.id', id)
    .select(
      'parks.description as description',
      'parks.id as id',
      'name',
      'address',
      'lat',
      'lon',
      'council_url as url',
      'image',
      'playground',
      'picnic_site',
      'sports_field',
      'toilets',
      'tramp',
      'dog_walking',
      'approved'
    )
    .then((result) => {
      const park = result[0]
      return {
        id: park.id,
        name: park.name,
        address: park.address,
        description: park.description,
        lat: park.lat,
        lon: park.lon,
        url: park.url,
        image: park.image,
        playGround: park.playground,
        picnicSite: park.picnic_site,
        sportsField: park.sports_field,
        toilets: park.toilets,
        tramp: park.tramp,
        dogWalking: park.dog_walking,
        approved: park.approved
      }
    })
}

function addPark (newPark, db = connection) {
  const { id, name, address, description, lat, lon, url, image, playGround, picnicSite, sportsField, toilets, tramp, dogWalking, approved } = newPark
  return db('parks')
    .insert({
      id: id,
      name: name,
      address: address,
      description: description,
      lat: lat,
      lon: lon,
      council_url: url,
      image: image,
      playGround: playGround,
      picnic_site: picnicSite,
      sports_field: sportsField,
      toilets: toilets,
      tramp: tramp,
      dog_Walking: dogWalking,
      approved: approved
    })
}

function deletePark (submission, db = connection) {
  const { id } = submission
  return db('parks')
    .where({ id: id })
    .delete()
}

function updatePark (updatedPark, db = connection) {
  const { id, name, address, description, lat, lon, url, image, playGround, picnicSite, sportsField, toilets, tramp, dogWalking, approved } = updatedPark
  return db('parks')
    .where('id', id)
    .update({
      name: name,
      address: address,
      description: description,
      lat: lat,
      lon: lon,
      council_url: url,
      image: image,
      playGround: playGround,
      picnic_site: picnicSite,
      sports_field: sportsField,
      toilets: toilets,
      tramp: tramp,
      dog_Walking: dogWalking,
      approved: approved
    })
    .then(() => getParkById(id, db))
}
