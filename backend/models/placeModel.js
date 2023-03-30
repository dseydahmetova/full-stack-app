const mongoose = require('mongoose')

const Schema = mongoose.Schema

const placeSchema = new Schema({
  
   image: { type: String,},
   fullName: { type: String, unique: true },
   address: { type: String,},
   city: { type: String,},
   stateCode: { type: String, },
   description: { type: String, },
   weatherInfo: { type: String,},
   comments: [
      {
         body: { type: String },
         user: { type: String },
         image: {type: String}
      }
   ]
})

const Place = mongoose.model('Place', placeSchema)

 module.exports = Place
