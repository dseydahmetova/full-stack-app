const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
   body: { type: String },
   user: { type: String, required: true },
}, { timestamps: true })


const placeSchema = new Schema({
   image: { type: String,},
   fullName: { type: String, unique: true },
   address: { type: String,},
   city: { type: String,},
   stateCode: { type: String, },
   description: { type: String, },
   weatherInfo: { type: String,},
   likeCount: {
      type: Number,
      default: 0,
  },
  user: {type: String, required: true},
   comments: [  commentSchema ]
}, {timestamps: true})

const Place = mongoose.model('Place', placeSchema)
const Comment = mongoose.model('Comment', commentSchema)

// async function run() {
//    await mongoose.connect('mongodb://localhost:27017');
//    mongoose.model('User', schema);
 
//    await mongoose.model('User').findOne(); // Works!
//  }

 module.exports = Place
