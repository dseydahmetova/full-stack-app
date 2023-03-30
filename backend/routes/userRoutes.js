const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

router.get('/', userController.show)
router.post('/name', userController.profile)
router.post('/:id/', authorize, userController.createFav)

module.exports = router
