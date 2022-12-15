import express from 'express'
import connection from './connection.js'
import Bookmark from './models/Bookmark.js'

const app = express()

app.listen(3000, () => {
  console.log('app listening on port 3000')
})

app.get('/', async (req, res) => {
  const bookmarks = await Bookmark.find({})
  res.json(bookmarks)
})
