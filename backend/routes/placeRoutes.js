const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')



// index
router.get('/', placeControl.index)

// show
router.get('/:id', placeControl.show)

// seed 
router.get('/seed', placeControl.seed)

module.exports = router