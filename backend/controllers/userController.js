const User = require('../models/userModel')

module.exports.show = async (req, res) => {
    try{
        const foundUser = await User.findById(req.id)

        res.json({
            name: foundUser.name,
            lastname: foundUser.lastname,
            username: foundUser.username,
            email: foundUser.email,
            favoritePlaces: [foundUser.favoritePlaces],
            id: req.id
        })
    }catch(error){
        res.json({error: error.message})
    }
}

module.exports.update = async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(200).json(updatedUser)
    }catch(error){
        res.json({error: error.message})
    }
}

module.exports.delete = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        res.status(200).json({message: 'deleted successfully'})
    }catch(error){
        res.json({error: error.message})
    }
}
