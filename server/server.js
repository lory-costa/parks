const express = require('express')
const path = require('path')

const parkRoutes = require('./routes/parks')
const commentRoutes = require('./routes/comments')
const toVisitRoutes = require('./routes/toVisit')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/park', parkRoutes)
server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/visit', toVisitRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
