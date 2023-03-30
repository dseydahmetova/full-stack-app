const User = require('../models/userModel')

module.exports.show = async (req, res) => {
    try{
        const foundUser = await User.findById(req.id)

        res.json({
            username: foundUser.username,
            email: foundUser.email,
            favoritePlaces: foundUser.favoritePlaces,
            id: req.id
        })
    }catch(error){
        res.json({error: error.message})
    }
}

module.exports.createFav = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {
            $push: {
                favoritePlaces: req.body
            }
        })
        res.json({message:'added to favorites'})
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports.profile = async (req, res) => {
    try{
        const foundUser = await User.findById(req.id)

        res.json({
            username: foundUser.username,
            email: foundUser.email,
            id: req.id
        })
    }catch(error){
        res.json({error: error.message})
    }
}