const express = require('express')
const router = express.Router()
const userController = require('./backend/controllers/userController')


router.delete('/:id', userController.delete)
router.put('/:id', userController.update)
router.get('/', userController.show)
module.exports = router
