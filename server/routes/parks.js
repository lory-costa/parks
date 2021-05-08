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

router.post('/', (req, res) => {
  const { id, name, address, description, lat, lon, url, image, playGround, picnicSite, sportsField, toilets, tramp, dogWalking, approved } = req.body
  const newPark = { id, name, address, description, lat, lon, url, image, playGround, picnicSite, sportsField, toilets, tramp, dogWalking, approved }
  const createdPark = null
  db.addPark(newPark)
    .then(() => {
      res.status(201).json(createdPark)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add park'
        }
      })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.body
  db.deletePark({ id })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to remove park'
        }
      })
    })
})

router.patch('/:id', (req, res) => {
  const { id, approved } = req.body
  const updatedPark = { id, approved }
  db.updatePark(updatedPark)
    .then((park) => {
      res.status(200).json(park)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to update event'
        }
      })
    })
})
