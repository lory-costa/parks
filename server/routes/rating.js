const express = require('express')
const log = require('../logger')
const db = require('../db/rating')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
    const { rating, parkId } = req.body
    const parkRating = { rating, parkId }
    let createdRating = null
    db.addRating(rating)
      .then((rating) => {
        postedRating = rating
        return sendRatingNotifications(rating)
      })
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
