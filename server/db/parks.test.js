const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./parks')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

function getTestParks (id) {
  if (id) {
    return testDb('parks')
      .where({ id: id })
      .select()
  }
  return testDb('parks').select()
}

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getParks', () => {
  it('returns the correct number of parks', () => {
    return db.getParks(testDb)
      .then((parks) => {
        expect(parks).toHaveLength(5)
        return null
      })
  })
})

describe('getParkById', () => {
  it('returns the chosen park, with the correct information', () => {
    return db.getParkById(1, testDb)
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

describe('addPark', () => {
  it('inserts park correctly', () => {
    const newPark = {
      name: 'Parks of Testers',
      address: 'NewMarket',
      lat: -36.86437506366873,
      lon: 174.77655125418423,
      url: 'https://www.nicepark.co.nz',
      description: 'Lovely test park',
      image: '/parkImages/imaginaryImage.jpg',
      playGround: true,
      picnicSite: true,
      sportsField: true,
      toilets: true,
      tramp: true,
      dogWalking: true,
      approved: false
    }
    return db.addPark(newPark, testDb)
      .then((park) => {
        expect(park.name).toBe('Parks of Testers')
        expect(park.address).toMatch('NewMarket')
        expect(park.lat).toBe(-36.86437506366873)
        expect(park.lon).toBe(174.77655125418423)
        expect(park.url).toMatch('https')
        expect(park.description).toMatch('park')
        expect(park.image).toMatch('.jpg')
        expect(park.playGround).toBe(1)
        expect(park.toilets).toBe(1)
        expect(park.picnicSite).toBe(1)
        expect(park.sportsField).toBe(1)
        expect(park.tramp).toBe(1)
        expect(park.dogWalking).toBe(1)
        expect(park.approved).toBe(0)
        return null
      })
  })
})

describe('deletePark', () => {
  it('deletes correct park entry', () => {
    const test = {
      id: 5
    }
    return db.deletePark(test, testDb)
      .then(() => getTestParks())
      .then((info) => {
        expect(info).toHaveLength(4)
        return null
      })
  })
})

describe('updatePark', () => {
  it('returns the updatedPark', () => {
    const updatedPark = {
      id: 5,
      name: 'Updated Park',
      address: 'NewPlace',
      lat: -36.86437506365,
      lon: 174.77655125415,
      url: 'https://www.updatedpark.co.nz',
      description: 'Lovely test park',
      image: '/parkImages/imaginaryImage.jpg',
      playGround: true,
      picnicSite: true,
      sportsField: true,
      toilets: true,
      tramp: true,
      dogWalking: true,
      approved: true
    }

    return db.updatePark(updatedPark, testDb)
      .then(park => {
        expect(park.approved).toBe(1)
        return null
      })
  })
})
