const connection = require('./connection')

module.exports = {
  getParks,
  getParkById,
  updatePark
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

function updatePark (updatedPark, db = connection) {
  const { id, name, address, lat, lon, council_url, description, image,
    playground, toilets, picnic_site, sports_field, tramp, dog_walking, approved } = updatedPark
  return db('parks')
    .where('id', id)
    .update({
      approved: approved
    })
    .then(() => getParkById(id, db))
}