import mongoose from 'mongoose'
import connection from '../connection.js'
import data from './bookmarks.json' assert { type: 'json' }
import Bookmark from '../models/Bookmark.js'

let bookmarkData = data.map(item => {
  return {
    title: item.title,
    url: item.url
  }
})

await Bookmark.deleteMany({})
await Bookmark.create(bookmarkData)
console.log('done')
mongoose.disconnect()


