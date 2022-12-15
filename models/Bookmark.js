import mongoose from 'mongoose'

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String
})

export default mongoose.model('Bookmark', bookmarkSchema)
