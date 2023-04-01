const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')





// index
router.get('/', placeControl.index)

// create
router.post('/', placeControl.create)

// seed 
router.get('/seed', placeControl.seed)

// delete
router.delete('/:id', placeControl.delete)

// update
router.put('/:id',  placeControl.update)

// show
router.get('/:id', placeControl.show)

//likes
router.put('/:id/likePlace', placeControl.like)





//save
router.put('/', placeControl.save)











//getSaved
router.get("/savedPlaces/ids/:userId", placeControl.getSavedPlaces)

//showSaved
router.get("/savedPlaces/:userId", placeControl.showSavedPlaces)





// EXTRA ROUTES (for destinations)

// router.post('/:id', flightController.createDest)

// router.delete('/:id/dest/:destId', flightController.deleteDest)

// router.put('/:id/dest/:destId', flightController.updateDest)

// router.get('/:id/dest/:destId', flightController.editDest)



module.exports = router