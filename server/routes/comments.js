const express = require('express')

const log = require('../logger')
const db = require('../db/parkComment')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { comment, parkId, userId, rating } = req.body
  const newComment = { comment, parkId, userId, rating }
  const createdComment = null
  db.addComment(newComment)
    .then(() => {
      res.status(201).json(createdComment)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to add comment'
        }
      })
    })
})

router.patch('/', (req, res) => {
  const { comment, parkId, id } = req.body
  const updatedComment = { comment, parkId, id }
  db.updateComment(updatedComment)
    .then((comment) => {
      res.status(200).json(comment)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to update comment'
        }
      })
    })
})

router.delete('/', (req, res) => {
  const { id } = req.body
  db.deleteComment({ id })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to remove comment'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getCommentsByParkId(id)
    .then((comment) => {
      res.json(comment)
      return null
    })
    .catch((err) => {
      log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve comment'
        }
      })
    })
})
