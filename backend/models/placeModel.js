const mongoose = require('mongoose')

const Schema = mongoose.Schema

const placeSchema = new Schema({
   subject: { type: String },
   body: { type: String },
   user: { type: String, required: true },
   comments: [{
      // an id referencing the comment
      type: mongoose.Types.ObjectId,
      // search for it in the Comments collection
      ref: 'Comment'
   }]
}, { timestamps: true })

const Place = mongoose.model('Post', postSchema)

module.exports = Place