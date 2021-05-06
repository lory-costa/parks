const express = require('express')
const log = require('../logger')
const db = require('../db/parks')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getParks()
    .then((parks) => {
      return res.json({ parks })
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve parks'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  // const user = req.user || {}
  db.getParkById(id)
    .then(foundPark => {
      // Create a deep copy of the park
      const park = JSON.parse(JSON.stringify(foundPark))
      // if (!user.isAdmin) {
      //   park.events.forEach(event => {
      //     event.totalVolunteers = event.volunteers.length
      //     event.isVolunteer = event.volunteers.some((v) => v.username === user.username)
      //     delete event.volunteers
      //   })
      // } else {
      //   park.events.forEach(event => {
      //     event.totalVolunteers = event.volunteers.length
      //     event.isVolunteer = event.volunteers.some((v) => v.username === user.username)
      //   })
      // }
      return res.json(park)
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve park'
        }
      })
    })
})
