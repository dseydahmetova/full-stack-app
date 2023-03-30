const Place = require('../models/placeModel')
const axios = require('axios')




module.exports.seed = async (req, res) => {

    const key = 'Wkbi1lT4S7DeLlieN07oVPk4c3n8rycPXNhpbb3W'
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
       
        // console.log("myplace", myPlace)
        
    }catch(error){
        console.log(error)
    }

    res.redirect('/places')
}


module.exports.index = async (req, res) => {
    try {
        const places = await Place.find()
        res.status(200).json(places)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id)
        res.status(200).json(place)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}