const express = require('express')
const log = require('../logger')
const db = require('../db/rating')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { rating, userId, parkId } = req.body
  const newRating = { rating, userId, parkId }
  const createdRating = null
  db.addRating(newRating)
    .then(() => {
      res.status(201).json(createdRating)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add rating'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getRatingByParkId(id)
    .then((rating) => {
      res.json(rating)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve rating'
        }
      })
    })
})

router.patch('/', (req, res) => {
    const { rating, parkId, id } = req.body
    const updatedRating = { rating, parkId, id }
    db.updateRating(updatedRating)
      .then((rating) => {
        res.status(200).json(rating)
        return null
      })
      .catch((err) => {
        log(err.message)
        res.status(500).json({
          error: {
            title: 'Unable to update rating'
          }
        })
      })
  })

//   router.delete('/', (req, res) => {
//     const { id } = req.body
//     db.deleteRating({ id })

//   })