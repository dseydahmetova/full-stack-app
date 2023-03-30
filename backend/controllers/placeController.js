// const Places = require('../models/postModel')



module.exports.index = async (req, res) => {
    // try {
    //     const posts = await Places.find().sort({ createdAt: 1 })
    //     res.status(200).json(posts)
    // } catch(err) {
    //     res.status(400).json({ error: err.message })
    // }
    res.render('Index')
}
