const jwt = require('jsonwebtoken')

const Place = require('../models/placeModel')
const Comment = require('../models/placeModel')


async function authorize(req, res, next) {
    try{
        //check if the request has a token
        let token = req.header('Authorization')

        if(!token){
            throw new Error('No token provided')
        }

        token = token.replace('Bearer ', '')

        //check that the token is valid and not expired
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        
        if(payload.error){
            throw new Error(payload.error)
        }

        //attach the payload from the token to the request object
        req.id = payload.id
        req.user = payload.user

        //move on to the next route
        next()
    }catch(err){
        res.status(403).json({error: err.message})
    }
}

async function confirmUserAccess(req, res, next) {
    try {
        let document;
        if (req.baseUrl.includes('place')) { 
            document = await Place.findOne({ _id: req.params.id, user: req.user })
        } else {
            document = await Comment.findOne({ _id: req.params.id, user: req.user })
        }
        if (!document) {
            throw new Error('User did not create this document')
        }
        next()
    } catch(err) {
        res.status(403).json({ error: err.message })
    }
}

module.exports = {
    authorize,
    confirmUserAccess
}
