const express = require('express')

const log = require('../logger')
const db = require('../db/favParks')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { parkId, userId } = req.body
  const favParks = { parkId, userId }
  const updatedFavStatus = null
  db.addFavPark(favParks)
    .then(() => {
      res.status(201).json(updatedFavStatus)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add favourite'
        }
      })
    })
})

router.delete('/', (req, res) => {
  const { id } = req.body
  db.deleteFavPark({ id })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to remove favourite'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getFavByUserId(id)
    .then((visitStatus) => {
      res.json(visitStatus)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve favourite'
        }
      })
    })
})
