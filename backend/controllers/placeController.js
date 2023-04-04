const Place = require('../models/placeModel')
const User = require('../models/userModel')
const axios = require('axios')

//Seed the places from api to DB
module.exports.seed = async (req, res) => {
    // await Place.deleteMany({})
    const key = process.env.REACT_APP_API_KEY
    try{
        const response = await axios.get(
            `https://developer.nps.gov/api/v1/parks?&api_key=${key}`
        );
       
        const myPlace = response.data.data
     for(let i=0; i< myPlace.length; i++){
                 const places = new Place({
                    image: myPlace[i].images[0]['url'],
                    fullName: myPlace[i].fullName,
                    address: myPlace[i].addresses[0]['line1'],
                    city: myPlace[i].addresses[0]['city'],
                    stateCode: myPlace[i].addresses[0]['stateCode'],
                    description: myPlace[i].description,
                    weatherInfo: myPlace[i].weatherInfo
                 })
                 await places.save()
             }        
    }catch(error){
        console.log(error)
    }
    res.redirect('/places')
}

// get all places from DB
module.exports.index = async (req, res) => {
    const {page} = req.query
    try {
        const LIMIT = 6;
        // get the starting index of every page
        const startIndex = (Number(page) - 1) * LIMIT
        const total = await Place.countDocuments({})
//id = -1 the latest post, limit per page and skip previos pages
        const places = await Place.find().sort({_id: -1}).limit(LIMIT).skip(startIndex)
        res.status(200).json({data: places, currentPage: Number(page), totalnumberOfPages: Math.ceil(total / LIMIT)})
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

//show place by id
module.exports.show = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id)
        res.status(200).json(place)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

//create a new place
module.exports.create = async (req, res) => {
    try {
        const place = await Place.create(req.body)
        res.status(200).json(place)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

//update a place if changes made
module.exports.update = async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPlace)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

//delete the place
module.exports.delete = async (req, res) => {
    try {
        await Place.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

//count the likes for certain place
module.exports.like = async (req, res) => {
    try {
        if(!req.user._id){
            return res.json({message: 'You must be logged in to like a place'})
        }
        const place = await Place.findById(req.params.id) 
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, {likeCount: place.likeCount + 1}, { new: true })
        // const updatedPlace = await Place.findByIdAndUpdate(req.params.id, place, { new: true })

        res.status(200).json(updatedPlace)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}


//save the certain place
module.exports.save = async (req, res) => {
    try {
        const place = await Place.findById(req.body.placeId)
        const user = await User.findByIdAndUpdate(req.body.userId, {
            $push:{
                        savedPlaces: place._id
                    }
        })
        res.status(200).json({savedPlaces: user.savedPlaces})
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


module.exports.getSavedPlaces = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json({savedPlaces: user?.savedPlaces})
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports.showSavedPlaces = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const savedPlaces = await Place.find({
            _id: {$in: user.savedRecipes}
        })
        res.status(200).json({savedPlaces})
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


//search place
//query ->  /places?page=1 -> page = 1

module.exports.search = async (req, res) => {
   const {searchQuery} = req.query
   
    try {
        // i used to lowercase search query  
               const fullName = new RegExp(searchQuery, 'i') 
          const place = await Place.find({fullName}) 
          console.log(place)   
        res.status(200).json({place})
       
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
   
}

// get saved places ids by user id
module.exports.getSavedPlacesIds = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)  
       res.status(200).json({savedPlaces : user?.savedPlaces})
   } catch(err) {
       res.status(404).json({ error: err.message })
   }
    
 }

 // get saved places by 
module.exports.getSavedPlaces = async (req, res) => {
     try {
          const user = await User.findById(req.params.id)
          const savedPlaces = await Place.find({
            _id: {$in: user.savedRecipes}
          })
          console.log(savedPlaces)    
         res.status(200).json({savedPlaces})
     } catch(err) {
         res.status(404).json({ error: err.message })
     }
    
 }




// EXTRA CODE FOR COMMENTS

