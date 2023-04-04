const express = require('express')

const router = express.Router()

const placeControl = require('../controllers/placeController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')



// index
router.get('/', placeControl.index)

// create
router.post('/', placeControl.create)

//save
router.put('/', placeControl.save)

// seed 
router.get('/seed', placeControl.seed)

//search
router.get('/search', placeControl.search)

// delete
router.delete('/:id', placeControl.delete)

// update
router.put('/:id',  placeControl.update)

// show
router.get('/:id', placeControl.show)

//like
router.put('/:id/likePlace', placeControl.like)

// Get id of saved place
router.get("/savedPlaces/ids/:id", placeControl.getSavedPlacesIds)

// Get saved place
router.get("/savedPlaces/:id", placeControl.getSavedPlaces)

//showSaved
router.get("/savedPlaces/:id", placeControl.showSavedPlaces)





// EXTRA ROUTES (for destinations)

// router.post('/:id', flightController.createDest)

// router.delete('/:id/dest/:destId', flightController.deleteDest)

// router.put('/:id/dest/:destId', flightController.updateDest)

// router.get('/:id/dest/:destId', flightController.editDest)



module.exports = router