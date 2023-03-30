const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')


// index
router.get('/', placeControl.index)

module.exports = router