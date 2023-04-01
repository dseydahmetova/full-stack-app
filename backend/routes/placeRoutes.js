const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')




// index
router.get('/', placeControl.index)

// seed 
router.get('/seed', placeControl.seed)

//save
router.put('/', placeControl.save)

// create
router.post('/', authorize, placeControl.create)

//getSaved
router.get("/savedPlaces/ids/:userId", placeControl.getSavedPlaces)

//showSaved
router.get("/savedPlaces/:userId", placeControl.showSavedPlaces)

// show
router.get('/:id', placeControl.show)



// EXTRA ROUTES (for destinations)

// router.post('/:id', flightController.createDest)

// router.delete('/:id/dest/:destId', flightController.deleteDest)

// router.put('/:id/dest/:destId', flightController.updateDest)

// router.get('/:id/dest/:destId', flightController.editDest)



module.exports = router