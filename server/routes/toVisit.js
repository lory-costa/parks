const express = require('express')

const log = require('../logger')
const db = require('../db/toVisit')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { parkId, userId } = req.body
  const toVisit = { parkId, userId }
  const updatedVisitStatus = null
  db.addParkToVisit(toVisit)
    .then(() => {
      res.status(201).json(updatedVisitStatus)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add visit status'
        }
      })
    })
})

router.delete('/', (req, res) => {
  const { id } = req.body
  db.deleteParkFromToVisit({ id })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to remove visit status'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getToVisitByUserId(id)
    .then((visitStatus) => {
      res.json(visitStatus)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve visit status'
        }
      })
    })
})
